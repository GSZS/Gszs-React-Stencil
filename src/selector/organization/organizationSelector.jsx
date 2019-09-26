/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-21 11:01:15
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-21 11:01:26
 * @ 文件解释: 组织类Selector
 */

import { createSelector } from 'reselect';
import { judgementGetAllOg } from '../commonSelector';

/**
 * @description 获取所有组织
 */
export const getAllOgSelector = createSelector(
  judgementGetAllOg,
  getAllOg => getAllOg
)
