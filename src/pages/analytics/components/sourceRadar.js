import { useState, useEffect } from "react";
import axios from "axios";
import analytics from "@/config/api";
import dynamic from "next/dynamic";
import 'chart.js/auto';
const Radar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Radar), { ssr: false });

export default function SourceRadar() {
    const [ data, setData ] = useState({
        labels: [],
        datasets: [
            {
                label: 'Source',
                data: [],
                fill: true,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgb(75, 192, 192)",
                pointBackgroundColor: "rgb(75, 192, 192)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(75, 192, 192)"
            }
        ]
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${analytics}/requests/source-metrics`);
                console.log(response.data);
                setData({
                    labels: response.data.map(item => item._id),
                    datasets: [
                        {
                            label: 'Source',
                            data: response.data.map(item => item.count),
                        }
                    ]
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Radar data={data}/>
        </div>
    );
}