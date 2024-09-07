import { SxProps, useTheme } from '@mui/material';
// import ReactEChart from 'components/base/ReactEChart';
import * as echarts from 'echarts/core';
import ReactEChart from 'echarts-for-react';
import { LineSeriesOption } from 'echarts/charts';
import {
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from 'echarts/components';
import { ReactElement, useMemo } from 'react';

type VisitorInsightsChartProps = {
  chartRef: React.MutableRefObject<ReactEChart | null>; // Use correct ref type
  data?: {
    time: string[]; // Array of formatted time labels
    'Slot Left': number[]; // Array of average slot values
  };
  sx?: SxProps;
};

type VisitorInsightsChartOptions = echarts.ComposeOption<
  LineSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const VisitorInsightsChart = ({
  chartRef,
  data,
  ...rest
}: VisitorInsightsChartProps): ReactElement => {
  const theme = useTheme();

  const option: VisitorInsightsChartOptions = useMemo(
    () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: theme.palette.warning.main,
          },
          label: {
            backgroundColor: theme.palette.warning.main,
          },
        },
      },
      legend: {
        show: false,
        data: ['Slot Left'],
      },
      grid: {
        top: '5%',
        right: '1%',
        bottom: '2.5%',
        left: '1.25%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: data?.time || [], // Use preformatted time for x-axis labels
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            padding: [10, 25, 10, 15],
            fontSize: theme.typography.body2.fontSize,
            fontWeight: theme.typography.fontWeightMedium as number,
            color: theme.palette.common.white,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          min: 0,
          max: 4, // Set the y-axis range (adjust based on actual data)
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            padding: [0, 10, 0, 0],
            fontSize: theme.typography.body2.fontSize,
            fontWeight: theme.typography.fontWeightMedium as number,
            color: theme.palette.common.white,
          },
        },
      ],
      series: [
        {
          id: 1,
          name: 'Slot Left',
          type: 'line',
          smooth: false,
          color: theme.palette.primary.main,
          lineStyle: {
            width: 2,
            color: theme.palette.primary.main,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 1,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: theme.palette.grey.A100,
              },
              {
                offset: 0,
                color: theme.palette.primary.main,
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: data?.['Slot Left'] || [], // Use the average slot left values for y-axis
        },
      ],
    }),
    [data, theme],
  );

  return <ReactEChart ref={chartRef} echarts={echarts} option={option} {...rest} />;
};


export default VisitorInsightsChart;
