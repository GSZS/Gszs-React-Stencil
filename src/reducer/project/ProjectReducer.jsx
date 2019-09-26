/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-18 22:05:07
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-21 08:13:12
 * @ 文件解释: 项目Reducer
 */

import * as PjConstants from '../../constants/project/projectConstants';

let initialPjState = {
  allPjTypes: [], // 获取所有组织
  loading: false
}

/**
 * @description 项目公共Reducer
 * @param {Object} publicState     State
 * @param {Object} publicAction    Action
 * @param {Array}  publicStateData 将对应Reducer的data存入对应的initialState的data中
 * @param {Object} constants       常量
 */
const PjReducer = (state, action, publicStateData, constants) => {
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
export const getAllPjTypesReducer = (state = initialPjState, action) => {
  return PjReducer(state, action, 'allPjTypes', PjConstants.allPjTypeConstant)
}

