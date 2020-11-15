import React from "react";
import { 
    ResponsiveContainer, 
    LineChart,
    Line,
    XAxis,
    YAxis,
    ReferenceLine, CartesianGrid
}   from 'recharts';
import { calculateBiorhythmSeries } from '../calculation';
import dayjs from 'dayjs';
import './BiorhythmChart.css';

/*const data = [
    {date: '1', physical: 0.99, emotional: 0.60, intellectual: -0.25 },
    {date: '2', physical: 0.80, emotional: 0.70, intellectual: -1.25 },
    {date: '3', physical: 0.95, emotional: 0.80, intellectual: -5.25 },
    {date: '4', physical: 0.99, emotional: 0.60, intellectual: -0.25 },
    {date: '5', physical: 0.80, emotional: 0.70, intellectual: -1.25 },
    {date: '6', physical: 0.95, emotional: 0.80, intellectual: -5.25 },
]*/

function formateDate(isoString) {
    return dayjs(isoString).format("DD MMM");
}

function BiorhythmChart({ birthDate, targetDate, size }) {
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculateBiorhythmSeries(birthDate, startDate, 31)
     .map((item) => ({...item, date: formateDate(item.date) }));

    return (
    <ResponsiveContainer className="biorhythm-chart" width="100%" height={200}>
        <LineChart data={data}>
            <ReferenceLine x={data[15].date} />
            <CartesianGrid vertical={false} strokeDasharray="3 3"/>
            <XAxis dataKey="date" ticks={[data[3].date, data[15].date, data[27].date]}/>
           
            <Line type="natural" dot={false} dataKey="physical" className="physical" />
            <Line type="natural" dot={false} dataKey="emotional" className="emotional"/>
            <Line type="natural" dot={false} dataKey="intellectual" className="intellectual" />
        </LineChart>
    </ResponsiveContainer>
       
    );
}

export default BiorhythmChart;