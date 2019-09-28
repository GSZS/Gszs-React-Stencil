/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-28 17:04:10
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-28 18:16:09
 * @ 文件解释: 组织列表容器组件
 */

import React from 'react';
import ControlTableContainer from '@/containers/controlTableContainer';
// import '@/style/components/towns.less';

export const OgList = props => {
  
  // 设置基础表格columns
  const columns = [
    {
      title: '组织',
      dataIndex: 'OgName',
      key: 'OgName'
    },
    {
      title: '包含项目',
      dataIndex: 'includePj',
      key: 'includePj'
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
    },
  ]

  return (
    <ControlTableContainer 
      columns = {columns}
      componentName = {props.routerTitle}
      crumbsConfig={{
        first: '组织',
        second: props.routerTitle,
      }}
    />
  )
}
