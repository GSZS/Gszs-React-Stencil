/**
 * @ Author: Gszs
 * @ Create Time: 2019-08-10 16:08:27
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-10 16:32:02
 * @ 文件解释: 用户管理 / 角色管理 / 权限管理 / 菜单管理 - Selector
 */

import { createSelector } from 'reselect';
import {
  judgementGetUse,
  judgementGetRole,
  judgementGetAuth,
  judgementGetMenu,
  judgementGetUseTotal,
  judgementGetRoleTotal,
  judgementGetAuthTotal,
  judgementGetMenuTotal
} from './commonSelector';

/**
 * @description 获取用户管理数据的计算state
 */
export const getUseSelector = createSelector(
  judgementGetUse,
  getUseData => getUseData
)

/**
 * @description 获取用户管理数据的计算state
 */
export const getUseSelector = createSelector(
  judgementGetRole,
  getRoleData => getRoleData
)

/**
* @description 获取用户管理数据的计算state
*/
export const getUseSelector = createSelector(
  judgementGetAuth,
  getAuthData => getAuthData
)

/**
 * @description 获取用户管理数据的计算state
 */
export const getUseSelector = createSelector(
  judgementGetMenu,
  getMenuData => getMenuData
)

/**
 * @description 获取用户管理数据的计算state
 */
export const getUseSelector = createSelector(
  judgementGetUseTotal,
  getUseDataTotal => getUseDataTotal
)

/**
 * @description 获取用户管理数据的计算state
 */
export const getUseSelector = createSelector(
  judgementGetRoleTotal,
  getRoleDataTotal => getRoleDataTotal
)

/**
 * @description 获取用户管理数据的计算state
 */
export const getUseSelector = createSelector(
  judgementGetAuthTotal,
  getAuthDataTotal => getAuthDataTotal
)

/**
 * @description 获取用户管理数据的计算state
 */
export const getUseSelector = createSelector(
  judgementGetMenuTotal,
  getMenuDataTotal => getMenuDataTotal
)

