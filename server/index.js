const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.set('trust proxy', true);
 
// CORS
app.use(cors());
// Middleware
app.use(express.json()); // Parse JSON bodies

// MongoDB connection
mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a Schema that will log ip address and timestamp of each request
const RequestSchema = new mongoose.Schema({
    ip: String,
    timestamp: Date,
    source: String,
    ipDetails: {
        country: String,
        contryCode: String,
        region: String,
        regionName: String,
        city: String,
        zip: String,
        lat: Number,
        lon: Number,
        timezone: String,
        isp: String,
        org: String,
        as: String
    }
});

const Request = mongoose.model('Request', RequestSchema);

app.get('/', (req, res) => {
    // Get IP from headers if available
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // If IP is a list (comma-separated), get the first one
    if (typeof ip === 'string') {
        // Split the list and take the first IP
        ip = ip.split(',')[0].trim();
    }

    // Handle IPv6 localhost case
    if (ip === '::1' || ip === '127.0.0.1') {
        res.json({ message: 'You are accessing from localhost.' });
    } else {
        res.json({ message: `Hello! Your IP address is: ${ip}` });
    }
});

app.post('/request', async (req, res) => {
    // Get IP from headers if available
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // If IP is a list (comma-separated), get the first one
    if (typeof ip === 'string') {
        // Split the list and take the first IP
        ip = ip.split(',')[0].trim();
    }

    const timestamp = new Date();

    const source = req.body.referrer || 'direct';

    // make a api call to get the ip address details
    try {
        // const ipData = await fetch(`http://ip-api.com/json/${ip}`);
        // const ipDetails = await ipData.json();
        // // create a new Request document
        // const newRequest = new Request({ ip, timestamp, source, ipDetails });
        // await newRequest.save();
        res.send('Request logged!');
    } catch (err) {
        console.error('Error fetching ip details:', err);
        res.status(500).send('Error fetching ip details');
    }
}); 

app.get('/requests', async (req, res) => {
    // overall
    const requests = (await Request.find()).length;  
    const uniqueRequests = (await Request.distinct('ip')).length;

    // from one month
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const requestsLastMonth = (await Request.find({ timestamp: { $gte: oneMonthAgo } })).length;
    const uniqueRequestsLastMonth = (await Request.distinct('ip', { timestamp: { $gte: oneMonthAgo } })).length;

    // for one week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const requestsLastWeek = (await Request.countDocuments({ timestamp: { $gte: oneWeekAgo } }));
    const uniqueRequestsLastWeek = (await Request.distinct('ip', { timestamp: { $gte: oneWeekAgo } })).length;

    // for last 24 hours
    const last24Hours = new Date();
    last24Hours.setHours(last24Hours.getHours() - 24);
    const requestsLast24Hours = (await Request.countDocuments({ timestamp: { $gte: last24Hours } }));
    const uniqueRequestsLast24Hours = (await Request.distinct('ip', { timestamp: { $gte: last24Hours } })).length;

    const data = {
        requests,
        uniqueRequests,
        requestsLastMonth,
        uniqueRequestsLastMonth,
        requestsLastWeek,
        uniqueRequestsLastWeek,
        requestsLast24Hours,
        uniqueRequestsLast24Hours
    };

    res.json(data);
});

// get list of cities and number of requests from each city
app.get('/requests/cities', async (req, res) => {
    const cities = await Request.aggregate([
        { $group: { _id: '$ipDetails.city', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
    ]);

    res.json(cities);
});

// fetch all lat and lon from the database
app.get('/requests/coordinates', async (req, res) => {
    const coordinates = await Request.aggregate([
        {
            $project: {
                _id: 0, // Exclude _id field
                lat: "$ipDetails.lat",
                lon: "$ipDetails.lon"
            }
        }
    ]);
    res.json(coordinates);
});

app.get('/requests/graph-metrics', async (req, res) => {
    const frame = req.query.frame || '24h';
    let data = [];
    let labels = [];
    let groupBy = '';
    let match = {};
    
    switch (frame) {
        case '24h':
            groupBy = { name: { $hour: '$timestamp' } };
            break;
        case '7d':
            groupBy = { name: { $dateToString: { format: '%d-%m', date: '$timestamp' } } };
            break;
        case '1m':
            groupBy = { name: { $dateToString: { format: '%d-%m', date: '$timestamp' } } };
            match = { timestamp: { $gte: new Date(new Date().setMonth(new Date().getMonth() - 1)) } };
            break;
        case '1y':
            groupBy = { name: { $dateToString: { format: '%Y-%m', date: '$timestamp' } } };
            break;
        default:
            groupBy = { name: { $hour: '$timestamp' } };
    }

    data = await Request.aggregate([
        { $match: match },
        { $group: { _id: groupBy, count: { $sum: 1 } } },
        { $sort: { _id: 1 } }
    ]);

    let sum_count = 0;

    data.forEach(item => {
        sum_count += item.count;
        labels.push(item._id);
    });

    res.json({ data, labels, total: sum_count });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
