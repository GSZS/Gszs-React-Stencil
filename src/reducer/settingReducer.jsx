/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-24 15:17:29
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-05 11:08:11
 * @ Description: 系统设置有关的Reducer
 */

import * as settingConstants from '../constants/settingConstant';

let initialState = {
  isMobile: false,
  isLogout: false,
  logData: [],
  loading: false,
  logDataTotal: 0
}

/**
 * @description 判断尺寸是否小于992
 * @param {initialState} state 
 * @param {*} action 
 */
export const isMobileReducer = (state = initialState, action) => {
  switch(action.type){
    case settingConstants._isMobile:
      return{
        ...state,
        isMobile: true     
      }
    case settingConstants._noIsMobile:
      return {
        ...state,
      }
    default:
      return state
  }
}

/**
 * @description 日志
 */
export const logDataReducer = (state = initialState, action) => {
  switch(action.type){
    case settingConstants._startGetLogData:
      return{
        ...state,
        loading: true
      }
    case settingConstants._successGetLogData:
      return {
        ...state,
        logData: action.payload.data,
        logDataTotal: action.payload.total
      }
    case settingConstants._failGetLogData:
      return {
        ...state,
      }
    case settingConstants._stopGetLogData:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}