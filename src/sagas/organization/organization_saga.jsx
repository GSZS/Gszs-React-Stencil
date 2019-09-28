/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-23 11:43:08
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-28 17:00:50
 * @ 文件解释: 组织Saga
 */

import { take, put, call } from 'redux-saga/effects';
import { 
  GetAllOgSuccessAction,
  GetAllOgErrorAction,
  AddOgErrorAction
} from '@/action/organization/OrganizationAction';
import { findAllOg, addOj } from '@/constants/organization/OrganizationConstant';
import { GETSELECTDATA, ADDOG } from '@/axios';

/**
 * @description 获取所有组织Saga
 */
export function* getAllOg() {
  while (true) {
    try {
      const { axiosPath } = yield take(findAllOg._start);
      const data = yield call(GETSELECTDATA, axiosPath);
      if (data && data.status === 200) yield put(GetAllOgSuccessAction(data));
      else yield put(GetAllOgErrorAction(data));
    } catch (err) {
      yield put(GetAllOgErrorAction(err));
    }
  }
}

/**
 * @description 新增组织
 */
export function* addOg(){
  while(true){
    try{
      const { axiosPath, formData } = yield take(addOj._start);
      const data = yield call(ADDOG, axiosPath, formData);
      if (data && data.status === 200) yield put(GetAllOgSuccessAction(data));
      else yield put(AddOgErrorAction(data));
    } catch(err){
      yield put(AddOgErrorAction(err));
    }
  }
}
