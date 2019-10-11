/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-23 00:12:42
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-09 15:09:55
 * @ Description: 记住我
 */

import * as userConstants from '../constants/userConstants';
import cookies from 'react-cookies';
/**
 * @description 记住密码
 * @param {_boolean} 判断是否需要记住密码
 * @param {username} 用户名
 * @param {password} 密码
 */
export const rememberPwd = (_boolean, username, password) => {
  const userInfo = {
    username,
    password
  };
  return async dispatch => {
    if (_boolean) {
      cookies.save('authCookie', userInfo, {
        maxAge: 3600 * 24 * 7
      })
      dispatch({
        type: userConstants.yesRememberPwd,
        payload: userInfo
      })
    } else {
      if (cookies.load('authCookie')) {
        cookies.remove('authCookie')
      }
      dispatch({
        type: userConstants.noRememberPwd,
        payload: {
          username: '',
          password: ''
        }
      })
    }
  }
}

/**
 * @description localStore存储用户基础信息/token
 * @param {loginData} 用户登陆后/注册后的信息(因为默认注册成功后跳转到首页)
 */

export const saveUserInfo = (loginData) => {
 return async dispatch => {
   // 处理存储信息
   const {newUserData} = loginData;
   
   localStorage.setItem('roles', JSON.stringify(newUserData.roles));
   localStorage.setItem('phonenumber', JSON.stringify(newUserData.phonenumber));
   localStorage.setItem('user_id', JSON.stringify(newUserData.user_id));
   localStorage.setItem('token', loginData.token);
   dispatch({
     type: userConstants.saveUserInfo
   })
 }
}