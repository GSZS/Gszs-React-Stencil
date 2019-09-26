/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-29 10:13:13
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-23 23:13:28
 * @ 文件解释: 公共上传文件容器组件
 */

/**
 * @description 使用方法
 * @one 获取表格基础设置
 * @two 获取路由跳转history
 * @three 获取Action
 * @four  获取上传完后的跳转地址
 */

import React from 'react';
import { connect } from 'react-redux';
import BaseFormComponent from '../components/Common/uploadComponent';
import { addFormAction } from '../action/FormAction';

const UpoloadComponentContainer = props => <BaseFormComponent {...props} />

export default connect(
  null, {
    addFormAction,
  }
)(UpoloadComponentContainer);

