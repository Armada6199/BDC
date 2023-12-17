import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);


export default function CustomChart({layers,totalAppliedLayers}) {
  const appliedInterests=totalAppliedLayers.map(ele=>{
    return ele.totalApplied;
  })
  layers=layers=layers.map(ele=>{
    return ele.title;
  })
  const data = {
    labels: layers,
    datasets: [
      {
        label: 'Interests',
        data: appliedInterests,
        backgroundColor: [
          '#215190',
          '#C4B28F',
          '#637E76'
        ],
        borderColor: [
          '#215190',
          '#C4B28F',
          '#637E76'
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return <Doughnut data={data} />;
}
