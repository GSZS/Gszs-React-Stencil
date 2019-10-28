/**
 * @ Author: Gszs
 * @ Create Time: 2019-08-05 18:44:51
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-28 18:13:50
 * @ 文件解释: 修改表格数据的公共容器组件
 */

import React from 'react';
import {connect} from 'react-redux';
import WrappedUpdateFormData from '../components/Common/ModalForm';

const ModalFormContainer = props => <WrappedUpdateFormData {...props} />

export default connect(null, {
  // getTableByIdAction,
  // updateTableAction
})(ModalFormContainer)

