/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-18 22:05:07
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-21 08:13:12
 * @ 文件解释: 项目Reducer
 */

import * as projectConstants from '../../constants/projectConstants';

let initialProjectState = {
  addProjectData: [],  
  loading: false
}

/**
 * @description 项目公共Reducer
 * @param {Object} publicState 
 * @param {Object} publicAction
 * @param {Array}  publicStateData 将对应Reducer的data存如对应的initialState的data中
 * @param {Object} constants 
 */
const addProjectReducer = (publicState, publicAction, publicStateData, constants) => {
  switch (publicAction.type) {
    case constants._start :
      return {
        ...publicState,
        loading: true
      }
    case constants._success :
      return {
        ...publicState,
        publicStateData: publicState.payload
      }
    case constants._fail :
      return {
        ...publicState
      }
    case constants._stop :
      return {
        ...publicState,
        loading: false
      }
    default:
      return state
  }
}


/**
 * @description 新增项目Reducer
 */
export const addProjectReducer = (state = initialProjectState, action) => {
  addProjectReducer(state, action, addProjectData, projectConstants.addPjConstants)
}


