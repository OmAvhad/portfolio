import RequestMetrics from "./components/requestMetrics"
import CityMetrics from "./components/cityMetrics"
import MapBox from "./components/mapBox"
import LineGraph from "./components/lineGraph"
import SourceRadar from "./components/sourceRadar"

export default function Analytics() {
    return (
        <>
            <h1 className='text-5xl pb-4'>Analytics</h1>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-col">
                    <LineGraph />
                    <SourceRadar />
                </div>
                <RequestMetrics />
                <CityMetrics />
                <MapBox />
            </div>
        </>
    )
}