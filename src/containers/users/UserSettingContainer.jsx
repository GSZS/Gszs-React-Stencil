/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-30 13:30:06
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-30 13:30:07
 * @ 文件解释: 个人设置容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { UserSetting } from '@/components/user/UserSetting';

const UserSettingContainer = props => <UserSetting {...props} />

export default connect(null, null)(UserSettingContainer)
