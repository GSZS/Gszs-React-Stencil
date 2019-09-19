/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-04 16:35:47
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-07-05 17:29:00
 * @ 文件解释: 暂时使用表单模态框公共组件
 */


import React, { Component } from 'react';
import { Form, Icon, Input, Select, message } from 'antd';
import {FINDALLROLE} from '../../../axios/index'

const FormItem = Form.Item;
class NormalLoginForm extends Component {
 
  constructor(props){
    super(props)
    this.state = {
      roleArr : []
    }

    // 请求数据
    FINDALLROLE(0).then(res => {
      if(res && res.status === 200){
        this.setState({
          roleArr: res.data
        })
      }else{
        message.error(res.message);
      }
    })
  }

  render() {

    const { getFieldDecorator } = this.props.form;
    const Option = Select.Option;
    const {roleArr} = this.state

    return (
      <Form className="login-form">
        <FormItem label="登录名">
          {getFieldDecorator('userName', {
            rules: [
              { required: true, 
                message: '登录名不能为空' 
              },
              {
                pattern: /^\w+$/g,
                message: '不允许输入非法字符'
              }
            ],
          })(
            <Input 
              prefix={
                <Icon type="user" 
                  style={{ color: 'rgba(0,0,0,.25)' }} 
                />
              } 
              placeholder="请输入登录名" 
            />
          )}
        </FormItem>
        <FormItem label="密码">
          {getFieldDecorator('password', {
            rules: [
              { required: true, 
                message: '密码不能为空' 
              },
              {
                pattern: /^\w+$/g,
                message: '不允许输入非法字符'
              }
            ],
          })(
            <Input 
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
              type="password" 
              placeholder="请输入密码" 
            />
          )}
        </FormItem>
        <FormItem label="手机号码">
        {getFieldDecorator('mobile', {
            rules: [
              { required: true, 
                message: '手机号码不能为空' 
              },
              {
                pattern: /^1(3|4|5|7|8)\d{9}$/g,
                message: '手机号码格式有误'
              }
            ],
          })(
            <Input 
              prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} 
              type="text"
              placeholder="请输入手机号码" 
            />
          )}
        </FormItem>
        <FormItem label="邮箱">
        {getFieldDecorator('email', {
            rules: [
              { required: true, 
                message: '邮箱不能为空'
              },
              {
                pattern: /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
                message: '邮箱格式有误'
              }
            ],
          })(
            <Input 
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} 
              type="mail"
              placeholder="请输入邮箱" 
            />
          )}
        </FormItem>
        <FormItem label="真实姓名">
        {getFieldDecorator('realName', {
            rules: [
              { required: true, 
                message: '真实姓名不能为空'
              }
            ],
          })(
            <Input 
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
              type="text"
              placeholder="请输入真实姓名"
            />
          )}
        </FormItem>
        <FormItem label="请选择角色">
        {getFieldDecorator('roleName', {
            rules: [
              { required: true, 
                message: '角色不能为空'
              }
            ],
          })(
            <Select placeholder="请选择角色">
              {
                roleArr ? (roleArr.map((item, index) => {
                  return(
                    <Option key={index} value={item.key}>
                      {item.roleDesc}
                    </Option>
                  )
                })) : (
                  message.error('获取角色数据错误!')
                )
              }
            </Select>
          )}
        </FormItem>
      </Form>
    );
  }
}
 
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
 
export default WrappedNormalLoginForm;