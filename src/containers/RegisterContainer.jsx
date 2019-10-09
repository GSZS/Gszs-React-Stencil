/**
 * @ Author: Gszs
 * @ Create Time: 2019-10-02 13:00:35
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-08 11:32:21
 * @ 文件解释: 注册容器组件
 */

'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Register from '../components/pages/Register';
import { StartRegister } from '@/action/user/userAction';
import { registerSelector } from '@/selector/user/userSelector';
import { saveUserInfo } from '../action/userAction';

const RegisterContainer = props => <Register {...props} />

const mapStateToProps = state => {
  return {
    userData: registerSelector(state)
  }
};

export default connect(mapStateToProps, {
  StartRegister,
  saveUserInfo
})(RegisterContainer);