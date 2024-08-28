import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import VisitorInsightsChart from './VisitorInsightsChart';
import { ReactElement, useEffect, useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { visitorInsightsData } from 'data/chart-data/visitor-insights';
import axios from 'axios';


const VisitorInsights = (): ReactElement => {
  const chartRef = useRef<EChartsReactCore | null>(null);
  const [chartData, setChartData] = useState<any>(null); // State to hold the API data

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/c/ce5a-c71d-4ffb-9cd5'); // Replace with your API endpoint
        const data = response.data;

        // Assuming the API returns an array of objects with 'timestamp' and 'slotLeft' properties
        const formattedData = {
          time: data.map((item: any) => item.timestamp),
          'Slot Left': data.map((item: any) => item.slotleft),
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
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        mb={6}
      >
        <Typography variant="h4" color="common.white">
          Visitor Insights
        </Typography>
        <Button
          variant="text"
          disableRipple
          startIcon={
            <Box
              sx={{
                width: 5,
                height: 5,
                bgcolor: 'warning.main',
                borderRadius: 400,
              }}
            />
          }
          sx={{
            justifyContent: 'flex-start',
            px: 4,
            py: 2,
            borderRadius: 1,
            alignItems: 'center',
            fontSize: 'body2.fontSize',
            gap: 1,
            color: 'text.disabled',
            bgcolor: 'background.default',
            cursor: 'default',
            '&:hover': {
              bgcolor: 'background.default',
            },
            '& .MuiButton-startIcon': {
              mx: 0,
            },
          }}
        >
          New Visitors
        </Button>
      </Stack>
      <VisitorInsightsChart
        chartRef={chartRef}
        data={chartData} // Pass the fetched data to the chart
        sx={{ height: '342px !important', flexGrow: 1 }}
      />
    </Paper>
  );
};

export default VisitorInsights;
