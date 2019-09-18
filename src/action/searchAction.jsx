/**
 * @ Author: Gszs
 * @ Create Time: 2019-08-10 15:00:31
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-10 15:00:47
 * @ 文件解释: 搜索公共组件Action
 */

import * as searchConstants from '../constants/searchConstants';
import {message} from 'antd';

/**
 * @description 搜索Action
 * @param {func}   搜索接口函数
 * @param {value}  用户名
 * @param {status} 状态 0-禁用 , 1-正常使用, 2-全部显示(默认是这个)
 */
export const SearchAction = (func, value, status = 2) => {
  return async dispatch => {
    dispatch({
      type: searchConstants._startSearchData
    })
    try {
      const res = await func(value, status);
      if(res && res.status === 200){
        dispatch({
          type: searchConstants._successSearchData,
          payload: res
        })  
      } else{
        dispatch({
          type: searchConstants._failSearchData
        })  
      }
    } catch(err){
      message.error('网络连接错误');
    } finally {
      dispatch({
        type: searchConstants._stopSearchData
      })
    }
  }
}
