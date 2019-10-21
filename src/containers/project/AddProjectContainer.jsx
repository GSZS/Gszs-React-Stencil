/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-18 23:34:44
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-19 13:25:50
 * @ 文件解释: 新增项目容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { AddProject } from '../../components/project/AddProject';
import { getNewOgSelector } from '../../selector/organization/organizationSelector'

const AddProjectContainer = props => <AddProject {...props} />

const mapStateToProps = state => {
  return {
    _allOg: getNewOgSelector(state)
  }
}

export default connect(mapStateToProps, null )(AddProjectContainer);