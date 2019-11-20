/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-28 17:04:10
 * @ Modified by: Gszs
 * @ Modified time: 2019-11-20 11:59:46
 * @ 文件解释: 组织列表容器组件
 */

import React, { useEffect, useState, useRef } from 'react';
import ControlTableContainer from '@/containers/controlTableContainer';
import { Button, Modal, message, Tag, Pagination } from 'antd';
import BreadcrumbCustom from '@/components/BreadcrumbCustom';
import '@/style/components/organization/oglist.less';
import AddOgContainer from '@/containers/organization/AddOgContainer';
import { _findAllOrganization, _delOrganization } from '@/axios/config';
import { GETALLOG, DELOG } from '@/axios';

export const OgList = props => {

  const [visible, setVisible] = useState(false);
  const refContainer = useRef(null);

  // 设置modal显隐
  const displayModal = () => {
    setVisible(true);
  }

  const handleCancel = () => {
    setVisible(false);
  }

  // 触发公共上传组件的submit
  const handleOk = () => {
    refContainer.current.props.onSubmit();
    message.success('新增成功')
    setVisible(false);
  }

  // 设置基础表格columns
  const columns = [
    {
      title: '组织名称',
      dataIndex: 'og_name',
      key: 'og_name',
      width: 100
    }, 
    {
      title: '组织关键字',
      dataIndex: 'og_key',
      key: 'og_key',
      width: 100
    },
    {
      title: '组织标图',
      dataIndex: 'og_pic',
      key: 'og_pic',
      render: pic => (
        <img style={{
          width: '80px',
          height: '80px',
          borderRadius: '10%'
        }} src={`http://localhost:5001/og_img/${pic}`} alt="404" />
      ),
      width: 50
    },
    {
      title: '包含项目',
      dataIndex: 'project',
      key: 'project',
      render: pjlist => (
        <span>
          {
            pjlist.map((cv, index) => {
              return (
                <Tag color='volcano' key={index}>
                  {
                    Boolean(cv.pj_key) ? cv.pj_key : ''
                  }
                </Tag>
              );
            })
          }
        </span>
      ),
      width: 100
    },
    {
      title: '组织描述',
      dataIndex: 'og_desc',
      key: 'og_desc',
      width: 100
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 100
    },
  ]

  // 渲染表格配置
  const controlTableConfig = {
    columns : columns,
    componentName : props.routerTitle,
    getData : GETALLOG, // 获取数据
    delAxiosFunc : DELOG,
    delAxiosPath : _delOrganization,
  }

  // 新增数据的模态框配置
  const addModalConfig = {
    width : 600,
    title : "新增组织",
    visible : visible,
    okText : "确定",
    cancelText : "取消",
    onCancel : handleCancel,
    onOk : handleOk,
  }
  
  return (
    <>
      {/* 面包屑 */}
      <BreadcrumbCustom first="组织" second={props.routerTitle} />
      <div className="contentHeader">
        <span>组织</span>
        <Button 
          type="primary" 
          icon="plus"
          onClick={displayModal}
        >新增</Button>
      </div>
      <ControlTableContainer {...controlTableConfig} />
      {/* 新增组织 */}
      <Modal {...addModalConfig}>
        <AddOgContainer _ref={refContainer} />
      </Modal>
    </>
  )
}
