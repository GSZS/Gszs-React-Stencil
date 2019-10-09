/**
 * @ Author: Gszs
 * @ Create Time: 2019-10-02 20:59:04
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-02 21:49:40
 * @ 文件解释: 用户操作saga
 */

import { take, put, call } from 'redux-saga/effects';
import { SuccessRegister, ErrorRegister } from '@/action/user/userAction';
import { addRegister } from '@/constants/user/userConstant';
import { REGISTER } from '@/axios';
import { message } from 'antd';

/**
 * @description 注册Saga
 */
export function* RegisterSaga() {
  while (true) {
    try {
      const { formData }  = yield take(addRegister._start);
      const data = yield call(REGISTER, formData);
      if (data && data.status === 200) {
        message.success(data.message);
        yield put(SuccessRegister(data));
      }
      else {
        message.error(data.message)
        yield put(ErrorRegister(data));
      }
    } catch (err) {
      yield put(ErrorRegister(err));
    }
  }
}