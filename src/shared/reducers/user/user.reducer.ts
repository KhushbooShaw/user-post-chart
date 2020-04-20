import axios from 'axios';
import { REQUEST, SUCCESS, FAILURE } from 'shared/reducers/action-type';
import { IUser } from 'shared/models/user/user.model';

export const ACTION_TYPES = {
    FETCH_ALL_USERS: 'user/FETCH_ALL_USERS'
  };
  
  export const initialState = {
    loading: false,
    users: [] as ReadonlyArray<IUser>
  };
  
  export type UserState = Readonly<typeof initialState>;
  
  // Reducer
  export default (state: UserState = initialState, action: any): UserState => {
    switch (action.type) {
      case REQUEST(ACTION_TYPES.FETCH_ALL_USERS):
        return {
          ...state,
          loading: true
        };
      case SUCCESS(ACTION_TYPES.FETCH_ALL_USERS):
        return {
          ...state,
          loading: false,
          users: action.payload.data
        };
      case FAILURE(ACTION_TYPES.FETCH_ALL_USERS):
        return {
          ...state,
          loading: false
        };
      default:
        return state;
    }
  };

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
  // Actions
   
  export const getEntities = () => ({
    type: ACTION_TYPES.FETCH_ALL_USERS,
    payload: axios.get<IUser>(apiUrl)
  });

  