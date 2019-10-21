/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-25 16:36:01
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-10 14:13:27
 * @ 文件解释: 新增表单Saga
 */

import { take, call } from 'redux-saga/effects';
import { addForm } from '../constants/FormConstants';
import { message } from 'antd';
import { ADDFORM } from '../axios';

/**
 * @description 上传表单Saga
 */
export function* uploadFormSaga() {
  while (true) {
    try {
      const { axiosPath, formData }  = yield take(addForm._start);
      const data = yield call(ADDFORM, axiosPath, formData);
      if (data && data.status === 200) {
        message.success('上传成功');
      } else {
        message.error(`上传失败: 失败原因${data.msg}`);
      }
    } catch (err) {
      message.error(`上传失败: 失败原因${err}`);
    }
  }
}