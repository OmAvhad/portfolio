import RequestMetrics from "./components/requestMetrics"
import CityMetrics from "./components/cityMetrics"
import MapBox from "./components/mapBox"
import LineGraph from "./components/lineGraph"

export default function Analytics() {
    return (
        <>
            <h1 className='text-5xl pb-4'>Analytics</h1>
            <div className="flex flex-col gap-4">
                <LineGraph />
                <RequestMetrics />
                <CityMetrics />
                <MapBox />
            </div>
        </>
    )
}