import RequestMetrics from "./components/requestMetrics"
import CityMetrics from "./components/cityMetrics"

import dynamic from 'next/dynamic';
const MapBox = dynamic(() => import('./components/mapBox.js'), { ssr: false });

export default function Analytics() {
    return (
        <>
            <h1 className='text-5xl pb-4'>Analytics</h1>
            <div className="flex flex-col gap-4">
                <RequestMetrics />
                <CityMetrics />
                <MapBox />
            </div>
        </>
    )
}