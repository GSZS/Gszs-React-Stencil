/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-30 15:36:59
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-11 15:21:00
 * @ 文件解释: 设置个人信息/图像组件
 */

import React from 'react';
import UploadComponentContainer from '@/containers/uploadComponentContainer';
import '@/style/components/project/addProject.less';
import { _updateUserInfo } from '@/axios/config';
import { user_id } from '@/constants/settingConstant'


export const EditUserInfo = props => {

  // 配置表单
  const updateUserInfo = [
    {
      label: '修改头像',
      field: 'avatar',
      type: 'file'
    },
    {
      label: '显示名称',
      field: 'nickname',
      type: 'text',
      placeholder: '输入你的昵称，让你认识的人认出你',
      initialValue: '请输入显示名称'
    },
    {
      label: '性别',
      field: 'gender',
      type: 'radio',
      radioDesc: [ // 如果不是动态获取数据,要设置为这样的格式
        {
          id: 1,
          name: '男',
        },
        {
          id: 2,
          name: '女',
        }
      ],
    },
    {
      label: '个人介绍',
      field: 'selfIntro',
      type: 'textarea',
      placeholder: '告诉我们关于你的介绍，少于250字符',
      initialValue: '请输入个人介绍'
    }
  ]
  return (
    <>
      <div className="updateUserInfoStyle">
        <UploadComponentContainer
          FormConfig={updateUserInfo}
          formItemLayout = {true} // 是否开启横向表格布局
          submitButtonName = "保存"
          interfaceUrl = {`${_updateUserInfo}/${user_id}`} 
        />
      </div>
    </>
  )
}