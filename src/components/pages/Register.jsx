/**
 * @ Author: Gszs
 * @ Create Time: 2019-10-02 12:56:03
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-02 16:38:37
 * @ 文件解释: 注册组件
 */

import React, { useState, useEffect } from 'react';
import {
  Button,
  Form,
  Input,
  message
} from 'antd';

const FormItem = Form.Item;

// Register注册
const Register = props => {

  const [confirmDirty, setConfirmDirty] = useState(false);
  const [update, setUpdate] = useState(false);

  // 注册
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.Register({
          nickname: values.nickname,
          username: values.username,
          mobile: values.mobile,
          email: values.email,
          password: values.password
        })
      } else {
        message.error('表单有误');
      }
    });
  };

  // 确认密码
  const compareToFirstPassword = (rule, value, callback) => {
    const form = props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不一致')
    }
    callback()
  }

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

  // 注册成功后返回登录界面
  const handleCancle = e => {
    e.preventDefault();
    const { history } = props;
    history.push('/');
  }


  const { getFieldDecorator } = props.form;

  return (
    <div>
      <div className="registerBox">
        <div style={{ textAlign: 'left' }} >
          <Form onSubmit={handleSubmit}>
            <FormItem label="昵称">
              {getFieldDecorator('nickname', {
                rules: [
                  {
                    required: true,
                    message: '昵称不能为空',
                  },
                ],
              })(<Input type="text" placeholder="请输入你的昵称" />)}
            </FormItem>
            <FormItem label="手机号">
              {getFieldDecorator('mobile', {
                rules: [
                  {
                    required: true,
                    message: '手机号/账号不能为空',
                  },
                  {
                    pattern: /^1(3|5|7|8)\d{9}$/g,
                    message: '手机格式有误',
                  },
                ],
              })(<Input type="text" placeholder="请输入手机号/账号" />)}
            </FormItem>
            <FormItem label="邮箱">
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: '邮箱号码',
                  },
                  {
                    pattern: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
                    message: '邮箱格式有误',
                  },
                ],
              })(<Input type="text" placeholder="请输入邮箱" />)}
            </FormItem>
            <FormItem label="密码">
              {getFieldDecorator('password', {
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
              })(<Input type="password" placeholder="请输入密码" />)}
            </FormItem>
            <FormItem label="确认密码">
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
                />
              )}
            </FormItem>
            <FormItem style={{ textAlign: 'center' }}>
              <Button
                icon="close"
                size="small"
                onClick={handleCancle}
                className="cancelButton"
              >
                <span>取消</span>
              </Button>
              <Button
                icon="check"
                size="small"
                htmlType="submit"
                onClick={handleSubmit}
                className="confirmButton"
              >
                <span>确认</span>
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Form.create()(Register)