/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-24 14:57:50
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-10 10:24:39
 * @ Description: App的容器组件
 */

import React from 'react';
import {connect} from 'react-redux';
import {isMobile} from '../action/settingAction';
import {mobileSelector} from '../selector/settingSelector';
import {loginDataSelector} from '../selector/commonSelector';
import App from '../App';

const AppContainer = props => {
  return <App {...props} />
}

const mapStateToProps = state => {
  return {
    _isMobile: mobileSelector(state),
    loginData: loginDataSelector(state) // 因为redux中的数据是非持久化的,所以后面再来处理
  }
}

export default connect(mapStateToProps, {
  isMobile
})(AppContainer);