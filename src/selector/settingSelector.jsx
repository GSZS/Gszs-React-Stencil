/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-24 16:00:32
 * @ Modified by: Gszs
 * @ Modified time: 2019-07-27 10:02:11
 * @ Description: 设置常规系统设置属性
 */

import {createSelector} from 'reselect';
import {judgementMobile, judgementGetLogData, judgementGetLogDataTotal} from './commonSelector';

/**
 * @description 判读移动端
 */
export const mobileSelector = createSelector(
  judgementMobile,
  (isMobile) => isMobile
)

/**
 * @description 日志相关
 */
export const logDataSelector = createSelector(
  judgementGetLogData,
  getLogData => getLogData
)

/**
 * @description 获取日志总数
 */
export const logDataTotalSelector = createSelector(
  judgementGetLogDataTotal,
  getLogDataTotal => getLogDataTotal
)