/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-22 15:59:32
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-11 22:16:35
 * @ Description: 登陆Reducer
 */

import {
  startLogin,
  failedLogin,
  successLogin,
  stopLogin
} from '../action/login';

let initialState = {
  loginData: [],
  loading: false
}

/**
 * @description 登录Reducer
 */
export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case startLogin:
      return {
        ...state,
        loading: true
      }
    case successLogin:
      return {
        ...state,
        loginData: action.payload
      }
    case failedLogin:
      return {
        ...state,
        loading: false
      }
    case stopLogin:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
