/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-28 15:09:10
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-28 15:09:12
 * @ 文件解释: 新增组织UI组件
 */

import React from 'react';
import UpoloadComponentContainer from '@/containers/uploadComponentContainer'
import BreadcrumbCustom from '../BreadcrumbCustom';
import '@/style/components/project/addProject.less';
import { _addOrganization } from '@/axios/config';

export const AddOg = props => {

  // 配置表单
  const addOj = [
    {
      label: '组织关键字',
      field: 'OjKey',
      type: 'text',
      placeholder: '请组织关键字',
      initialValue: '请组织关键字'
    },
    {
      label: '组织名称',
      field: 'OjName',
      type: 'text',
      placeholder: '请组织名称',
      initialValue: '请组织名称'
    },
    {
      label: '组织描述',
      field: 'OjDesc',
      type: 'textarea',
      placeholder: '请填入组织描述',
    },
    {
      label: '组织标图',
      field: 'avatar',
      type: 'file'
    }
  ]

  return (
    <>
      <BreadcrumbCustom first="组织" second={props.routerTitle} />
      {/* 创建项目 */}
      <div className="headerName"><span> 创建项目 </span></div> 
      <hr />
      <Modal
        width={500}
        title='新建组织'
        visible={visible}
        okText="确定修改"
        cancelText="取消更改"
      >
        <UpoloadComponentContainer
          FormConfig={addOj} 
          formItemLayout = {true}
          submitButtonName = "新建组织"
          interfaceUrl = {_addOrganization}
        />
      </Modal>
    </>
  )
}