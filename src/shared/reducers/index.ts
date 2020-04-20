import { combineReducers, Reducer } from 'redux';
import user,{ UserState } from 'shared/reducers/user/user.reducer';
import post, { PostState } from 'shared/reducers/post/post.reducer';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

export interface IRootState {
    readonly user: UserState;
    readonly post: PostState;
    readonly router: RouterState;
}

const rootReducer = (history: History) => 
combineReducers<IRootState>({
    user,
    post,
    router: connectRouter(history),
});

// export default rootReducer;
export default (history: History) => rootReducer(history);