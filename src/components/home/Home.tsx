
import React from 'react';
import { connect } from 'react-redux';
import { getEntities } from 'shared/reducers/user/user.reducer';
import { IUser } from 'shared/models/user/user.model';
import { userColumn, defaultSuggestion } from 'shared/utilities/constants';
import UserTable from 'components/userTable/UserTable';
import { ColumnProps } from 'antd/lib/table';
import 'antd/dist/antd.css';
import './Home.scss'
import { Row, Col } from 'antd';
import { getEntitiesByUserID } from 'shared/reducers/post/post.reducer';
import { History } from "history";
import QuickSearch from 'components/quickSearch/QuickSearch';
import { ISuggestion } from 'components/quickSearch';
import _ from 'lodash';

interface IHomeProps {
    loading: boolean;
    users: IUser;
    history: History;
};
interface IState {
   userData: IUser[];
   userColumn: Array<ColumnProps<IUser>>;
   qsValue: string;
   qsSuggestion: ISuggestion[];
   qsLoading: boolean;
};

export const searchFieldMapper = {
    ID: 'id',
    NAME: 'name',
    USERNAME: 'username'
}

type IProps = IHomeProps & IStateToProps & IDispatchToProps;
class Home extends React.Component<IProps,IState> {  
    constructor(props: IProps) {
        super(props);
        this.state = {
            userData: [],
            userColumn: userColumn,
            qsValue: '',
            qsSuggestion: [],
            qsLoading: false
        }
    }

    componentDidMount(){
        // API call for getting user response
       this.props.fetchUsers();
    }

    componentDidUpdate(prevProps: IProps, prevState: IState) {
        const { users } = this.props;
        if(prevProps.users !== users) {
           this.setState({
               userData: users.map((i:IUser) => {
                   i.key = i.id;
                   return i;
               })
           })
        }
    }

    onUserClick = (params: IUser) => {
        this.props.fetchUserPostsByUserId(params.id);
        this.props.history.push('/posts')

    };
    
    onQsChange = (event: any, value: { newValue: string; }) => {
       this.setState({
           qsValue: value.newValue
       })
       this.loadSuggestion(value.newValue.trim());
    };

    loadSuggestion = (searchValue: string) => {
       const { userData } = this.state;
       const suggestion: ISuggestion[] = [];
       let temp=[], result=''; 
        temp = _.filter(userData, ((item:IUser) => {
            return item.name.toUpperCase().includes(searchValue.toUpperCase());
        }));
        if (temp && temp.length > 0 ) {
         result = `${temp.length} results in Name`;
         suggestion.push({result});
        }
        temp=[];
       this.setState({
           qsSuggestion:suggestion.length > 0 ? suggestion: defaultSuggestion
        });
    }

    onSuggestionsFetchRequested = (value: string) => {
        if (!value)
        {
            this.setState({
                userData: this.props.users
            })
        }
    }

    onSuggestionsClearRequested = () =>{
        const { qsValue } = this.state;
        this.setState({
            qsSuggestion: []
        })
        if (!qsValue)
        {
            this.setState({
                userData: this.props.users
            })
        }
    }

    onSuggestionSelected = (event: any, suggestion: any) => {
        const { userData, qsValue } = this.state;
        let users = _.filter(userData, ((item:IUser) => {
            return item.name.toUpperCase().includes(qsValue.toUpperCase());
        }));
        this.setState({
            userData: users && users.length > 0? users: userData
        })
    }

    render() { 
        const { userData, userColumn,  qsLoading, qsSuggestion, qsValue } = this.state; 
        const { loading } = this.props;
        return(
        <div className="home-container">
         <Row gutter={{ md: 10, lg: 10, xl: 24, xxl: 24 }}>
            <Col span={24}>
                <QuickSearch 
                 qsValue={qsValue}
                 qsPlaceholder={'Quick Search'}
                 qsSuggestions={qsSuggestion}
                 isQsLoading={qsLoading}
                 onQsChange={this.onQsChange}
                 onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                 onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                 onSuggestionSelected={this.onSuggestionSelected}
                />
                <UserTable
                    userData={userData}
                    userColumn={userColumn}
                    loading={loading}
                    onItemClick={this.onUserClick}
                />
            </Col>
          </Row>
        </div>
        );
    }  
}

const mapDispatchToProps = (dispatch: any) => ({
fetchUsers: () => dispatch(getEntities()),
fetchUserPostsByUserId: (userId: number) => dispatch(getEntitiesByUserID(userId)) 
});

interface IDispatchToProps {
    fetchUsers: () => Promise<any>;
    fetchUserPostsByUserId: (userId: number) => Promise<any>;
}

interface IStateToProps {
    loading: boolean;
    users: any;
}
export const mapStateToProps = (storeState: any) => ({
    loading: storeState.user.loading,
    users: storeState.user.users
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
type StateProps = ReturnType<typeof mapStateToProps>;
type Dispatch = typeof mapDispatchToProps;

