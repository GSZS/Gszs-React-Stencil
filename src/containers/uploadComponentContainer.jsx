/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-29 10:13:13
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-21 18:10:00
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
import { addTableAction } from '../action/controlTableDataAction';
import { localStoreAction } from '../action/settingAction';

// 储存所有需要在这个项目中分发的Action
let dispatchAction = {};

const UpoloadComponentContainer = props => {
  Object.keys(props._action).map(cv => {
    dispatchAction[cv] = cv
  })
  
  return <BaseFormComponent {...props} />
}

export default connect(
  null, {
    addTableAction,
    localStoreAction,
    ...dispatchAction[']
  }
)(UpoloadComponentContainer);

