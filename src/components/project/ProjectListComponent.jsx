/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-25 08:02:40
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-25 08:16:18
 * @ 文件解释: 项目列表UI-组件
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';

export const ProjectListComponents = props => {
  const { TabPane } = Tabs;
  return (
    <Tabs defaultActiveKey="1" >
      <TabPane tab="全部" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="敏捷开发" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="软件开发" key="3">
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab={<Link to={`'/app/project/add_project`}>创建项目</Link>} key="4" />
    </Tabs>
  )
}