
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './UserPost.scss'
import { IPost } from 'shared/models/post/post.model';
import { Row, Col } from 'antd';
import PostList from 'components/postList/PostList';
import { History } from "history";

interface IUserPostProps {
    loading: boolean;
    posts: IPost;
    history: History;
};
interface IState {
   postData: IPost[];
   modalData: IPost;
};

type IProps = IUserPostProps & IStateToProps & IDispatchToProps;
class UserPost extends React.Component<IProps,IState> {  
    constructor(props: IProps) {
        super(props);
        this.state = {
            postData: [],
            modalData: {}
        }
    }

    componentDidMount(){
    }

    componentDidUpdate(prevProps: IProps, prevState: IState) {
        const { posts } = this.props;
        if(prevProps.posts !== posts) {
           this.setState({ postData: posts});
        }
    }
    onBackButtonClick = () => {
      this.props.history.push('/');
    };
       
    render() { 
    const { posts, loading } = this.props;
     return(
        <div className="post-container">
         <Row gutter={{ md: 10, lg: 10, xl: 24, xxl: 24 }}>
            <Col span={24}>
               <PostList
                loading={loading}
                data={posts}
                onBackButtonClick={this.onBackButtonClick}
               /> 
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
    loading: boolean;
    posts: IPost[];
}
export const mapStateToProps = (storeState: any) => ({
    loading: storeState.post.loading,
    posts: storeState.post.posts
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPost)
type StateProps = ReturnType<typeof mapStateToProps>;
type Dispatch = typeof mapDispatchToProps;

