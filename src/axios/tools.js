/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-01 01:00:32
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-07-02 16:16:33
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
			// 处理一层token异常
			if(env && env === 'development' && res.data.status === 500209){
        window.location.href="http://localhost:3006/#/login";
        window.location.reload()
			}else if(env && env === 'production' && res.data.status === 500209){
        window.location.href="http://47.111.23.117:8081/#/login";
			}else{
				return res.data;
			}
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
			// 处理一层token异常
			if(env && env === 'development' && res.data.status === 500209){
        window.location.href="http://localhost:3006/#/login";
        window.location.reload()
			}else if(env && env === 'production' && res.data.status === 500209){
        window.location.href="http://47.111.23.117:8081/#/login";
			}else{
				return res.data;
			}
    })
    .catch (msg => {
      message.warn (msg);
    });

/**
 * @description 并行发送多个 Post/Get 请求
 * @param {[request1 , request2]} 多个请求地址
 */
export const postAllRequest = (...requestUrl) => {
  axios.all (requestUrl).then (
    axios.spread ((...result) => {
      result.map (res => {
        if (res && res.status === 200) {
          message.success (res.message);
        } else {
          message.error (res.error);
        }
      });
    })
  );
};
