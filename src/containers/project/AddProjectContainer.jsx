/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-18 23:34:44
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-24 00:46:22
 * @ 文件解释: 新增项目容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { addPjAction } from '../../action/project/projectAction';
import { AddProject } from '../../components/project/AddProject';
import { getAllOgSelector } from '../../selector/organization/organizationSelector'

const AddProjectContainer = props => <AddProject {...props} />

const mapStateToProps = state => {
  return {
    _allOg: getAllOgSelector(state)
  }
}

export default connect(mapStateToProps, { addPjAction })(AddProjectContainer);