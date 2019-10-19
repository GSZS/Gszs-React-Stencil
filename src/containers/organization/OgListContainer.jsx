/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-28 16:42:16
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-19 13:25:11
 * @ 文件解释: 组织列表容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { OgList } from '@/components/organization/OgList';
import { getNewOgSelector } from '@/selector/organization/organizationSelector'

const OgListContainer = props => <OgList {...props} />

const mapStateToProps = state => {
  return {
    _newAddOgData: getNewOgSelector(state)
  }
}

export default connect(mapStateToProps, null)(OgListContainer);