/**
 * @ Author: Gszs
 * @ Create Time: 2019-10-29 10:03:13
 * @ Modified by: Gszs
 * @ Modified time: 2019-11-20 19:50:50
 * @ 文件解释: 自定义图标的需要写成组件的形式 <Icon component={} />
 */




export default {
	menus: [ // 菜单相关路由 
		{
			key: '/app/dashboard/index',
			title: '我的',
			GIcon: 'icon-panel',
			component: 'Dashboard'
		},
		{
			key: '/app/project',
			title: '项目',
			icon: 'project',
			component: 'OgListContainer'
		},
		{
			key: '/app/create',
			title: '创建',
			icon: 'branches',
			component: 'ProjectListContainer',
			subs: [
				{ key: '/app/project/create_pj',
					title: '创建项目', 
					GIcon: 'icon-iconzhengli_xiangmu', 
					component: '' 
				},
				{ key: '/app/project/create_private_Pj', 
					title: '创建私有项目', 
					GIcon: 'icon-tongyongleisiyoushitu', 
					component: '' 
				},
				{ key: '/app/project/create_tasl', 
					title: '创建任务', 
					GIcon: 'icon-renwu', 
					component: '' 
				}
			],
		},
		{
			key: '/app/help',
			title: '帮助',
			icon: 'usergroup-delete',
			component: 'Dashboard'
		},
		// {
		//     key: '/app/auth', title: '权限管理', icon: 'safety',
		//     subs: [
		//         { key: '/app/auth/basic', title: '基础演示', component: 'AuthBasic' },
		//         { key: '/app/auth/routerEnter', title: '路由拦截', component: 'RouterEnter', auth: 'auth/testPage' },
		//     ],
		// }
	],
	// 平行路由
	others: [
		{
			key: '/app/project/add_project',
			title: '新增项目',
			component: 'AddProjectContainer'
		}
	],
	// 个人资料/个人设置
	users: [

		{
			key: '/app/users/user_info',
			title: '个人资料',
			component: 'UserInfoContainer'
		},
		{
			key: '/app/users/user_setting',
			title: '个人设置',
			component: 'UserSettingContainer'
		},
		// 内部的忘记密码设置
		{
			key: '/private/users/forget_pwd', component: 'ForgetPwdContainer'
		}
	]

}