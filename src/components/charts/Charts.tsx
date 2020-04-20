
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './Charts.scss'
import { Row, Col } from 'antd';
import BarChart from 'components/barChart/BarChart';

interface IChartsProps {
    
};
interface IState {
  
};

type IProps = IChartsProps & IStateToProps & IDispatchToProps;
class Charts extends React.Component<IProps,IState> {  
    constructor(props: IProps) {
        super(props);
        this.state = {
           
        }
    }

    componentDidMount(){
    }

    componentDidUpdate(prevProps: IProps, prevState: IState) {
    }

    render() { 
        return(
        <div className="chart-container">
         <Row gutter={{ md: 10, lg: 10, xl: 24, xxl: 24 }}>
            <Col span={24}>
             <BarChart />
            </Col>
          </Row>
        </div>
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
)(Charts)
type StateProps = ReturnType<typeof mapStateToProps>;
type Dispatch = typeof mapDispatchToProps;

