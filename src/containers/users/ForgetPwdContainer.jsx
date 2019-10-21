/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-30 20:55:47
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-30 21:33:48
 * @ 文件解释: 忘记密码/找回密码容器组件
 */

import React from 'react';
import {connect} from 'react-redux';
import ForgetPwd from '@/components/user/ForgetPwd';
import { logout } from '@/action/settingAction'

const ForgetPwdContainer = props => <ForgetPwd {...props} />

export default connect(null, {
  logout
})(ForgetPwdContainer);
