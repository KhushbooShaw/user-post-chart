
import React from 'react';
import { Layout } from 'antd';
import './LandingPage.scss';
import SideNav from 'components/sideNav/SideNav';
import PageLayout from 'components/PageLayout/PageLayout';
import { connect } from 'react-redux';


interface ILandingPageProps {
   
};
interface IState {
    collapsed: boolean;
};

type IProps = ILandingPageProps & IStateToProps & IDispatchToProps;
class LandingPage extends React.Component<IProps,IState> {  
    constructor(props: IProps) {
        super(props);
        this.state = {
            collapsed: true
        }
    }

    componentDidUpdate(prevProps: IProps, prevState: IState) {
        
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    
    render() { 
        
        const { collapsed } = this.state;
        return(
            <Layout className="main-page-layout"> 
             <SideNav 
              collapsed={collapsed}
             /> 
             <PageLayout 
              collapsed={collapsed}
              toggle={this.toggle}
             /> 
            </Layout>
        );
    }  
}

const mapDispatchToProps = (dispatch: any) => ({
});

interface IDispatchToProps {
}

interface IStateToProps {
}
export const mapStateToProps = (storeState: any) => ({
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingPage)
type StateProps = ReturnType<typeof mapStateToProps>;
type Dispatch = typeof mapDispatchToProps;


