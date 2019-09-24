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
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {configureStore} from './store/configureStore';

ReactDOM.render (
  <AppContainer>
    <Provider store={configureStore()}>
        <ConfigProvider locale={zhCN}>
          <Page />
        </ConfigProvider>
    </Provider>
  </AppContainer>,
  document.getElementById ('root')
);
serviceWorker.register ();
