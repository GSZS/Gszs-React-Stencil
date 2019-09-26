/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-18 23:17:02
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-25 09:51:13
 * @ 文件解释: 项目类Selector
 */


import { createSelector } from 'reselect';
import { judgementGetPjTypes } from '../commonSelector';

/**
 * @description 获取所有项目类型
 */
export const getAllPjTypes = createSelector(
  judgementGetPjTypes,
  getAddPjTypes => getAddPjTypes
)