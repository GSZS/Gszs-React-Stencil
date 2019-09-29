/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-28 15:11:48
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-29 16:11:02
 * @ 文件解释: 新增组织容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { AddOgAction } from '@/action/organization/OrganizationAction';
import { AddOg } from '@/components/organization/AddOg'

const AddOgContainer = props => <AddOg {...props} />

export default connect(null, {
  AddOgAction
})(AddOgContainer)