/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-25 16:36:01
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-15 10:53:24
 * @ 文件解释: 新增表单Saga - 中转站(只用于分发)
 */

import { take, put } from 'redux-saga/effects';
import { addForm } from '../constants/FormConstants';
import { message } from 'antd';

/**
 * @description 上传表单Saga
 */
export function* uploadFormSaga() {
  while (true) {
    try {
      const { axiosPath, formData, _startAction } = yield take(addForm._start);
      yield put(_startAction(axiosPath, formData));
    } catch (err) {
      message.error(`addFormSaga中转站出现错误: 错误原因${err}`);
    }
  }
}