import { useEffect, useState } from "react";
import axios from "axios";
import analytics from '../../../config/api';

export default function CityMetrics() {

    const [data, setData] = useState([]);
    const [loadMore, setLoadMore] = useState(false);
    const [citiesCount, setCitiesCount] = useState(5);

    const handleLoadMore = async () => {
        if(loadMore===true){  
            setLoadMore(false);
            setCitiesCount(5);
        } else {
            setLoadMore(true);
            setCitiesCount(data.length);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${analytics}/requests/cities`);
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2 className='text-3xl'>City Metrics</h2>
            <div className='flex flex-col h-52 overflow-auto'>
                {data.length === 0 ? (
                    <span>No data found</span>
                ) : (
                    <>
                        {data.slice(0, citiesCount).map(city => (
                            <div key={city._id} className="flex flex-col">
                                    <span>{city._id} : {city.count}</span>
                                    <div 
                                        style={{ width: `${(city.count/data[0].count)*100}px`, backgroundColor: 'black', height: '10px'}}
                                        title={`${city.count}`} // Add title attribute to show count on hover
                                        ></div>
                                </div>
                        ))}
                        <button className="italic w-16 text-xs pt-2" onClick={handleLoadMore}>
                            {loadMore ? 'Show less' : 'Show more'}
                        </button>
                        
                    </>
                )}
            </div>
        </div>
    );
}