/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-23 14:47:25
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-23 14:53:44
 * @ 文件解释: 存放所有Saga
 */

import { call, all } from 'redux-saga/effects';
import { getAllOg } from './organization/organization_saga';

export default function* root() {
  yield all([call(getAllOg)])
}