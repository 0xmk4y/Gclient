"use client"
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenuesGraph = () => {
  // Generate days of the current month
  const daysInMonth = new Date().getMonth() + 1;
const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const data = {
    labels,
    datasets: [
      {
        label: "Daily Data",
        data: labels.map(() => Math.floor(Math.random() * 1000)), // Random data
        backgroundColor: "rgb(1 88 154)",
        borderColor: "rgb(1 88 154)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Daily Data for the Month" },
    },
  };

  return (
    <div className="bg-gray-100 p-3 h-full rounded-md">
        <Bar className="bg-white min-h-full" data={data} options={options} />
    </div>
  )
};

export default RevenuesGraph;
