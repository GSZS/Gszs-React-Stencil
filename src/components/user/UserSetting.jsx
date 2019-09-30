/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-30 13:25:39
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-30 17:00:10
 * @ 文件解释: 个人设置UI组件
 */

import React,{useState} from 'react';
import { Tabs } from 'antd';
import UpdatePwdContainer from '@/containers/users/userTabs/UpdatePwdContainer';
import { SVGICON } from '@/components/svg/svgIcon';
import '@/style/components/users/userSetting.less';

export const UserSetting = props => {

  const { TabPane } = Tabs;
  const [tabKey, setTabKey] = useState(1);
  // 切换Tabs
	const handleChange = key => {
		setTabKey(key)
	}

  return (
    <div className="TabRegion">
      <Tabs defaultActiveKey={tabKey} onChange={handleChange} >
        <TabPane
          tab={
            <span>
              <SVGICON
                type="icon-bianji"
                style={{
                  fontSize: '20px'
                }}
              />
              修改资料
            </span>
          }
          key={1}
        >
          修改资料
        </TabPane>
        <TabPane
          tab={
            <span>
              <SVGICON
                type="icon-mima"
                style={{
                  fontSize: '20px'
                }}
              />
              修改密码
            </span>
          }
          key={2}
        >
          <div className="updatePwd">
            <UpdatePwdContainer />
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
}

