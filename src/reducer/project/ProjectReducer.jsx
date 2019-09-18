/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-18 22:05:07
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-18 23:06:53
 * @ 文件解释: 项目Reducer
 */

import * as projectConstants from '../../constants/projectConstants';

let initialProjectState = {
  addProjectData: [],  
  loading: false
}

/**
 * @description 新增项目Reducer
 */
export const addProjectReducer = (state = initialProjectState, action) => {
  switch (action.type) {
    case projectConstants._startAddProject :
      return {
        ...state,
        loading: true
      }
    case projectConstants._successAddProject :
      return {
        ...state,
        addProjectData: action.payload
      }
    case projectConstants._failAddProject :
      return {
        ...state
      }
    case projectConstants._stoptAddProject :
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}


