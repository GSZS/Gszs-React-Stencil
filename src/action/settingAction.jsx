/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-24 14:48:30
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-11 23:29:12
 * @ Description: 系统设置的Action(例如屏幕尺寸)
 */

import * as settingConstants from '../constants/settingConstant';
import {LOGOUT} from '../axios/index'
import {message} from 'antd';

/**
 * @description 判断屏幕是否为小屏幕
 * @param {boolean} _isMobile 
 */
export const isMobile = (_isMobile) => {
  return async dispatch => {
    // 屏幕尺寸小于992那么就当作小屏幕
    if(_isMobile){
      dispatch({
        type: settingConstants._isMobile
      })
    }else{
      dispatch({
        type: settingConstants._noIsMobile
      })
    }
  }
}

/**
 * @description 退出 - 清除token
 */
export const logout = callback => {
  return async dispatch => {
    const res = await LOGOUT();
    if(res && res.status === 200){
      // 因为localStoreage存的信息不多,所以直接处理
      if(window.localStorage.getItem('token') 
        && window.localStorage.getItem('roles')
      ){
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('roles');
      }
      dispatch({
        type: settingConstants._isLogout
      })
      message.success(res.message);
      callback();
    } else{
      dispatch({
        type: settingConstants._noIsLogout
      })
    }
  }
}

/**
 * @description 存localStore
 * @param {_bool} 0 - 代表删除指定key的localStore , 1 - 代表添加
 * @param {key}   localStore的名称
 * @param {value} localStore的值
 */
export const localStoreAction = (_bool ,key ,value) => {
  return async dispatch => {
    if(_bool === 0){
      if(!window.localStorage.getItem(key)){
        console.error(`删除localStore中的${key}失败:`);
      }else{
        window.localStorage.removeItem(key);
        dispatch({
          type: settingConstants._clearLocalStore
        })
      }
    }else if(_bool === 1){
      window.localStorage.setItem(key, value);
      dispatch({
        type: settingConstants._saveLocalStore
      })
    }
  }
}

/**
 * @description 日志Action
 * @param {page} 页码
 */
export const LogAction = (axiosFun, page) => {
  return async dispatch => {
    dispatch({
      type: settingConstants._startGetLogData
    })
    try{
      const res = await axiosFun(page);
      if(res && res.status === 200){
        dispatch({
          type: settingConstants._successGetLogData,
          payload: res
        })
      } else{
        message.error(`获取数据失败: ${res.message}`)
      }
    } catch(err){
      console.error(`查询日志捕获错误: ${err}`)
      dispatch({
        type: settingConstants._failGetLogData
      })
    } finally {
      dispatch({
        type: settingConstants._stopGetLogData
      })
    }
  }
}