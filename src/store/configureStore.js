/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-23 18:02:04
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-10 15:53:36
 * @ Description: configureStore
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';

export const configureStore = (initialState) => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  // Thunk 中间件
  middleware.push(thunk);

  // 如果安装了Redux DevTools则使用它, 否则使用Redux compose
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer);
  // persistStore(store) // 暂时不清楚这玩意的bug
  // 控制热更
  if (module.hot) {
    module.hot.accept(
      '../reducer',
      () => store.replaceReducer(require('../reducer')).default
      );
    }
    
    return store;
};