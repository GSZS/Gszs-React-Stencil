/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-29 14:30:45
 * @ Modified by: Gszs
 * @ Modified time: 2019-07-29 14:30:46
 * @ 文件解释: 首页选择state
 */

import { createSelector } from 'reselect';
import { judgementDashboard } from './commonSelector';

/**
 * @description 首页初始值计算state
 */
export const dashBoardSelector = createSelector(
  judgementDashboard,
  dashboard => dashboard
)
