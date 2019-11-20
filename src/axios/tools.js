/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-01 01:00:32
 * @ Modified by: Gszs
 * @ Modified time: 2019-11-20 20:16:24
 * @ 文件解释: 对axios进行包装
 */

import axios from 'axios';
import { message } from 'antd';
import { GETNEWTOKEN } from './index';
import { logoutNoRequest } from '@/action/settingAction';
import { configureStore } from '@/store/configureStore';

export const getToken = () => {
  const allState = JSON.parse(window.localStorage.getItem('persist:root'));
  const { loginData: { token } } = JSON.parse(allState.LoginReducer);
  axios.defaults.headers.common['authorization'] = token;
}


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


// 封装响应拦截
// 响应拦截器 - 处理token失效（因为服务器时间与本地时间有间隙） TODO: axios响应拦截器有独立的作用域
const setupAxiosInterceptors = onUnauthenticated => {

  const allState = JSON.parse(window.localStorage.getItem('persist:root'));
  const { loginData: { refreshToken } } = JSON.parse(allState.LoginReducer);

  axios.interceptors.response.use(res => {
    const config = res.config;

    // 如果状态码为5999则表示后端判断到refreshtoken已经过期了，需要跳回登录界面重新获取refreshToken
    if (res && (res.data.status === 5998 || res.data.status === 5999)) {
      // 走正常退出流程
      if (!config.url.includes('signout')) {
        message.warning('refreshToken已失效,请点击退出重新登录');
      } else {
        onUnauthenticated();
        return new Promise((resolve, reject) => {
          resolve({
            data: {
              status: 1002,
              message: 'refreshToken已失效,请重新登录'
            }
          });
        })
      }
    }

    if (res && res.data.status === 401 && refreshToken) {

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
}

const { store } = configureStore();
setupAxiosInterceptors(jumpUrl => {
  store.dispatch(logoutNoRequest(jumpUrl));
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
    .then(res => res.data)
    .catch(msg => message.warning(msg));

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
    .then(res => res.data)
    .catch(msg => message.warning(msg));