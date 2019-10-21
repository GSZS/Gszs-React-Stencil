/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-20 23:20:10
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-28 15:27:36
 * @ 文件解释: 组织类Action
 */

import * as OjConstant from '@/constants/organization/OrganizationConstant';

/**
 * @description 开始获取所有组织
 * @param {String} path axios请求地址
 */
export const GetAllOgAction = axiosPath => {
  return {
    type: OjConstant.findAllOg._start,
    axiosPath
  }
}

// 获取所有组织成功
export const GetAllOgSuccessAction = payload => {
  return {
    type: OjConstant.findAllOg._success,
    payload
  }
}

// 获取所有组织失败
export const GetAllOgErrorAction = error => {
  return {
    type: OjConstant.findAllOg._fail,
    error
  }
}

// 新增组织
export const AddOgAction = (axiosPath, formData) => {
  return {
    type: OjConstant.addOj._start,
    axiosPath,
    formData
  }
}

// 新增组织失败
export const AddOgErrorAction = error => {
  return {
    type: OjConstant.addOj._fail,
    error
  }
}