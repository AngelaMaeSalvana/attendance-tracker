import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Statistics = () => {
  const [view, setView] = useState('Weekly');

  // Mock data for weekly and monthly attendance
  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      { label: 'Present', data: [50, 45, 48, 49, 47, 50], borderColor: 'green', fill: false },
      { label: 'Late', data: [5, 3, 4, 2, 6, 4], borderColor: 'orange', fill: false },
      { label: 'Absent', data: [3, 5, 4, 6, 2, 1], borderColor: 'red', fill: false },
      { label: 'Dropped', data: [1, 1, 0, 0, 0, 0], borderColor: 'purple', fill: false },
      { label: 'Excused', data: [2, 1, 3, 2, 1, 3], borderColor: 'blue', fill: false },
    ]
  };

  const monthlyData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      { label: 'Present', data: [250, 240, 245, 248], borderColor: 'green', fill: false },
      { label: 'Late', data: [25, 30, 20, 18], borderColor: 'orange', fill: false },
      { label: 'Absent', data: [10, 15, 12, 9], borderColor: 'red', fill: false },
      { label: 'Dropped', data: [0, 1, 1, 0], borderColor: 'purple', fill: false },
      { label: 'Excused', data: [8, 5, 7, 6], borderColor: 'blue', fill: false },
    ]
  };

  // Select data based on view (Weekly or Monthly)
  const chartData = view === 'Weekly' ? weeklyData : monthlyData;

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: `${view} Attendance` }
    },
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <div className='stat-con'>
      <h2>Statistics</h2>
      
      {/* Dropdown to switch between Weekly and Monthly views */}
      <div className="dropdown">
        <label htmlFor="view-select">View: </label>
        <select id="view-select" value={view} onChange={(e) => setView(e.target.value)}>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
      
      {/* Line chart for attendance statistics */}
      <div className='chart-container'>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Statistics;
