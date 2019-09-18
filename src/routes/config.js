export default {
	menus: [ // 菜单相关路由 
		{	
			key: '/app/dashboard/index',
			title: '首页',
			icon: 'mobile',
			component: 'Dashboard'
		},
		{
			key: '/app/settingControl',
			title: '系统管理',
			icon: 'mobile',
			auth: 'superAdmin',
			subs: [
				{
					key: '/app/settingControl/userControl',
					title: '用户管理',
					icon: 'audit',
					component: ''
				},
				{
					key: '/app/settingControl/roleControl',
					title: '角色管理',
					icon: 'audit',
					component: ''
				},
				{
					key: '/app/settingControl/authControl',
					title: '权限管理',
					icon: 'audit',
					component: ''
				},
				{
					key: '/app/settingControl/menuControl',
					title: '菜单管理',
					icon: 'audit',
					component: ''
				}
			]
		},
		{
			key: '/app/controllog',
			title: '日志管理',
			icon: 'snippets',
			subs: [{
				key: '/app/controllog/findlog',
				title: '查询所有日志信息',
				component: 'LogInfo'
			}]
		},
		// {
		//     key: '/app/auth', title: '权限管理', icon: 'safety',
		//     subs: [
		//         { key: '/app/auth/basic', title: '基础演示', component: 'AuthBasic' },
		//         { key: '/app/auth/routerEnter', title: '路由拦截', component: 'RouterEnter', auth: 'auth/testPage' },
		//     ],
		// }
	],
}