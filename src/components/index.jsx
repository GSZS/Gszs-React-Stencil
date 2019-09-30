/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-01 01:00:32
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-28 18:04:48
 * @ 文件解释: 路由组件出口配置
 */

import {lazy} from 'react';

const Echarts = lazy(() => import('./charts/Echarts') );
const Recharts = lazy(() => import('./charts/Recharts') );
const Dashboard = lazy(() => import('@/containers/DashboardContainer') );
const AuthBasic = lazy(() => import('./auth/Basic') );
const RouterEnter = lazy(() => import('./auth/RouterEnter') );
const QueryParams = lazy(() => import('./extension/QueryParams') );
const LogInfo = lazy(() => import('./log/LogControl') );
const AddProjectContainer = lazy(() => import('@/containers/project/AddProjectContainer'));
const ProjectListContainer = lazy(() => import('@/containers/project/ProjectListContainer'));
const OgListContainer = lazy(() => import('@/containers/organization/OgListContainer'));
const UserInfoContainer = lazy(() => import('@/containers/users/UserInfoContainer'));
const UserSettingContainer = lazy(() => import('@/containers/users/UserSettingContainer'));


export default {
	Echarts,
	Recharts,
	Dashboard,
	AuthBasic,
	RouterEnter,
	QueryParams,
	LogInfo,
	AddProjectContainer,
	ProjectListContainer,
	OgListContainer,
	UserInfoContainer,
	UserSettingContainer
}