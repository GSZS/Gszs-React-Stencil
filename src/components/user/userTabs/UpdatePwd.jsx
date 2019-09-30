/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-30 15:37:30
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-30 16:23:23
 * @ 文件解释: 更改密码UI组件
 */

import React,{useState, useEffect} from 'react';
import { Form, Input, Button, message } from 'antd';

const UpdatePwd = props => {

  const [update, setUpdate] = useState(false);
  const [confirmDirty, setConfirmDirty] = useState(false);
  const { getFieldDecorator } = props.form;
  const FormItem = Form.Item;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 19, offset: 1 },
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
		if(value && value !== form.getFieldValue('password')){
				callback('两次密码不一致')
		}
		callback()
  }
  
  // 提交函数
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if(!err){
        console.log('Received values of form: ', values);
      }else{
        message.error('表单有误')
      }
    })
  }

  return (
    <Form
      onSubmit={handleSubmit}
      {...formItemLayout}
    >
      <FormItem label="请输入原密码">
        {getFieldDecorator('oldPwd', {
          rules: [
            {
              required: true,
              message: '密码不能为空',
            }
          ],
        })(<Input
          type="password"
          placeholder="请输入原始密码"
          style={{
            width: '25%',
            color: '#666'
          }}
        />)}
      </FormItem>
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
            width: '25%',
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
              width: '25%',
              color: '#666'
            }}
          />
        )}
      </FormItem>
      <FormItem>
        <Button type="success">
          确定修改
        </Button>
      </FormItem>
    </Form>
  )
}

export default Form.create()(UpdatePwd);