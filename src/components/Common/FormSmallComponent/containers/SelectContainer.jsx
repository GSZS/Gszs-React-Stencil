/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-23 23:16:26
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-19 13:26:08
 * @ 文件解释: 下拉框容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { SelectComponent } from '../components/SelectComponents';
import { getNewOgSelector } from '@/selector/organization/organizationSelector';

const mapStateToProps = state => {
  return {
    _allOg: getNewOgSelector(state)
  }
}

const SelectContainer = props => <SelectComponent {...props} />

export default connect(mapStateToProps, null)(SelectContainer);