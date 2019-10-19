/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-21 09:23:38
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-19 13:08:14
 * @ 文件解释: 组织类Reducer
 */

import * as organizationConstants from '../../constants/organization/OrganizationConstant';

let initialOgState = {
  allOgData: [], // 获取所有组织
  ogDetail: [],  // 组织详细信息
  loading: false
}

/**
 * @description 项目公共Reducer
 * @param {Object} publicState     State
 * @param {Object} publicAction    Action
 * @param {Array}  publicStateData 将对应Reducer的data存入对应的initialState的data中
 * @param {Object} constants       常量
 */
const OgReducer = (state, action, publicStateData, constants) => {
  switch (action.type) {
    case constants._success:
      const { data } = action.payload;
      return {
        ...state,
        [publicStateData]: data
      }
    case constants._fail:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

/**
 * @description 新增组织成功
 */
export const addOgReducer = (state = initialOgState, action) => {
  return OgReducer(state, action, 'allOgData', organizationConstants.addOj)
}