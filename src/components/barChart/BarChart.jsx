import React from 'react';
import './BarChart.scss';
import Highcharts from "highcharts";
import { barChartColumn } from 'shared/utilities/constants';

class PercentageArea extends React.Component {
  componentDidMount() {
    this.drow(this.props)
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.chart.destroy()
    this.drow(nextProps)
  }

  shouldComponentUpdate() {
  	return false
  }

  componentWillUnmount() {
    this.chart.destroy()
  }

  drow(props) {
		this.chart = Highcharts.chart(this.container, {
      chart: {
        type: 'column',
        inverted: true
      },
      title: {
        text: 'BAR CHART'
      },
      xAxis: {
        categories: barChartColumn.Category
      },
      yAxis: [{
        min: 0,
        title: {
          text: ''
        }
      }],
      legend: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        column: {
          grouping: false,
          shadow: false,
          borderWidth: 0
        }
      },
      series: [{
        name: 'val_1',
        showInLegend: false,
        color: 'rgba(87,178,93,1)',
        data: barChartColumn.greenColumn1,
        pointPadding: 0.4,
        pointPlacement: -0.2
      }, {
        name: 'val_2',
        showInLegend: false,
        color: 'rgba(148,226,155,.7)',
        data: barChartColumn.greenColumn2,
        pointPadding: 0.2,
        pointPlacement: -0.2
      },
      {
        name: 'val_3',
        showInLegend: false,
        color: 'rgba(248,161,63,1)',
        data: barChartColumn.redColumn1,
        pointPadding: 0.4,
        pointPlacement: -0.2
      },
      {
        name: 'val_4',
        showInLegend: false,
        color: 'rgba(186,60,61,.5)',
        data: barChartColumn.redColumn2,
        pointPadding: 0.2,
        pointPlacement: -0.2
      }]
    });
  }
  render() {
    return <div className="chart" ref={ref => this.container = ref} />
  }
}

export default PercentageArea; 
