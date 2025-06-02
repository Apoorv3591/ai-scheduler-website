// src/components/ActivityChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ActivityChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.date),
    datasets: [
      {
        label: 'Emails Processed',
        data: data.map(d => d.count),
        fill: false,
        borderColor: '#4F46E5',
        tension: 0.4
      }
    ]
  };

  return (
    <div style={{ marginTop: '2rem', background: '#fff', padding: '1rem', borderRadius: '8px' }}>
      <h3>📈 Emails Processed (Last 7 Days)</h3>
      <Line data={chartData} />
    </div>
  );
};

export default ActivityChart;
