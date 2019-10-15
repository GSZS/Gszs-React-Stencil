/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-28 15:09:10
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-29 16:13:31
 * @ 文件解释: 新增组织UI组件
 */

import React from 'react';
import UpoloadComponentContainer from '@/containers/uploadComponentContainer'
import '@/style/components/project/addProject.less';
import { _addOrganization } from '@/axios/config';
import { AddOgAction } from '@/action/organization/OrganizationAction';

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
    <UpoloadComponentContainer
      FormConfig={addOj}
      formItemLayout={true}
      interfaceUrl={_addOrganization}
      _startAction = { AddOgAction }
      {...props}
    />
  )
}