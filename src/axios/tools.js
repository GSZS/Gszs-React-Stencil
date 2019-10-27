/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-01 01:00:32
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-27 11:21:14
 * @ 文件解释: 对axios进行包装
 */

import axios from 'axios';
import { message } from 'antd';
import { GETNEWTOKEN } from './index'

// 请求头带上token
export const getToken = () => axios.defaults.headers.common['authorization'] = window.localStorage.getItem('token');

// 带上cookie / 证书
axios.defaults.withCredentials = true;

// 重新设置token
const setNewToken = token => {
  window.localStorage.setItem('token', token);
}

// 创建一个是否在刷新的标记,防止多次请求刷新token接口
let isRefreshing = false;

// 重试队列，用于将token正在刷新时将下面的接口先放入队列中
let requestsArr = [];

// 请求拦截器 处理token失效
// axios.interceptors.request.use(req => {
//   CHECKTOKENEFFECTIVE
// })

// 响应拦截器 - 处理token失效（因为服务器时间与本地时间有间隙） TODO: axios响应拦截器有独立的作用域
axios.interceptors.response.use(res => {

  if (res && res.data.status === 401 && localStorage.getItem('refreshToken')) {
    const refreshToken = localStorage.getItem('refreshToken');
    const config = res.config;
    if (!isRefreshing) {
      isRefreshing = true;
      return new Promise((resolve, reject) => {
        GETNEWTOKEN(refreshToken).then(res => {
          const { token } = res.data;
          setNewToken(token);
          config.headers['authorization'] = token;
          // 已经刷新了token，将所有队列中的请求进行重试
          requestsArr.forEach(cb => cb(token))
          requestsArr = [];
          axios(config).then(res => {
            if (res && res.status === 200) {
              resolve(res);
            }
          })
        }).catch(err => {
          message.error(err);
        }).finally(() => {
          isRefreshing = false;
        })
      })
    }
  } else {
    return res
  }
})


/**
 * @description 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */

export const get = ({ url, msg = '接口异常', headers }) =>
  axios
    .get(url, headers)
    .then(res => {
      return res.data;
    })
    .catch(msg => {
      message.warning(msg);
    });

/**
 * @description 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const post = ({ url, data, msg = '接口异常', headers }) =>
  axios
    .post(url, data, headers)
    .then(res => {
      if (res && res.data.status === 401 && localStorage.getItem('refreshToken')) {

      }
      return res.data;
    })
    .catch(msg => {
      message.warning(msg);
    });