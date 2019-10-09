/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-03 10:32:37
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-02 21:53:39
 * @ 文件解释: 用户操作Action
 */

import * as UserConstant from '@/constants/user/userConstant';

/////////
///注册///
/////////
export const StartRegister = formData => {
  return {
    type: UserConstant.addRegister._start,
    formData
  }
}
export const SuccessRegister = payload => {
  return {
    type: UserConstant.addRegister._success,
    payload
  }
}
export const ErrorRegister = error => {
  return {
    type: UserConstant.addRegister._fail,
    error
  }
}

/////////////
///修改资料///
/////////////
export const StartUpdateUserInfo = formData => {
  return {
    type: UserConstant.updateUserInfo._start,
    formData
  }
}
export const SuccessUpdateUserInfo = payload => {
  return {
    type: UserConstant.updateUserInfo._success,
    payload
  }
}
export const ErrorUpdateUserInfo = error => {
  return {
    type: UserConstant.updateUserInfo._fail,
    error
  }
}