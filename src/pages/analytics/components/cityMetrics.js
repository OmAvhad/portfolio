import { useEffect, useState } from "react";
import axios from "axios";
import analytics from '../../../config/api';

export default function CityMetrics() {

    const [data, setData] = useState([]);

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
            <div className='flex flex-col'>
                {data.length > 0 ? (
                    data.map(city => (
                        <div key={city._id} className="flex flex-row gap-2">
                            <span>{city._id}</span>
                            <div 
                                style={{ width: `${city.count}px`, backgroundColor: 'black', height: '20px'}}
                                title={`${city.count}`} // Add title attribute to show count on hover
                            ></div>
                        </div>
                    ))
                ) : (
                    <p>Data not found</p>
                )}
            </div>
        </div>
    );
}