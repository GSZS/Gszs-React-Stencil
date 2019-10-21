/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-23 23:16:26
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-30 21:28:36
 * @ 文件解释: 下拉框容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { SelectComponent } from '../components/SelectComponents';
import { GetAllOgAction } from '@/action/organization/OrganizationAction';
import { getAllOgSelector } from '@/selector/organization/organizationSelector';

const mapStateToProps = state => {
  return {
    _allOg: getAllOgSelector(state)
  }
}

const SelectContainer = props => <SelectComponent {...props} />

export default connect(mapStateToProps, {
  GetAllOgAction
})(SelectContainer);