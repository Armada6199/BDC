import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export const data = {
  labels: ['EMI Amount','Interest Payable'],
  datasets: [
    {
      label: 'EMI & Interest',
      data: [70,30],
      backgroundColor: [
        '#215190',
        '#C4B28F',
      ],
      borderColor: [
        '#215190',
        '#C4B28F',
      ],
      borderWidth: 1,
    },
  ],
};

export default function CustomChart() {
  return <Doughnut data={data} />;
}
