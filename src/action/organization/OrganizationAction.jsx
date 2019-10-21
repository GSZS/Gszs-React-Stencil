/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-20 23:20:10
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-15 11:16:08
 * @ 文件解释: 组织类Action
 */

import * as OjConstant from '@/constants/organization/OrganizationConstant';


// 新增组织
export const AddOgAction = (axiosPath, formData) => {
  return {
    type: OjConstant.addOj._start,
    axiosPath,
    formData
  }
}

// 新增组织成功
export const AddOgSuccessAction = payload => {
  return {
    type: OjConstant.addOj._success,
    payload
  }
}

// 新增组织失败
export const AddOgErrorAction = error => {
  return {
    type: OjConstant.addOj._fail,
    error
  }
}