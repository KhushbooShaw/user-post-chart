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
  { title: 'Terminator', value: 21, year: 1984 },
  { title: 'Commando', value: 81, year: 1985 },
  { title: 'Predator', value: 25, year: 1987 },
  { title: 'Raw Deal', value: 26, year: 1986 },
  { title: 'The Running Man', value: 11, year: 1987 },
  { title: 'Total Recall', value: 44, year: 1990 },
  { title: 'Terminator 2', value: 0, year: 1991 },
  { title: 'Last Action Hero', value: 22, year: 1993 },
  { title: 'True Lies', value: 51, year: 1994 },
  { title: 'Eraser', value: 29, year: 1996 },
  { title: 'Terminator 3', value: 2, year: 2003 },
]

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