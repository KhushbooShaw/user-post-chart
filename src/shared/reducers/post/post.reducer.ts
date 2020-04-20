// import { IUserResponse } from 'shared/models/user.model';
import axios from 'axios';
import { REQUEST, SUCCESS, FAILURE } from 'shared/reducers/action-type';
import { IPost } from 'shared/models/post/post.model';

export const ACTION_TYPES = {
    FETCH_ALL_POSTS_BY_USERID: 'post/FETCH_ALL_POSTS_BY_USERID'
  };
  
  export const initialState = {
    loading: false,
    posts: [] as ReadonlyArray<IPost>,
  };
  
  export type PostState = Readonly<typeof initialState>;
  
  // Reducer
  export default (state: PostState = initialState, action: any): PostState => {
    switch (action.type) {
      case REQUEST(ACTION_TYPES.FETCH_ALL_POSTS_BY_USERID):
        return {
          ...state,
          loading: true
        };
      case SUCCESS(ACTION_TYPES.FETCH_ALL_POSTS_BY_USERID):
        return {
          ...state,
          loading: false,
          posts: action.payload.data
        };
      case FAILURE(ACTION_TYPES.FETCH_ALL_POSTS_BY_USERID):
        return {
          ...state,
          loading: false
        };
      default:
        return state;
    }
  };

  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  // Actions
   
  export const getEntitiesByUserID = (userID: number | string) => {
    const requestUrl = `${apiUrl}?userId${userID}`;
    return {
      type: ACTION_TYPES.FETCH_ALL_POSTS_BY_USERID,
      payload: axios.get<IPost>(requestUrl)
    };
  }

  