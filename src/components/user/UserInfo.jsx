/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-30 13:25:15
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-30 15:20:05
 * @ 文件解释: 个人资料UI组件
 */

import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { SVGICON } from '@/components/svg/svgIcon'
import '@/style/components/users/userInfo.less'

export const UserInfo = props => {

	const { TabPane } = Tabs;
	const [tabKey, setTabKey] = useState(1);

	// 切换Tabs
	const handleChange = key => {
		setTabKey(key)
	}

	return (
		<>
			{/* 内容头部 */}
			<div className="contentBox">
				<div>
					<img src="https://avatars0.githubusercontent.com/u/30361974?v=4" alt="404" />
				</div>
				<div>
					<span className="userInfoName">Gszs</span>
				</div>
			</div>
			<hr />
			{/* Tba切换 */}
			<div className="tabRegion">
				<Tabs defaultActiveKey={tabKey} onChange={handleChange} >
					<TabPane
						tab={
							<span>
								<SVGICON 
									type="icon-rizhi" 
									style={{
										fontSize: '20px'
									}}
								/>
								项目日志
							</span>
						}
						key={1}
					>
						11111
							</TabPane>
					<TabPane
						tab={
							<span>
								<SVGICON 
									type="icon-xiangmu" 
									style={{
										fontSize: '20px'
									}}
								/>
								参与项目
							</span>
						}
						key={2}
					>
						22222
							</TabPane>
				</Tabs>
			</div>
		</>
	)

}
