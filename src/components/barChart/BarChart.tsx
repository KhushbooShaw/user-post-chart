import React from 'react';
import './BarChart.scss';
import { scaleBand, scaleLinear } from 'd3-scale'

interface IProps {
  
}

const BarChart: React.FC<IProps> = (props: IProps) => {

 return (
  <div className="bar-chart">
   <h1> Bar Chart </h1>
  </div>
  );
};

export default BarChart;
