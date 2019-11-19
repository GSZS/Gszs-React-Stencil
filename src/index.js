import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import * as serviceWorker from './serviceWorker';
import Page from './Page';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import './style/lib/animate.css';
import './style/antd/index.less';
import './style/index.less';
import './style/antdGlobal.less' // 选择性覆盖Antd的样式
import {ConfigProvider, Spin} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {configureStore} from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore();

ReactDOM.render (
  <AppContainer>
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
          <PersistGate loading={<Spin size="large" />} persistor={persistor} >
            <Page /> 
          </PersistGate>
        </ConfigProvider>
    </Provider>
  </AppContainer>,
  document.getElementById ('root')
);
serviceWorker.register ();
