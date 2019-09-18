/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-03 11:04:11
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-13 16:50:09
 * @ 文件解释: 注册容器组件
 */

import React from 'react';
import {connect} from 'react-redux';
import Register from '../components/Register/Register';
import {registerSelector} from '../selector/registerSelector';

/**
 * @description 注册容器组件
 */
const RegisterContainer = props => {
  return <Register {...props} />
}

const mapStateToProps = state => {
  return {
    registerData: registerSelector(state)
  }
}

export default connect(mapStateToProps, null)(RegisterContainer)


