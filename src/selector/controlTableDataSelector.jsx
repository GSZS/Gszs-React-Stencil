/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-30 16:19:52
 * @ Modified by: Gszs
 * @ Modified time: 2019-07-31 10:04:12
 * @ 文件解释: 表格数据 - 计算属性
 */

import { createSelector } from 'reselect';
import {
  judgementGetTable,
  judgementGetTableTotal,
  judgementGetTableById,
  judgementGetAllCityId
} from './commonSelector';

/**
 * @description 获取表格数据的计算state
 */
export const getTableDataSelector = createSelector(
  judgementGetTable,
  getTable => getTable
)

/**
 * @description 通过id获取表格数据计算state
 */
export const getTableDataByIdSelector = createSelector(
  judgementGetTableById,
  getTableById => getTableById
)

/**
 * @description 获取表格数据的计算total
 */
export const getTableTotalSelector = createSelector(
  judgementGetTableTotal,
  getTotal => getTotal
)
