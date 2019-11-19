/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-23 18:02:04
 * @ Modified by: Gszs
 * @ Modified time: 2019-11-19 20:22:05
 * @ Description: configureStore
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage'

export const configureStore = (initialState = {}) => {

  // saga
  const sagaMiddleware = createSagaMiddleware();

  // 配置redux-persist
  const reduxPersistConfig = {
    key: 'root',
    storage,
    blacklist: [] // 设置黑名单,reducer中不需要持久化的数据
  }

  // 包装根reducer
  persistReducer(reduxPersistConfig, rootReducer)

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
      () => store.replaceReducer(persistReducer(reduxPersistConfig, rootReducer)).default
    );
  }
  // 允许直接调试store
  window.__store = store;
  return store;
};