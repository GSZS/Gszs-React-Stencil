/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-30 15:20:35
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-10 14:13:48
 * @ 文件解释: 表格数据 - Action
 */

import * as formConstants from '../constants/FormConstants';

/**
 * @description 新增表单
 * @param {String} path axios请求地址
 */
export const addFormAction = (axiosPath, formData) => {
  return {
    type: formConstants.addForm._start,
    axiosPath,
    formData
  }
}

// 新增表单成功
export const addFormSuccessAction = payload => {
  return {
    type: formConstants.addForm._success,
    payload
  }
}

// 新增表单失败
export const addFormErrorAction = error => {
  return {
    type: formConstants.addForm._fail,
    error
  }
}



