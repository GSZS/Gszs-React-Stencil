/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-28 16:42:16
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-28 18:05:01
 * @ 文件解释: 组织列表容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { OgList } from '@/components/organization/OgList'

const OgListContainer = props => <OgList {...props} />

export default connect(null, null)(OgListContainer);