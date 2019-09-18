/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-18 23:17:02
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-18 23:20:55
 * @ 文件解释: 项目类Selector
 */


import { createSelector } from 'reselect';
import { judgementGetaddProject } from '../commonSelector';

/**
 * @description 新增项目
 */
export const getAddProjectSelector = createSelector(
  judgementGetaddProject,
  getAddProject => getAddProject
)