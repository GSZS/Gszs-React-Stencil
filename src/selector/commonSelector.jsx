/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-23 10:22:18
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-16 10:12:28
 * @ Description: 公共Selector
 * @ Use: 设置一个input-selector , 改变input-selector后的函数 , 公共selector
 */

import { createSelector } from 'reselect';

export const inputSelectLogin = state => state.LoginReducer.loginData;
export const judgementMobile = state => state.isMobileReducer.isMobile;
export const judgementDashboard = state => state.dashboardReducer.dashboardInitialValue;
export const judgementGetLogData = state => state.logDataReducer.logData;
export const judgementGetLogDataTotal = state => state.logDataReducer.logDataTotal;
export const judgementGetSearchData = state => state.searchReducer.getSearchResult;
export const judgementGetSearchDataTotal = state => state.searchReducer.getSearchResultTotal;
export const judgementGetUse = state => state.UserReducer.UsetState;
export const judgementGetRole = state => state.RoleReducer.RoleState;
export const judgementGetAuth = state => state.AuthReducer.AuthState;
export const judgementGetMenu = state => state.MenuReducer.MenuState;
export const judgementGetUseTotal = state => state.UserReducer.UsetStateTotal;
export const judgementGetRoleTotal = state => state.RoleReducer.RoleStateTotal;
export const judgementGetAuthTotal = state => state.AuthReducer.AuthStateTotal;
export const judgementGetMenuTotal = state => state.MenuReducer.MenuStateTotal;

///////////
///项目类///
///////////
export const judgementGetaddProject = state => state.addProjectReducer.addProjectData;
export const judgementGetPjTypes = state => state.getAllPjTypesReducer.allPjTypes;

///////////
///组织类///
///////////

// 获取所有组织
export const judgementGetNewOg = state => state.addOgReducer.allOgData;

//////////////
///用户操作类///
//////////////
export const judgementRegister = state => state.registerReducer.userData;

/**
 * @description 登陆选择器
 */
export const loginDataSelector = createSelector(
  inputSelectLogin,
  loginData => loginData
)