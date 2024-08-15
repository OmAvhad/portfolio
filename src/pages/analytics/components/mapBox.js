import { useEffect, useState } from 'react';
import axios from 'axios';
import analytics from '../../../config/api';
import LeafLet from './leafLet';

export default function MapBox() {

    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${analytics}/requests/coordinates`);
                console.log(response.data);
                setCoordinates(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return(
        <div>
            <div className='text-3xl'>Map</div>
            <LeafLet coordinates={coordinates} />
        </div>
    ); 
        
}
