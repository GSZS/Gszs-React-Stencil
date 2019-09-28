/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-30 14:45:13
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-28 18:08:17
 * @ 文件解释: 控制渲染表格数据的容器组件
 */

import React from 'react';
import EditableTable from '@/components/Common/ControlComponent';
import {connect } from 'react-redux';
// import { getTableDataSelector, getTableTotalSelector } from '../selector/controlTableDataSelector';
// import { getTableAction, delTableAction } from '../action/controlTableDataAction';

const ControlTableContainer = props => <EditableTable {...props} />;

// const mapStateToProps = state => {
//   return {
//     _tableData: getTableDataSelector(state),
//     _total: getTableTotalSelector(state),
//     loading: state.getTableReducer.loading,
//     _reload: state.delTableReducer._reload
//   }
// }

export default connect(null, null)(ControlTableContainer)