/* @Description: 分发方法【Action】
 * @Author: Gszs 
 * @Date: 2019-05-04 14:41:01 
 * @Last Modified by:   Gszs 
 * @Last Modified time: 2019-05-04 14:41:01 
 */

import * as type from './type';
import * as http from '../axios/index';

const requestData = category => ({
    type: type.REQUEST_DATA,
    category
});
export const receiveData = (data, category) => ({
    type: type.RECEIVE_DATA,
    data,
    category
});

/**
 * 请求数据调用方法
 * @param funcName      请求接口的函数名
 * @param params        请求接口的参数
 * @returns 流程函数
 */
export const fetchData = ({funcName, params, stateName}) => dispatch => {
    !stateName && (stateName = funcName);
    dispatch(requestData(stateName));
    return http[funcName](params).then(res => dispatch(receiveData(res, stateName)));
};