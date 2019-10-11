/**
 * @ Author: Gszs
 * @ Create Time: 2019-10-10 09:39:56
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-10 09:39:57
 * @ 文件解释: 修改资料容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { EditUserInfo } from '../../../components/user/userTabs/EditUserInfo'

const UpdateUserInfoContainer = props => <EditUserInfo {...props} />  

export default connect(null, null)(UpdateUserInfoContainer)

