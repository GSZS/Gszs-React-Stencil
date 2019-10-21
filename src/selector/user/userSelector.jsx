/**
 * @ Author: Gszs
 * @ Create Time: 2019-10-02 21:36:46
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-02 21:36:48
 * @ 文件解释: 用户操作selector
 */

import { createSelector } from 'reselect';
import { judgementRegister } from '../commonSelector';

/**
 * @description 注册
 */
export const registerSelector = createSelector(
  judgementRegister,
  register => register
)