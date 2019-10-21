/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-30 13:29:30
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-30 14:05:14
 * @ 文件解释: 个人资料容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { UserInfo } from '@/components/user/UserInfo';

const UserInfoContainer = props => <UserInfo {...props} />

export default connect(null, null)(UserInfoContainer)
