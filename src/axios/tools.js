/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-01 01:00:32
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-24 16:09:35
 * @ 文件解释: 对axios进行包装
 */

import axios from 'axios';
import {message} from 'antd';

/**
 * @description 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
const env = process.env.NODE_ENV; // 获取环境
export const get = ({url, msg = '接口异常', headers}) =>
  axios
    .get (url, headers)
    .then (res => {
      return res.data;
    })
    .catch (msg => {
      message.warn (msg);
    });

/**
 * @description 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const post = ({url, data, msg = '接口异常', headers}) =>
  axios
    .post (url, data, headers)
    .then (res => {
			return res.data;
    })
    .catch (msg => {
      message.warn (msg);
    });
