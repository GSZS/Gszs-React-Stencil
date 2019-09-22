/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-21 09:23:38
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-21 10:35:22
 * @ 文件解释: 组织类Reducer
 */

import * as organizationConstants from '../../constants/organization/OrganizationConstant';

let initialProjectState = {
  allOgData: [],   // 获取所有组织
  ogDetail: [],    // 组织详细信息
  loading: false
}

/**
 * @description 项目公共Reducer
 * @param {Object} publicState 
 * @param {Object} publicAction
 * @param {Array}  publicStateData 将对应Reducer的data存如对应的initialState的data中
 * @param {Object} constants 
 */
const OgReducer = (state, publicAction, publicStateData, constants) => {
  switch (publicAction.type) {
    case constants._start:
      return {
        ...state,
        loading: true
      }
    case constants._success:
      return {
        ...state,
        [publicStateData]: state.payload
      }
    case constants._fail:
      return {
        ...state
      }
    case constants._stop:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

/**
 * @description 查询所有组织
 */
export const findAllOgReducer = (state = initialProjectState, action) => {
  return OgReducer(state, action, 'allOgData', organizationConstants.findAllOg)
}

