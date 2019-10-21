/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-21 11:01:15
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-15 16:05:56
 * @ 文件解释: 组织类Selector
 */

import { createSelector } from 'reselect';
import { judgementGetNewOg } from '../commonSelector';

/**
 * @description 获取所有组织
 */
export const getNewOgSelector = createSelector(
  judgementGetNewOg,
  getNewOg => getNewOg
)