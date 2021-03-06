/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-28 15:09:10
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-28 15:43:08
 * @ 文件解释: 新增组织UI组件
 */

import React from 'react';
import UpoloadComponentContainer from '@/containers/uploadComponentContainer'
import '@/style/components/project/addProject.less';
import { _addOrganization } from '@/axios/config';

export const AddOg = props => {
  // 配置表单
  const addOj = [
    {
      label: '组织关键字',
      field: 'og_key',
      type: 'text',
      placeholder: '请组织关键字',
      initialValue: '请组织关键字'
    },
    {
      label: '组织名称',
      field: 'og_name',
      type: 'text',
      placeholder: '请组织名称',
      initialValue: '请组织名称'
    },
    {
      label: '组织描述',
      field: 'og_desc',
      type: 'textarea',
      placeholder: '请填入组织描述',
    },
    {
      label: '组织标图',
      field: 'og_pic',
      type: 'file'
    }
  ]

  // 其余配置
  const otherConfig = {
    FormConfig: addOj,
    formItemLayout : true,
    interfaceUrl : _addOrganization,
    _startAction : props.AddOgAction,
    uploadFileName: '增加组织标图',
    singleFile : true // 单文件上传
  }

  return (
    <UpoloadComponentContainer {...otherConfig} {...props} />
  )
}