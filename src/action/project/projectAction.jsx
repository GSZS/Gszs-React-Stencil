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
 * @description 项目类Action
 * @param {Function} func 
 * @param {Function} callback 回调函数
 */
export const ProjectAction = (func, callback) => {
  return async dispatch => {
    dispatch({
      type: projectConstants._startAddProject
    })
    try {
      const res = await func();
      if (res && res.status === 200) {
        dispatch({
          type: projectConstants._successAddProject,
          payload: res
        })
        message.success('新增项目成功!')
        callback();
      } else {
        message.error(res.message)
      }
    } catch (err) {
      console.log(`新增项目捕获错误: ${err}`);
      dispatch({
        type: projectConstants._failAddProject
      })
    } finally {
      dispatch({
        type: projectConstants._stoptAddProject
      })
    }
  }
}

