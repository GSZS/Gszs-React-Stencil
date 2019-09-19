/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-18 23:39:16
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-19 14:34:06
 * @ 文件解释: 新增项目UI组件
 */

import React from 'react';
import UpoloadComponentContainer from '../../containers/uploadComponentContainer'
import BreadcrumbCustom from '../BreadcrumbCustom';
import '../../style/components/project/addProject.less';

export const AddProject = props => {
  
  // 配置表单
  const addProject = [
    {
      label: '项目名称',
      field: 'projectName',
      type: 'text',
      placeholder: '请输入项目名称'
    },
    {
      label: '项目key',
      field: 'projectKey',
      type: 'text',
      placeholder: '请输入项目key',
    },
    {
      label: '组织',
      field: 'projectOrganization',
      type: 'select',
      initialValue: 'Default',
    },
    {
      label: '项目类型',
      field: 'projectType',
      type: 'radio',
      radioLength: 2, // 可以配置单选框的数量(默认是1个)
      radioDesc: [    // 配置单选框的内容(覆盖label)
        {
          name: '敏捷开发',
          desc: '搜集用户故事、规划迭代、进度管理、团队协作、用例管理、缺陷追踪、评审回顾、总结沉淀'
        },
        {
          name: '软件开发',
          desc: '跟踪开发任务和处理BUG'
        }
      ]
    },
    {
      label: '项目描述',
      field: 'projectDesc',
      type: 'textarea',
      placeholder: '请简单填入此项目描述',
      initialValue: '项目管理中后台',
    },
    {
      label: '项目详情',
      field: 'projectDetails',
      type: 'marked',
    },
    {
      label: '项目负责人',
      field: 'projectBoss',
      type: 'select',
      initialValue: 'Gszs',
    },
    {
      label: '项目大图',
      field: 'projectPicture',
      type: 'file'
    }
  ]

  return (
    <>
      <BreadcrumbCustom first="项目管理" second={props.routerTitle} />
      {/* 创建项目 */}
      <div className="headerName"><span> 创建项目 </span></div> 
      <hr/>
      <div className="addProjectForm">
        <UpoloadComponentContainer 
          FormConfig={addProject} 
          formItemLayout = {true}
          submitButtonName = "创建项目"
        />
      </div>
    </>
  )
}
