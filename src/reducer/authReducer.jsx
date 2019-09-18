/**
 * @ Author: Gszs
 * @ Create Time: 2019-08-10 15:31:05
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-10 15:31:06
 * @ 文件解释: 用户管理 / 角色管理 / 权限管理 / 菜单管理 - Reducer
 */

 import * as authConstants from '../constants/authConstants';

 let initialAuthState = {
   loading: false,
   UsetState: [],
   RoleState: [],
   AuthState: [],
   MenuState: [],
   UsetStateTotal: 0,
   RoleStateTotal: 0,
   AuthStateTotal: 0,
   MenuStateTotal: 0
 }

 /**
 * @description 用户管理 - Reducer
 */
export const UserReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case authConstants._startAddUser :
      return {
        ...state,
        loading: true
      }
    case authConstants._successAddUser :
      return {
        ...state,
        UsetState: action.payload.data,
        AuthTotal: action.payload.total
      }
    case authConstants._failAddUser :
      return {
        ...state
      }
    case authConstants._stopAddUser :
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

 /**
 * @description 角色管理 - Reducer
 */
export const RoleReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case authConstants._startAddRole :
      return {
        ...state,
        loading: true
      }
    case authConstants._successAddRole :
      return {
        ...state,
        RoleState: action.payload.data,
        AuthTotal: action.payload.total
      }
    case authConstants._failAddRole :
      return {
        ...state
      }
    case authConstants._stopAddRole :
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

/**
 * @description 权限管理 - Reducer
 */
export const AuthReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case authConstants._startAddAuth :
      return {
        ...state,
        loading: true
      }
    case authConstants._successAddAuth :
      return {
        ...state,
        AuthState: action.payload.data,
        AuthTotal: action.payload.total
      }
    case authConstants._failAddAuth :
      return {
        ...state
      }
    case authConstants._stopAddAuth :
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

/**
 * @description 菜单管理 - Reducer
 */
export const MenuReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case authConstants._startAddMenu :
      return {
        ...state,
        loading: true
      }
    case authConstants._successAddMenu :
      return {
        ...state,
        MenuState: action.payload.data,
        AuthTotal: action.payload.total
      }
    case authConstants._failAddMenu :
      return {
        ...state
      }
    case authConstants._stopAddMenu :
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}