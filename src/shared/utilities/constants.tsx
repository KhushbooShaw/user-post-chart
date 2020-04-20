import React from "react";
import { Menu } from "antd";
import { UserOutlined, BarChartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { ISuggestion } from 'components/quickSearch/index';

export const defaultSuggestion: ISuggestion[] = [
  {
		result: 'No Result Found'
  }
];

export const barChartData= [
	{ brand: 'Total KO', val_1: 5600, val_2:3900, mark_val: 5200 },
  { brand: 'Coca Cola', val_1: 4000, val_2:2000, mark_val: 3000 },
	{ brand: 'Fanta', val_1: 700, val_2:900, mark_val: 800 },
  { brand: 'Sprite', val_1: 400, val_2:500, mark_val: 900 },
	{ brand: 'Cappy', val_1: 500, val_2:500, mark_val: 500 }
]
export const barChartColumn = {
	Category: barChartData.map(item => {
		return item['brand'];
	}),
	greenColumn1: barChartData.map(item => {
		return item['mark_val'] <= item['val_1'] ? item['val_1'] : 0;
	}),
	greenColumn2: barChartData.map(item => {
		return item['mark_val'] <= item['val_1'] ? item['val_2'] : 0;
	}),
	redColumn1: barChartData.map(item => {
		return item['mark_val'] <= item['val_1'] ? 0: item['val_1'];
	}),
	redColumn2: barChartData.map(item => {
		return item['mark_val'] <= item['val_1'] ? 0: item['val_2'];
	})
}

export const userColumn = [
    {
      title: 'USER ID',
      dataIndex: 'id',
      key: 'id',
      width: '33.33%'
		},
		{
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      width: '33.33%'
		},
		{
      title: 'USERNAME',
      dataIndex: 'username',
      key: 'username',
      width: '33.33%'
		}
];

export const dateFormat = 'YYYY-MM-DD';

export const getActivityPeriodUI = (activityPeriods: any[]= []) => {
	const mockUI = activityPeriods.length > 0 ? activityPeriods.map(item => {
		return (<li><b>Start Time:</b> {item.start_time} <b>End Time:</b> {item.end_time}</li> );
	})
	: (<li>No activity on selected date</li>);
	return (<ul>{mockUI}</ul>);
};

export const userChoices: any[] = [
	{
		key: "1",
		displayName: "Users",
		link: "/",
		icon:(<UserOutlined />)
	},
	{
		key: "2",
		displayName: "Charts",
		link: "/Chart",
		icon: (<BarChartOutlined />)
	}
];

export const menuItems = () => {
	const menuUI= userChoices.map(i => {
		return (<Menu.Item key={i.key}>
		<Link to={i.link}>
	{i.icon}
	<span>{i.displayName}</span>
	</Link>
	</Menu.Item>)
	})
return (<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
{menuUI}
</Menu>);
};