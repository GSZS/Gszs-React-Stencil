/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-25 14:17:41
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-25 15:11:20
 * @ 文件解释: 项目相关Saga
 */

import { take, put, call } from 'redux-saga/effects';
import { GetAllPjSuccessAction, GetAllPjErrorAction } from '../../action/project/projectAction';
import { allPjTypeConstant } from '../../constants/project/projectConstants';
import { GETSELECTDATA } from '../../axios';

/**
 * @description 获取所有项目类型Saga
 */
export function* getAllPjTypes() {
  while (true) {
    try {
      const { axiosPath }  = yield take(allPjTypeConstant._start);
      const data = yield call(GETSELECTDATA, axiosPath);
      if (data && data.status === 200) yield put(GetAllPjSuccessAction(data));
      else yield put(GetAllPjErrorAction(data));
    } catch (err) {
      yield put(GetAllPjErrorAction(err));
    }
  }
}
