/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-18 16:19:07
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-19 00:00:08
 * @ 文件解释: 项目类Action
 */

import * as PjConstant from '@/constants/project/projectConstants';

// 获取项目类型
export const GetAllPjAction = axiosPath => {
  return {
    type: PjConstant.allPjTypeConstant._start,
    axiosPath
  }
}

// 获取所有组织成功
export const GetAllPjSuccessAction = payload => {
  return {
    type: PjConstant.allPjTypeConstant._success,
    payload
  }
}

// 获取所有组织失败
export const GetAllPjErrorAction = error => {
  return {
    type: PjConstant.allPjTypeConstant._fail,
    error
  }
}