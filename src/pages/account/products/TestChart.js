import React from 'react';
import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS, 
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale, 
  PointElement,
  Legend,
  Tooltip
)


const TestChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Sales of the Week',
        data: [4000,3500,4200, 4300, 4100],
        backgroundColor: 'white',
        borderColor: '#0ec71d',
        pointBorderColor: '#0ec71d',
        fill: true,
        tension: 0.4,

      }
    ]
  }

  const options = {
    plugins: {
      legend: true
    },
    scales: {
      y: {
        // min: 3,
        // max: 6
      }
    }
  }

  return (
    <div>
      <Line 
      data={data}
      options={options}
      ></Line>
    </div>
  )
}

export default TestChart
