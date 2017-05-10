import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';
import sagas from './sagas';

import { getToken } from '../utils/storage';

export default function configure() {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const sagaMiddleware = createSagaMiddleware();
  const reactRouterMiddleware = routerMiddleware(browserHistory);

  const createStoreWithMiddleware = applyMiddleware(
    reactRouterMiddleware,
    sagaMiddleware
  )(create);

  const store = createStoreWithMiddleware(rootReducer, {
    auth: { isLoggedIn: !!getToken() }
  });

  sagaMiddleware.run(sagas);

  return store;
}
