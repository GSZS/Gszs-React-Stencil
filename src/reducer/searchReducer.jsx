/**
 * @ Author: Gszs
 * @ Create Time: 2019-08-10 15:31:34
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-10 15:31:35
 * @ 文件解释: 搜索 - Reducer
 */

import * as searchConstants from '../constants/searchConstants';

let initialSearchState = {
  loading: false,
  getSearchResult: [],
  getSearchResultTotal: 0
}

/**
 * @description 搜索Reducer
 */
export const searchReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case searchConstants._startSearchData:
      return {
        ...state,
        loading: true
      }
    case searchConstants._successSearchData:
      return {
        ...state,
        getSearchResult: action.payload.data,
        getSearchResultTotal: action.payload.total
      }
    case searchConstants._failSearchData:
      return {
        ...state
      }
    case searchConstants._stopSearchData:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}