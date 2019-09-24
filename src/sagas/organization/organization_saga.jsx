/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-23 11:43:08
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-24 16:22:02
 * @ 文件解释: 组织Saga
 */

import { take, put, call } from 'redux-saga/effects';
import { GetAllOgSuccessAction, GetAllOgErrorAction } from '../../action/organization/OrganizationAction';
import { findAllOg } from '../../constants/organization/OrganizationConstant';
import { GETSELECTDATA } from '../../axios';

/**
 * @description 获取所有组织Saga
 */
export function* getAllOg() {
  while (true) {
    try {
      const { axiosPath }  = yield take(findAllOg._start);
      const data = yield call(GETSELECTDATA, axiosPath);
      if (data && data.status === 200) yield put(GetAllOgSuccessAction(data));
      else yield put(GetAllOgErrorAction(data));
    } catch (err) {
      yield put(GetAllOgErrorAction(err));
    }
  }
}
