/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-23 18:02:04
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-23 14:52:57
 * @ Description: configureStore
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { composeWithDevTools } from 'redux-devtools-extension';


export const configureStore = initialState => {

  // saga
  const sagaMiddleware = createSagaMiddleware();

  // 中间件
  const middlewares = [
    thunk,
    sagaMiddleware
  ];

  // store
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware.apply(this, middlewares),
    )
  )
  sagaMiddleware.run(rootSaga)

  // 控制热更
  if (module.hot) {
    module.hot.accept(
      '../reducer',
      () => store.replaceReducer(require('../reducer')).default
      );
    }
    // 允许直接调试store
    window.__store = store;
    return store;
};