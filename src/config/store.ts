import { applyMiddleware, createStore, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import DevTools from './devtools';
import loggerMiddleware from './logger-middleware';
import rootReducer, { IRootState } from "shared/reducers/index";
import { createHashHistory, History } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history: History = createHashHistory();
const locationToRedirect = localStorage.getItem('lastLocation');
if (locationToRedirect !== '' && locationToRedirect !== null) {
  history.push(JSON.parse(locationToRedirect));
}

const defaultMiddlewares = [
    routerMiddleware(history),
    thunkMiddleware,
    promiseMiddleware,
    loggerMiddleware
  ];
  const composedMiddlewares = (middlewares: any) =>
    process.env.NODE_ENV === 'development'
      ? compose(
          applyMiddleware(...defaultMiddlewares, ...middlewares),
          DevTools.instrument()
        )
      : compose(applyMiddleware(
        ...defaultMiddlewares,
        ...middlewares
      ));

const store = (initialState?: IRootState, middlewares = []) => createStore(rootReducer(history), initialState, composedMiddlewares(middlewares));

export default store;