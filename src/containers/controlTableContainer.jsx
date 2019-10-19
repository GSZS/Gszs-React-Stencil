/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-30 14:45:13
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-16 11:07:51
 * @ 文件解释: 控制渲染表格数据的容器组件
 */

import React from 'react';
import EditableTable from '@/components/Common/ControlComponent';
import {connect } from 'react-redux';

const ControlTableContainer = props => <EditableTable {...props} />;

export default connect(null, null)(ControlTableContainer);