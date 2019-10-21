export default {
	menus: [ // 菜单相关路由 
		{	
			key: '/app/dashboard/index',
			title: '首页',
			icon: 'home',
			component: 'Dashboard'
		},
		{
			key: '/app/organization',
			title: '组织',
			icon: 'branches',
			component: 'OgListContainer'
		},
		{
			key: '/app/project',
			title: '项目',
			icon: 'project',
			component: 'ProjectListContainer'
		},
		{
			key: '/app/control',
			title: '管理',
			icon: 'control',
			component: 'Dashboard'
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