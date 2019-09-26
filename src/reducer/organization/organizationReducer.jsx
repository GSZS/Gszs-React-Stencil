/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-21 09:23:38
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-25 14:25:06
 * @ 文件解释: 组织类Reducer
 */

import * as organizationConstants from '../../constants/organization/OrganizationConstant';

let initialOgState = {
  allOgData: [], // 获取所有组织
  ogDetail: [], // 组织详细信息
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
 * @description 查询所有组织
 */
export const findAllOgReducer = (state = initialOgState, action) => {
  return OgReducer(state, action, 'allOgData', organizationConstants.findAllOg)
}

