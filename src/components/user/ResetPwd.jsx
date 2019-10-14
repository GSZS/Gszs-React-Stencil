/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-30 15:37:30
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-14 20:50:30
 * @ 文件解释: 重设密码UI组件
 */

import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Tooltip } from 'antd';
import { withRouter } from 'react-router-dom';
import { RESETPWD } from '../../axios';
import { user_id, phonenumber } from '@/constants/settingConstant'

const ResetPwd = props => {

  const [update, setUpdate] = useState(false);
  const [confirmDirty, setConfirmDirty] = useState(false);
  const { getFieldDecorator } = props.form;
  const FormItem = Form.Item;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12, offset: 1 },
    },
  };

  // 处理确认密码输入
  const handleConfirmBlur = e => {
    const value = e.target.value;
    setUpdate(confirmDirty || !!value)
  }

  // 处理焦点
  const validateToNextPassword = (rule, value, callback) => {
    const form = props.form;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  // 确认密码
  const compareToFirstPassword = (rule, value, callback) => {
    const form = props.form;
    if (value && value !== form.getFieldValue('newPwd')) {
      callback('两次密码不一致')
    }
    callback()
  }

  // 提交函数
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if(!err){
        const formData = {};
        formData.user_id = user_id;
        formData.newPwd = values.newPwd;
        formData.phonenumber = phonenumber;
        RESETPWD(formData).then((res, err) => {
          if (res && res.status === 200) {
            const { history } = props;
            // 重设密码后跳转至登陆界面
            message.success(res.message);
            history.push('/login');
          }
          else {
            message.error(err);
          }
        })
      } else{
        message.error('表单格式输入有误');
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit} {...formItemLayout} >
      <FormItem label="请输入新密码">
        {getFieldDecorator('newPwd', {
          rules: [
            {
              required: true,
              message: '密码不能为空',
            },
            {
              min: 6,
              max: 16,
              message: '密码长度必需大于6位,小于16位',
            },
            {
              pattern: /^\w+$/g,
              message: '密码不能出现非法字符',
            },
            {
              validator: validateToNextPassword,
            },
          ],
        })(<Input
          type="password"
          placeholder="请输入新密码"
          style={{
            color: '#666'
          }}
        />)}
      </FormItem>
      <FormItem label="再次输入新密码">
        {getFieldDecorator('confirm', {
          rules: [
            {
              required: true,
              message: '密码不能为空',
            },
            {
              validator: compareToFirstPassword,
            },
          ],
        })(
          <Input
            type="password"
            placeholder="确认密码"
            onBlur={handleConfirmBlur}
            style={{
              color: '#666'
            }}
          />
        )}
      </FormItem>
      <FormItem wrapperCol={{
        xs: { span: 24, offset: 0 },
        sm: { span: 24, offset: 0 },
      }}>
        <Tooltip title="重置密码后，将跳到登录页你可以用你的新密码登录">
          <Button className="updateButton" htmlType="submit" >
            确定修改
          </Button>
        </Tooltip>
      </FormItem>
    </Form>
  )
}

export default withRouter(Form.create()(ResetPwd));
