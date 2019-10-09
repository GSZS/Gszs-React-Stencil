/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-03 10:32:37
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-02 21:53:39
 * @ 文件解释: 用户操作Action
 */

import * as UserConstant from '@/constants/user/userConstant';

// 发送注册请求
export const StartRegister = formData => {
  return {
    type: UserConstant.addRegister._start,
    formData
  }
}

// 成功处理注册请求
export const SuccessRegister = payload => {
  return {
    type: UserConstant.addRegister._success,
    payload
  }
}

// 处理注册请求失败
export const ErrorRegister = error => {
  return {
    type: UserConstant.addRegister._fail,
    error
  }
}

