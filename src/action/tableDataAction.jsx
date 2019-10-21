/**
 * @ Author: Gszs
 * @ Create Time: 2019-10-15 11:33:46
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-15 11:33:48
 * @ 文件解释: 表格数据Action
 */

import * as getTableDataConstants from '../constants/tableDataConstant';

/**
 * @description 开始渲染表格数据
 * @param {String} path axios请求地址
 * @param {Object} path 开始请求的中转Action
 */
export const startGetTableDataAction = (axiosPath, _startAction, page, total) => {
  return {
    type: getTableDataConstants.startGetTableData._start,
    axiosPath,
    _startAction,
    page,
    total
  }
}