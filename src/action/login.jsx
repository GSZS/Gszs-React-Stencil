/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-22 16:04:49
 * @ Modified by: Gszs
 * @ Modified time: 2019-11-20 14:13:26
 * @ Description: 登陆Action
 */

import { message } from 'antd';
import { handleLogin } from '../axios';
import cookies from 'react-cookies';
import { cryptoTools } from '../utils/utils';
import {aes_128_cbc_key, aes_128_cbc_iv} from '../constants';

export const startLogin = 'startLogin';
export const failedLogin = 'failedLogin';
export const successLogin = 'successLogin';
export const stopLogin = 'stopLogin';

/**
 * @description 登陆的Action
 * @param {Boolean} 判断是否需要保存账号密码
 * @param {String} 用户名
 * @param {String} 密码
 */
export const loginAction = (_boolean, username, password) => { 
  return async (dispatch) => {
    dispatch({
      type: startLogin
    });
    try {
      handleLogin(username, password).then(res => {
        if (res && res.status === 200) {
          if(_boolean){
            // 签名账号密码
            const _username = cryptoTools.genSign_ase_128_cbc(username, aes_128_cbc_key, aes_128_cbc_iv);
            const _password = cryptoTools.genSign_ase_128_cbc(password, aes_128_cbc_key, aes_128_cbc_iv);

            const userInfo = {
              username: _username,
              password: _password
            }
            cookies.save('authCookie', userInfo, {
              maxAge: 3600 * 24 * 7
            })
          }else{
            if (cookies.load('authCookie')) {
              cookies.save('authCookie', {
                username: '',
                password: ''
              })
            }
          }
          const { data } = res;
          dispatch({
            type: successLogin,
            payload: data
          })
          message.success('登陆成功')
        }else{
          message.error(res.message)
        }
      })
    } catch (err) {
      dispatch({
        type: failedLogin
      })
    } finally {
      dispatch({
        type: stopLogin
      })
    }
  }
}