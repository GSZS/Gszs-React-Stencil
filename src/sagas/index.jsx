/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-23 14:47:25
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-10 14:17:27
 * @ 文件解释: 存放所有Saga
 */

import { call, all } from 'redux-saga/effects';
import { getAllOg, addOg } from './organization/organization_saga';
import { getAllPjTypes } from './project/project_saga'
import { RegisterSaga } from './user/userSaga'
import { uploadFormSaga } from './addForm_saga';

export default function* root() {
  yield all([
    call(getAllOg),
    call(getAllPjTypes),
    call(addOg),
    call(RegisterSaga),
    call(uploadFormSaga)
  ])
}