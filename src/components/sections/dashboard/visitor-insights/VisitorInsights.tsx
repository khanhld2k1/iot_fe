import { Paper, Stack, Typography } from '@mui/material';
import VisitorInsightsChart from './VisitorInsightsChart';
import { ReactElement, useEffect, useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import axios from 'axios';
import SimpleBar from 'simplebar-react';

interface DataItem {
  EntryTime: number | null;
  ExitTime: number | null;
  SlotLeft: number;
}

const VisitorInsights = (): ReactElement => {
  const chartRef = useRef<EChartsReactCore | null>(null);
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/c/f40d-8a58-47d2-af29'); // api/ParkingTrack
        const data: DataItem[] = response.data;

        const hours = Array(24).fill(0);  // Sum of SlotLeft for each hour
        const counts = Array(24).fill(0); // Count of entries per hour

        data.forEach((item: DataItem) => {
          const timestamp = item.EntryTime != null ? item.EntryTime : item.ExitTime;
          if (timestamp != null) {
            const hour = new Date(timestamp).getHours(); // Convert epoch time to hours
            hours[hour] += item.SlotLeft;  // Sum up SlotLeft for the hour
            counts[hour]++;                // Increment the count for that hour
          }
        });

        const averages = hours.map((total, i) => (counts[i] > 0 ? total / counts[i] : 0));

        const formattedData = {
          time: Array.from({ length: 24 }, (_, i) => `${i % 12 || 12} ${i < 12 ? 'AM' : 'PM'}`), // X-axis labels
          'Slot Left': averages, // Y-axis data for Slot Left averages
        };

        setChartData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.getEchartsInstance().resize();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [chartRef]);

  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }} component={SimpleBar}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        mb={6}
      >
        <Typography variant="h4" color="common.white">
          Chart
        </Typography>
      </Stack>
      <VisitorInsightsChart
        chartRef={chartRef}
        data={chartData}
        sx={{ height: '342px !important', flexGrow: 1 }}
      />
    </Paper>
  );
};

export default VisitorInsights;
