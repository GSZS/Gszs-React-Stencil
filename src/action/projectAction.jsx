/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-18 16:19:07
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-18 16:19:08
 * @ 文件解释: 项目类Action
 */

import * as projectConstants from '../constants/projectConstants';
import { message } from 'antd';

/**
 * @description 项目类Action
 * @param {Function} func 
 */
export const ProjectAction = func => {
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

