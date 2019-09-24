/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-23 00:11:32
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-14 08:28:31
 * @ Description: 容器登陆组件
 */

import React from 'react';
import {connect} from 'react-redux';
import {loginAction} from '../action/login';
import {rememberPwd, saveUserInfo} from '../action/userAction';
import Login from '../components/pages/Login';
import {loginDataSelector} from '../selector/commonSelector';

const LoginContainer = props => <Login {...props} />

const mapStateToProps = state => {
  return {
    loginData: loginDataSelector(state),
  }
}

export default connect(mapStateToProps, {
  loginAction,
  rememberPwd,
  saveUserInfo
})(LoginContainer)
