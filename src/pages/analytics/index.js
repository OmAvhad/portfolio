import axios from 'axios';

export async function getServerSideProps() {
    try {
        const { data } = await axios.get('https://portfolio-analytics-0kux.onrender.com/requests');
        console.log(data);
        return {
            props: { data },
        };
    } catch (error) {
        console.error(error);
        return {
          props: { data: null },
        };
    }
}    

export default function Analytics({ data }) {
    if (!data) {
        return (
            <div>
                Failed to fetch data
            </div>
        )
    }

    return (
        <>
            <h1 className='text-5xl pb-4'>Analytics</h1>
            <div className='flex flex-col space-y-4'>
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
        </>
    )
}