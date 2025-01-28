import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as FileSaver from 'file-saver';
import axios from 'axios';

// Register all required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Card = ({ children }) => <div className="p-4 shadow-lg rounded-lg bg-white">{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;
const Button = ({ children, onClick }) => (
  <button
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
    onClick={onClick}
  >
    {children}
  </button>
);

const App = () => {
  const [metrics, setMetrics] = useState({});
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    fetchMetrics();
  }, [startDate, endDate]);

  const fetchMetrics = async () => {
    try {
      const response = await axios.get('/api/analytics', {
        params: {
          startDate: startDate?.toISOString(),
          endDate: endDate?.toISOString(),
        },
      });
      setMetrics(response.data);
    } catch (error) {
      console.error('Error fetching metrics:', error);
    }
  };

  const exportData = (format) => {
    axios
      .post('/api/analytics/export', { startDate, endDate, format })
      .then((response) => {
        const blob = new Blob([response.data], { type: `text/${format}` });
        FileSaver.saveAs(blob, `analytics.${format}`);
      })
      .catch((error) => console.error('Error exporting data:', error));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold">User Engagement</h2>
            <p className="text-2xl">{metrics.userEngagement || 0}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold">Video Views</h2>
            <p className="text-2xl">{metrics.videoViews || 0}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-2xl">${metrics.revenue || 0}</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Filters</h2>
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => setDateRange(update)}
          isClearable
          className="p-2 border rounded w-full"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold">Top Performing Content</h2>
            <Bar
              data={{
                labels: metrics.topContent?.map((item) => item.title) || [],
                datasets: [
                  {
                    label: 'Views',
                    data: metrics.topContent?.map((item) => item.views) || [],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                  },
                ],
              }}
              options={{ maintainAspectRatio: false }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold">Popular Regions</h2>
            <Line
              data={{
                labels: metrics.popularRegions?.map((region) => region.name) || [],
                datasets: [
                  {
                    label: 'Engagement',
                    data: metrics.popularRegions?.map((region) => region.engagement) || [],
                    borderColor: 'rgba(153, 102, 255, 0.6)',
                    fill: false,
                  },
                ],
              }}
              options={{ maintainAspectRatio: false }}
            />
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end space-x-4">
        <Button onClick={() => exportData('csv')}>Export as CSV</Button>
        <Button onClick={() => exportData('excel')}>Export as Excel</Button>
      </div>
    </div>
  );
};

export default App;
