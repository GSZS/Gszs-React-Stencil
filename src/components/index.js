/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-01 01:00:32
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-13 16:25:43
 * @ 文件解释: 路由组件出口配置
 */

/**
 * @description 组件名称
 * @file Dashboard  -> 首页容器组件
 * 
 * ==== 模块测试
 * @file Register -> 完整的注册模块
 */

import Echarts from './charts/Echarts';
import Recharts from './charts/Recharts';
import Dashboard from '../containers/DashboardContainer';
import AuthBasic from './auth/Basic';
import RouterEnter from './auth/RouterEnter';
import QueryParams from './extension/QueryParams';
import LogInfo from './log/LogControl';

export default {
	Echarts,
	Recharts,
	Dashboard,
	AuthBasic,
	RouterEnter,
	QueryParams,
	LogInfo,
}