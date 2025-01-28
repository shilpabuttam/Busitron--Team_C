import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as FileSaver from 'file-saver';
import axios from 'axios';

// Ensure all required components are registered
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

const Task = () => {
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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
          className="p-2 border rounded"
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

export default Task;