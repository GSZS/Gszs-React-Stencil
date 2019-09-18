/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-30 15:20:35
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-11 09:46:46
 * @ 文件解释: 表格数据 - Action
 */

import * as TableDataConstants from '../constants/TableConstants';
import {message} from 'antd';

/**
 * @description 请求数据-用于表格渲染
 * @param {axiosFunction} axios中封装的请求函数
 */
export const getTableAction = (axiosFun, page) => {
  return async dispatch => {
    dispatch({
      type: TableDataConstants._startRequestData
    })
    try{
      const res = await axiosFun(page);
      if(res && res.status === 200){
        dispatch({
          type: TableDataConstants._successRequestData,
          payload: res
        })
      }else{
        dispatch({
          type: TableDataConstants._failRequestData
        })
      }
    } catch (err){
      message.error('getTableAction捕获错误=>>>', err)
    } finally {
      dispatch({
        type: TableDataConstants._stopRequestData
      })
    }
  }
}

/**
 * @description 请求数据通过id
 * @param {请求函数} axiosFun 
 * @param {*} id 
 */
export const getTableByIdAction = (axiosFun, id) => {
  return async dispatch => {
    dispatch({
      type: TableDataConstants._startRequestDataById
    })
    try{
      const res = await axiosFun(id);
      if(res && res.status === 200){
        dispatch({
          type: TableDataConstants._successRequestDataById,
          payload: res
        })
      }else{
        dispatch({
          type: TableDataConstants._failRequestDataById
        })
      }
    } catch (err){
      message.error('getTableByIdAction捕获错误=>>>', err)
    } finally {
      dispatch({
        type: TableDataConstants._stopRequestDataById
      })
    }
  }
}

/**
 * @description 删除数据-用于表格渲染
 * @param {axiosFunction} axios中封装的请求函数
 */
export const delTableAction = (axiosFun, id) => {
  return async (dispatch, getState) => {
    const {getTableReducer} = getState()
    dispatch({
      type: TableDataConstants._startDelTableData
    })
    try{
      const res = await axiosFun(id);
      if(res && res.status === 200){
        message.success(`编号 ${id} 已经删除成功`);
        dispatch({
          type: TableDataConstants._successDelTableData,
          payload: res,
          __reload: getTableReducer._reload
        })
      }else{
        message.error(`删除失败! 错误是: ${res.message}`)
        dispatch({
          type: TableDataConstants._failDelTableData
        })
      }
    } catch (err){
      message.error('delTableAction捕获错误=>>>', err)
    } finally {
      dispatch({
        type: TableDataConstants._stopDelTableData
      })
    }
  }
}

/**
 * @description 新增数据-用于表格渲染
 * @param {axiosFunction} axios中封装的请求函数
 */
export const addTableAction = (axiosFun, formData, componentName) => {
  return async dispatch => {
    dispatch({
      type: TableDataConstants._startAddTableData
    })
    try{
      const res = await axiosFun(formData);
      if(res && res.status === 200){
        message.success(`${componentName}成功`);
        // 因为是富文本所以新增成功后要删除图片id
        if(window.localStorage.getItem('picId')){
          window.localStorage.removeItem('picId');
        }
        dispatch({
          type: TableDataConstants._successAddTableData,
          payload: res
        })
      }else{
        message.error(`${componentName}时发生错误! 错误是: ${res.message}`);
        dispatch({
          type: TableDataConstants._failAddTableData
        })
      }
    } catch (err){
      message.error('addTableAction捕获错误=>>>', err)
    } finally {
      dispatch({
        type: TableDataConstants._stopAddTableData
      })
    }
  }
}

/**
 * @description 修改数据-用于表格渲染
 * @param {axiosFunction} axios中封装的请求函数
 * @param {id}            id
 * @param {formData}      需要修改的表单数据
 */
export const updateTableAction = (axiosFun, id, formData) => {
  return async dispatch => {
    dispatch({
      type: TableDataConstants._startUpdateTableData
    })
    try{
      const res = await axiosFun();
      if(res && res.status === 200){
        message.success(`修改编号${id}数据成功!`)
        dispatch({
          type: TableDataConstants._successUpdateTableData,
          payload: res
        })
      }else{
        message.success(`修改编号${id}数据失败! 错误是: ${res}`)
        dispatch({
          type: TableDataConstants._failUpdateTableData
        })
      }
    } catch (err){
      message.error('updateTableAction捕获错误=>>>', err)
    } finally {
      dispatch({
        type: TableDataConstants._stopUpdateTableData
      })
    }
  }
}