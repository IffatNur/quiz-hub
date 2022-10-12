import React, { PureComponent } from "react";
import { useLoaderData } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const Statistics = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (
      <div className="w-2/4 md:w-full">
        <LineChart
          className="mx-auto"
          width={700}
          height={500}
          data={topics}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
      </div>
    );
};

export default Statistics;