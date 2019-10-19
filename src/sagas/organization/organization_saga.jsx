/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-23 11:43:08
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-16 09:31:44
 * @ 文件解释: 组织Saga
 */

import { take, put, call } from 'redux-saga/effects';
import { 
  AddOgSuccessAction,
  AddOgErrorAction
} from '@/action/organization/OrganizationAction';
import { addOj } from '@/constants/organization/OrganizationConstant';
import { ADDOG } from '@/axios';

/**
 * @description 新增组织
 */
export function* addOg(){
  while(true){
    try{
      const { axiosPath, formData } = yield take(addOj._start);
      const data = yield call(ADDOG, axiosPath, formData);
      if (data && data.status === 200) yield put(AddOgSuccessAction(data));
      else yield put(AddOgErrorAction(data));
    } catch(err){
      yield put(AddOgErrorAction(err));
    }
  }
}
