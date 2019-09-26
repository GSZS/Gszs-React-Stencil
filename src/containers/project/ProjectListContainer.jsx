/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-25 08:04:43
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-25 09:33:59
 * @ 文件解释: 项目列表容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { ProjectListComponents } from '../../components/project/ProjectListComponent';

const ProjectListContainer = props => <ProjectListComponents {...props} />

export default connect()(ProjectListContainer);