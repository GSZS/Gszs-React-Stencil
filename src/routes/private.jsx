/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-30 20:44:29
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-30 22:55:34
 * @ 文件解释: 私人路由
 */

import React,{useEffect} from 'react';
import Routes from '../routes';

// TODO:当有token的情况下直接进入得处理一下
export const Private = props => {
  
  const roles = JSON.parse(localStorage.getItem('roles'));
  const getClientWidth = () => {
    // 获取当前浏览器宽度并设置responsive管理响应式
    const clientWidth = window.innerWidth;
    clientWidth <= 992 ? props.isMobile(true) : props.isMobile(false);
  };

  useEffect(() => {
    window.onresize = () => {
      getClientWidth();
    };
  }, [])

  return <Routes {...props} auth={roles} />
}

