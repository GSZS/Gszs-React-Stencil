/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-28 17:04:10
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-15 11:08:58
 * @ 文件解释: 组织列表容器组件
 */

import React,{ useState, useRef } from 'react';
import ControlTableContainer from '@/containers/controlTableContainer';
import { Button, Modal } from 'antd';
import BreadcrumbCustom from '@/components/BreadcrumbCustom';
import '@/style/components/organization/oglist.less';
import AddOgContainer from '@/containers/organization/AddOgContainer';

export const OgList = props => {
  
  const [visible, setVisible] = useState(false);
  const refContainer = useRef(null);

  // 设置modal显隐
  const displayModal = () => {
    setVisible(!visible);
  }
  const handleCancel = () => {
    setVisible(!visible);
  }
  // 触发公共上传组件的submit
  const handleOk = () => {   
    refContainer.current.props.onSubmit();
    setVisible(!visible);
  }

  // 设置基础表格columns
  const columns = [
    {
      title: '组织名称',
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
    <>
      {/* 面包屑 */}
      <BreadcrumbCustom
        first="组织"
        second={props.routerTitle}
      />
      {/* 内容头部 */}
      <div className="contentHeader">
        <span>组织</span>
        <Button 
          type="primary" 
          icon="plus" 
          onClick={displayModal}
        >新增</Button>
      </div>
      <ControlTableContainer 
        columns = {columns}
        componentName = {props.routerTitle}
      />
      {/* 新增组织 */}
      <Modal
        width={600}
        title="新增组织"
        visible={visible}
        okText="确定"
        cancelText="取消"
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <AddOgContainer _ref={ refContainer } />
      </Modal>
    </>
  )
}
