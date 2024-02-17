import * as React from 'react';
import {
    DonutChart,
   // IDonutChartProps,
    IChartProps,
    IChartDataPoint,
    DataVizPalette,
    getColorFromToken,
  } from '@fluentui/react-charting';

function EmpMaternityLeave(){

    const points: IChartDataPoint[] = [
        { legend: 'Available', data: 50, color: getColorFromToken(DataVizPalette.color1), xAxisCalloutData: '2020/04/30' },
        {
          legend: 'Used',
          data: 50,
          color: getColorFromToken(DataVizPalette.color2),
          xAxisCalloutData: '2020/04/20',
        },
      ];
  
      const data: IChartProps = {
        chartTitle: 'Donut chart basic example',
        chartData: points,
      };


  return (
    <DonutChart
        culture={window.navigator.language}
        data={data}
        innerRadius={55}
        href={'https://developer.microsoft.com/en-us/'}
        legendsOverflowText={'overflow Items'}
        hideLegend={false}
        height={220}
        width={176}
        valueInsideDonut={100}
      />
  )
}

export default EmpMaternityLeave