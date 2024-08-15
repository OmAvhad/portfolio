const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json()); // Parse JSON bodies

// CORS
app.use(cors());

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

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/request', async (req, res) => {
    // fetch ip address from request headers
    const ip = req.ip;
    const timestamp = new Date();

    // make a api call to get the ip address details
    try {
        const ipData = await fetch(`http://ip-api.com/json/${ip}`);
        const ipDetails = await ipData.json();
    } catch (err) {
        console.error('Error fetching ip details:', err);
        res.status(500).send('Error fetching ip details');
    }

    // create a new Request document
    const newRequest = new Request({ ip, timestamp, ipDetails });
    await newRequest.save();
    res.send('Request logged!');
}); 

app.get('/requests', async (req, res) => {
    // overall
    const requests = await Request.countDocuments();  
    const uniqueRequests = (await Request.distinct('ip')).length;

    // from one month
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const requestsLastMonth = await Request.countDocuments({ timestamp: { $gte: oneMonthAgo } });
    const uniqueRequestsLastMonth = (await Request.distinct('ip', { timestamp: { $gte: oneMonthAgo } })).length;

    // for one week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const requestsLastWeek = await Request.countDocuments({ timestamp: { $gte: oneWeekAgo } });
    const uniqueRequestsLastWeek = (await Request.distinct('ip', { timestamp: { $gte: oneWeekAgo } })).length;

    // for last 24 hours
    const last24Hours = new Date();
    last24Hours.setHours(last24Hours.getHours() - 24);
    const requestsLast24Hours = await Request.countDocuments({ timestamp: { $gte: last24Hours } });
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
