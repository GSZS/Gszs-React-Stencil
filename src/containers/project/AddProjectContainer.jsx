/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-18 23:34:44
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-21 16:16:50
 * @ 文件解释: 新增项目容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { addPjAction } from '../../action/project/projectAction';
import { AddProject } from '../../components/project/AddProject';
import { GetAllOgAction } from '../../action/organization/OrganizationAction';
import { getAllOgSelector } from '../../selector/organization/organizationSelector'
import { ALLPROJECTTYPE, ALLORGANIZATION } from '../../axios'

const AddProjectContainer = props => {

  const _action = {
    GetAllOgAction,
  }, _axiosFunc = {
    ALLPROJECTTYPE,
    ALLORGANIZATION
  };

  return (
    <AddProject {...props}
      _action={
        { ..._action }
      } 
      _axiosFunc={
        { ..._axiosFunc }
      }
    />
  )
}

const mapStateToProps = state => {
  return {
    _allOg: getAllOgSelector(state)
  }
}

export default connect(mapStateToProps, {
  addPjAction,
})(AddProjectContainer);