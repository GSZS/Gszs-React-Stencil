/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-01 01:00:32
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-18 23:21:48
 * @ 文件解释: 路由组件出口配置
 */

import {lazy} from 'react';

const Echarts = lazy(() => import('./charts/Echarts') );
const Recharts = lazy(() => import('./charts/Recharts') );
const Dashboard = lazy(() => import('../containers/DashboardContainer') );
const AuthBasic = lazy(() => import('./auth/Basic') );
const RouterEnter = lazy(() => import('./auth/RouterEnter') );
const QueryParams = lazy(() => import('./extension/QueryParams') );
const LogInfo = lazy(() => import('./log/LogControl') );

export default {
	Echarts,
	Recharts,
	Dashboard,
	AuthBasic,
	RouterEnter,
	QueryParams,
	LogInfo,
}