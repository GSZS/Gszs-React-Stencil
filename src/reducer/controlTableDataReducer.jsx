/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-30 16:00:53
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-06 14:33:29
 * @ 文件解释: 表格数据 - Reducer
 */

import * as TableDataConstants from '../constants/TableConstants';

/**
 * @description 获取表格数据初始状态
 */
let initialGetTableState = {
  tableData: [],
  total: 0,
  loading: false,
  _reload: false, // 控制刷新从而更新数据
  tableDataById: [],
  allCityId: []
}

/**
 * @description 获取表格数据
 */
export const getTableReducer = (state = initialGetTableState, action) => {
  switch (action.type) {
    case TableDataConstants._startRequestData :
      return {
        ...state,
        loading: true
      }
    case TableDataConstants._successRequestData :
      return {
        ...state,
        tableData: action.payload.data,
        total: action.payload.total
      }
    case TableDataConstants._failRequestData :
      return {
        ...state
      }
    case TableDataConstants._stopRequestData :
      return {
        ...state,
        loading: false
      }
    default :
      return state
  }
}

/**
 * @description 获取数据通过id
 */
export const getTableByIdReducer = (state = initialGetTableState, action) => {
  switch(action.type){
    case TableDataConstants._startRequestDataById :
      return {
        ...state,
        loading: true
      }
    case TableDataConstants._successRequestDataById :
      return {
        ...state,
        tableDataById: action.payload.data,
      }
    case TableDataConstants._failRequestDataById :
      return {
        ...state
      }
    case TableDataConstants._stopRequestDataById :
      return {
        ...state,
        loading: false
      }
    default :
      return state
  }
}


/**
 * @description 删除单条数据
 */
export const delTableReducer = (state = initialGetTableState, action) => {
  switch (action.type) {
    case TableDataConstants._successDelTableData :
      return {
        ...state,
        _reload: !action.__reload
      }
    default :
      return state
  }
}

/**
 * @description 获取所有镇村id
 */
export const getAllCityIdReducer = (state = initialGetTableState, action) => {
  switch (action.type) {
    case TableDataConstants._startGetAllCityId :
      return {
        ...state,
        loading: true
      }
    case TableDataConstants._successGetAllCityId :
      return {
        ...state,
        allCityId: action.payload.data,
      }
    case TableDataConstants._failGetAllCityId :
      return {
        ...state
      }
    case TableDataConstants._stopGetAllCityId :
      return {
        ...state,
        loading: false
      }
    default :
      return state
  }
}