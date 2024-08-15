import { useEffect, useState } from 'react';
import axios from 'axios';
import analytics from '../../../config/api';

export default function RequestMetrics() {
    
    const [data, setData] = useState({
        requests: 0,
        uniqueRequests: 0,
        requestsLastMonth: 0,
        uniqueRequestsLastMonth: 0,
        requestsLastWeek: 0,
        uniqueRequestsLastWeek: 0,
        requestsLast24Hours: 0,
        uniqueRequestsLast24Hours: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${analytics}/requests`);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='grid gap-4 sm:grid-cols-1 sm:gap-4 md:grid-cols-4 lg:grid-cols-4'>
            <div>
                <h2 className='text-3xl'>Last 24 Hrs</h2>
                <h3>Requests: {data.requestsLast24Hours}</h3>
                <h3>Unique Requests: {data.uniqueRequestsLast24Hours}</h3>
            </div>
            <div>
                <h2 className='text-3xl'>Last Week</h2>
                <h3>Requests: {data.requestsLastWeek}</h3>
                <h3>Unique Requests: {data.uniqueRequestsLastWeek}</h3>
            </div>
            <div>
                <h2 className='text-3xl'>Last Month</h2>
                <h3>Requests: {data.requestsLastMonth}</h3>
                <h3>Unique Requests: {data.uniqueRequestsLastMonth}</h3>
            </div>
            <div>
                <h2 className='text-3xl'>Overall</h2>
                <h3>Requests: {data.requests}</h3>
                <h3>Unique Requests: {data.uniqueRequests}</h3>
            </div>
        </div>
    );
}