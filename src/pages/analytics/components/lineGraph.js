import { useState, useEffect } from "react";
import axios from "axios";
import analytics from "@/config/api";
import dynamic from "next/dynamic";
import 'chart.js/auto';
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), { ssr: false });

export default function LineGraph() {
    const [ totalRequests, setTotalRequests ] = useState(0);
    const [ frame, setFrame ] = useState('24h');
    const [ data, setData ] = useState({
        labels: [],
        datasets: [
            {
                label: `${frame}`,
                data: [],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1
            }
        ]
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${analytics}/requests/graph-metrics?frame=${frame}`);
                setTotalRequests(response.data.total);
                setData({
                    labels: response.data.labels.map(item => item.name),
                    datasets: [
                        {
                            label: `${frame}`,
                            data: response.data.data.map(item => item.count),
                        }
                    ]
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [frame]);

    return (
        <div>
            <select onChange={(e) => setFrame(e.target.value)} className="outline-none">
                <option value="24h">1D</option>
                <option value="7d">7D</option>
                <option value="1m">1M</option>
                <option value="1y">1Y</option>
            </select>
            <div className='flex flex-col sm:h-36 md:h-60 lg:h-80 pb-8'>
                <h2 className='text-md'>Total: {totalRequests}</h2>
                <Line data={data}/>
            </div>
        </div>
    );
}