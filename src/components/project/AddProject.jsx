/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-18 23:39:16
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-25 20:11:01
 * @ 文件解释: 新增项目UI组件
 */

import React from 'react';
import UpoloadComponentContainer from '@/containers/uploadComponentContainer'
import BreadcrumbCustom from '../BreadcrumbCustom';
import '@/style/components/project/addProject.less';
import { _findAllOrganization, _allProjectType, _addProject } from '@/axios/config';

export const AddProject = props => {

  // 配置表单
  const addProject = [
    {
      label: '项目名称',
      field: 'proName',
      type: 'text',
      placeholder: '请输入项目名称',
      initialValue: '请输入项目名称'
    },
    {
      label: '组织',
      field: 'proDesc',
      type: 'select',
      initialValue: 'Default',
      axiosPath: _findAllOrganization, // 请求地址
      on: true //这个Boolean值是用于下拉框的数据是否需要动态获取
    },
    {
      label: '项目类型',
      field: 'proTypeId',
      type: 'radio',
      radioDesc: [ // 如果不是动态获取数据,要设置为这样的格式
        {
          id: 1,
          name: '敏捷开发',
          desc: '搜集用户故事、规划迭代、进度管理、团队协作、用例管理、缺陷追踪、评审回顾、总结沉淀'
        },
        {
          id: 2,
          name: '软件开发',
          desc: '跟踪开发任务和处理BUG'
        }
      ],
      on: true,
      axiosPath: _allProjectType
    },
    // {
    //   label: '项目描述',
    //   field: 'projectDesc',
    //   type: 'textarea',
    //   placeholder: '请简单填入此项目描述',
    //   initialValue: '请简单填入此项目描述...'
    // },
    {
      label: '项目详情',
      field: 'proDesc',
      type: 'markdown',
      placeholder: '请填入项目详情',
    },
    {
      label: '项目标图',
      field: 'avatar',
      type: 'file'
    }
  ]

  return (
    <>
      <BreadcrumbCustom first="项目管理" second={props.routerTitle} />
      {/* 创建项目 */}
      <div className="headerName"><span> 创建项目 </span></div> 
      <hr />
      <div className="addProjectForm">
        <UpoloadComponentContainer
          FormConfig={addProject} 
          formItemLayout = {true} // 是否开启横向表格布局
          submitButtonName = "创建项目"
          interfaceUrl = {_addProject}
        />
      </div>
    </>
  )
}
