/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-18 23:34:44
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-18 23:57:37
 * @ 文件解释: 新增项目容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { ProjectAction } from '../../action/project/projectAction';
import { AddProject } from '../../components/project/AddProject';

export const AddProjectContainer = props => <AddProject {...props} />

export default connect(null, {
  ProjectAction
})(AddProjectContainer);