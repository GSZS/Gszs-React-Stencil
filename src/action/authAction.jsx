/**
 * @ Author: Gszs
 * @ Create Time: 2019-08-10 14:49:02
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-10 14:49:03
 * @ 文件解释: 用户管理 / 角色管理 / 权限管理 / 菜单管理 - Action
 */

import * as authConstants from '../constants/authConstants';
import { message } from 'antd';

/**
 * @description 添加用户Action
 * @param {func}      接口函数
 * @param {formData}  表单信息
 */
export const AuthAction = (func, formData) => {
  return async dispatch => {
    dispatch({
      type: authConstants._startAddAuth
    })
    try {
      const res = await func(formData);
      if (res && res.status === 200) {
        dispatch({
          type: authConstants._successAddAuth,
          payload: res
        })
      } else {
        dispatch({
          type: authConstants._failAddAuth
        })
      }
    } catch (err) {
      message.error('网络连接错误');
    } finally {
      dispatch({
        type: authConstants._stopAddAuth
      })
    }
  }
}


/**
 * @description 添加角色Action
 * @param {func}      接口函数
 * @param {formData}  表单信息
 */
export const AuthAction = (func, formData) => {
  return async dispatch => {
    dispatch({
      type: authConstants._startAddRole
    })
    try {
      const res = await func(formData);
      if (res && res.status === 200) {
        dispatch({
          type: authConstants._successAddRole,
          payload: res
        })
      } else {
        dispatch({
          type: authConstants._failAddRole
        })
      }
    } catch (err) {
      message.error('网络连接错误');
    } finally {
      dispatch({
        type: authConstants._stopAddRole
      })
    }
  }
}

/**
 * @description 添加权限Action
 * @param {func}      接口函数
 * @param {formData}  表单信息
 */
export const AuthAction = (func, formData) => {
  return async dispatch => {
    dispatch({
      type: authConstants._startAddAuth
    })
    try {
      const res = await func(formData);
      if (res && res.status === 200) {
        dispatch({
          type: authConstants._successAddAuth,
          payload: res
        })
      } else {
        dispatch({
          type: authConstants._failAddAuth
        })
      }
    } catch (err) {
      message.error('网络连接错误');
    } finally {
      dispatch({
        type: authConstants._stopAddAuth
      })
    }
  }
}

/**
 * @description 添加菜单Action
 * @param {func}      接口函数
 * @param {formData}  表单信息
 */
export const AuthAction = (func, formData) => {
  return async dispatch => {
    dispatch({
      type: authConstants._startAddMenu
    })
    try {
      const res = await func(formData);
      if (res && res.status === 200) {
        dispatch({
          type: authConstants._successAddMenu,
          payload: res
        })
      } else {
        dispatch({
          type: authConstants._failAddMenu
        })
      }
    } catch (err) {
      message.error('网络连接错误');
    } finally {
      dispatch({
        type: authConstants._stopAddMenu
      })
    }
  }
}