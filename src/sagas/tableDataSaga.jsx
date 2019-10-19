/**
 * @ Author: Gszs
 * @ Create Time: 2019-10-15 14:20:29
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-15 14:20:30
 * @ 文件解释: 渲染表格数据Saga
 */

import { take, put } from 'redux-saga/effects';
import { startGetTableData } from '../constants/tableDataConstant';
import { message } from 'antd';

/**
 * @description 渲染表格数据Saga
 */
export function* getTableDataSaga() {
  while (true) {
    try {
      const { axiosPath, _startAction, page, total } = yield take(startGetTableData._start);
      yield put(_startAction(axiosPath, page, total));
    } catch (err) {
      message.error(`startGetTableData中转站出现错误: 错误原因${err}`);
    }
  }
}