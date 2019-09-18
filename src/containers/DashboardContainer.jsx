/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-29 11:48:29
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-11 09:39:14
 * @ 文件解释: 首页容器组件 - 主要用于获取初始值
 */

import React from 'react';
import Dashboard from '../components/dashboard/Dashboard'

const DashboardContainer = props => {

  return (
    <Dashboard {...props} />
  )  
}

export default DashboardContainer;
