
import React from 'react';
import { Layout } from 'antd';
import './PageLayout.scss';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/home/Home';
import UserPost from 'components/userPost/UserPost';
import Charts from 'components/charts/Charts';
const { Header, Content } = Layout;

interface IPageLayoutProps {
  collapsed: boolean;
  toggle: () => void;
};

const PageLayout: React.FC<IPageLayoutProps> = (props: IPageLayoutProps) => {   
    console.log(props.collapsed);
        return ( <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0}}>
          {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: props.toggle
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24
          }}
        >
         <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={UserPost} />
          <Route path="/chart" component={Charts} />
         </Switch>
        </Content>
      </Layout>);
        }

export default PageLayout;

