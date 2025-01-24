import React, { useEffect, useState } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const AnalyticsDashboard = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get("https://analytics-api.com/metrics");
        const data = response.data;

        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: "Video Views",
              data: data.views,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching analytics data:", error);
      }
    };

    fetchAnalytics();
  }, []);

  if (!chartData) return <p>Loading...</p>;

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default AnalyticsDashboard;
