/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-03 10:54:12
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-03 11:01:05
 * @ 文件解释: 注册Reducer
 */

import * as registerConstants from '../constants/registerConstants';

let initialState = {
  registerData: [],
  loading: false
}

/**
 * @description 注册模块Reducer
 */
export const RegisterReducer = (state = initialState, action) => {
  switch(action.type){
    case registerConstants._startRegister:
      return {
        ...state,
        loading: true
      }
    case registerConstants._successRegister:
      return {
        ...state,
        loginData: action.payload
      }
    case registerConstants._failRegister:
      return {
        ...state,
        loading: false
      }
    case registerConstants._stopRegister:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

