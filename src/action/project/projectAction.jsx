/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-18 16:19:07
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-19 00:00:08
 * @ 文件解释: 项目类Action
 */

import * as projectConstants from '../../constants/projectConstants';
import { message } from 'antd';

/**
 * @description 公共Action
 * @param {Object} constants 公共常量
 * @param {Function} func 
 * @param {Function} callback 
 */
const publicPjAction = (constants, publicFunc, _message, callback) => {
  return async dispatch => {
    dispatch({
      type: constants._start
    })
    try {
      const res = await publicFunc();
      if (res && res.status === 200) {
        dispatch({
          type: constants._success,
          payload: res
        })
        message.success(_message)
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

// 查询所有项目类型
export const findAllPjAction = (func, callback) => {
  publicPjAction(projectConstants.allPjTypeConstants, func, callback);
}


// 新增项目
export const addPjAction = (func, callback) => {
  publicPjAction(projectConstants.addPjConstants, func, callback);
}

// 删除项目
export const deletePjAction = (func, callback) => {
  publicPjAction(projectConstants.deletePjConstants, func, callback);  
}