/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-30 16:09:06
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-30 16:09:08
 * @ 文件解释: 更新密码容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import UpdatePwd from '@/components/user/userTabs/UpdatePwd';
import { logout } from '@/action/settingAction'

const UpdatePwdContainer = props => <UpdatePwd {...props} />  

export default connect(null, {
  logout
})(UpdatePwdContainer)

