/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-20 23:20:10
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-22 08:45:15
 * @ 文件解释: 组织类Action
 */

import * as OjConstant from '../../constants/organization/OrganizationConstant';
import {message} from 'antd';

/**
 * @description 公共Action
 * @param {Object} constants 公共常量
 * @param {Function} func 
 * @param {Function} callback 
 */
const publicOgAction = (constants, publicFunc, _message, callback) => {
  return async dispatch => {
    console.log('aaa');
    console.log(dispatch);
    dispatch({
      type: constants._start
    })
    console.log('ddd');
    try {
      console.log('bbb');
      const res = await publicFunc();
      if (res && res.status === 200) {
        dispatch({
          type: constants._success,
          payload: res
        })
        if(_message) message.success(_message);
        callback(); 
      } else {
        message.error(res.message)
      }
    } catch (err) {
      console.log(`发送请求捕获错误: ${err}`);
      dispatch({
        type: constants._fail
      })
    } finally {
      dispatch({
        type: constants._stop
      })
    }
  }
}

/**
 * @description 获取所有组织
 * @param {Function} func 
 * @param {Function} callback 回调函数
 */
export const GetAllOgAction = (func, callback) => { 
  // return (publicOgAction(OjConstant.findAllOg, func))();
  console.log('=>>>启动');
  
  return async dispatch => {
    // dispatch({
    //   type: OjConstant.findAllOg._start
    // })
    // try {
    //   const res = await func();
    //   if (res && res.status === 200) {
    //     dispatch({
    //       type: OjConstant.findAllOg._success,
    //       payload: res
    //     })
    //     // if(_message) message.success(_message);
    //     // callback(); 
    //   } else {
    //     message.error(res.message)
    //   }
    // } catch (err) {
    //   console.log(`发送请求捕获错误: ${err}`);
    //   dispatch({
    //     type: OjConstant.findAllOg._fail
    //   })
    // } finally {
    //   dispatch({
    //     type: OjConstant.findAllOg._stop
    //   })
    // }
  }
}

