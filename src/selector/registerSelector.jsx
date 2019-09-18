/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-03 11:06:50
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-03 11:12:45
 * @ 文件解释: 注册 - Selector
 */

import {createSelector} from 'reselect';
import {judgementGetRegister} from './commonSelector';

/**
 * @description 注册 - Selector
 */
export const registerSelector = createSelector(
  judgementGetRegister,
  register => register
)