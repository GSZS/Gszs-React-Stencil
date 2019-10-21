/**
 * @ Author: Gszs
 * @ Create Time: 2019-10-02 21:17:34
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-02 21:19:14
 * @ 文件解释: 用户操作Reducer
 */

import * as UserConstant from '../../constants/user/userConstant';

let initialUserState = {
  userData: {}, // 获取所有组织
  loading: false
}

/**
 * @description 用户操作公共Reducer
 * @param {Object} publicState     State
 * @param {Object} publicAction    Action
 * @param {Array}  publicStateData 将对应Reducer的data存入对应的initialState的data中
 * @param {Object} constants       常量
 */
const UserReducer = (state, action, publicStateData, constants) => {
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

// 用户注册
export const registerReducer = (state = initialUserState, action) => {
  return UserReducer(state, action, 'userData', UserConstant.addRegister)
}