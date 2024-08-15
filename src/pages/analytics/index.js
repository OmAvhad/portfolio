import axios from 'axios';

export async function getServerSideProps() {
    try {
        const { data } = await axios.get('https://portfolio-analytics-self.vercel.app/requests');
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
    } else {
        console.log(data);
    }

    return (
        <>
            Analytics
        </>
    )
}