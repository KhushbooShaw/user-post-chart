import React from 'react';
import { List, Button, Spin } from 'antd';
import { IPost } from 'shared/models/post/post.model';
import './PostList.scss';

interface IProps {
    data: IPost[];
    loading: boolean;
    onBackButtonClick: () => void;
}
const PostList: React.FC<IProps> = (props: IProps) => {
 const pagination={
    onChange: (page: any) => {

    },
    pageSize: 5
  }
  return (
    <div className="user-post-list">
    <Button type="primary" onClick={props.onBackButtonClick}>
      {'Back'}
    </Button>
    <br />
    <h1 className="user-post-header">User's Posts</h1>
    <Spin spinning={props.loading}>
      <List
      itemLayout="horizontal"
      dataSource={props.data}
      pagination={pagination}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={item.title}
            description={item.body}
          />
        </List.Item>
      )}
      />
    </Spin>
    </div>
  );
};
export default PostList;
