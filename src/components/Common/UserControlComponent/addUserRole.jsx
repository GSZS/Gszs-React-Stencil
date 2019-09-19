/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-10 10:28:10
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-10 11:41:23
 * @ 文件解释: 新增角色管理
 */

import React, { Component } from 'react';
import { Form, Icon, Input, Select, message } from 'antd';
import {FINDALLAUTH} from '../../../axios/index'

const FormItem = Form.Item;
class addUserRole extends Component {
 
  constructor(props){
    super(props)
    this.state = {
      roleArr : []
    }

  this.handleChange = (key) => {
    // 请求数据
      FINDALLAUTH(key).then(res => {
        if( res && res.status === 200){
          this.setState({
            roleArr: res.data
          })
        }else{
          message.error(res.message);
        }
      })
    }
  }

  render() {

    const { getFieldDecorator } = this.props.form;
    const Option = Select.Option;
    const {roleArr} = this.state

    return (
      <Form className="login-form">
        <FormItem label="角色名">
          {getFieldDecorator('roleName', {
            rules: [
              { required: true, 
                message: '角色名不能为空' 
              },
            ],
          })(
            <Input 
              prefix={
                <Icon type="user" 
                  style={{ color: 'rgba(0,0,0,.25)' }} 
                />
              } 
              placeholder="请输入角色名" 
            />
          )}
        </FormItem>
        <FormItem label="角色描述">
          {getFieldDecorator('roleNameDesc', {
            rules: [
              { required: true, 
                message: '角色描述不能为空' 
              },
            ],
          })(
            <Input 
              prefix={
                <Icon type="user" 
                  style={{ color: 'rgba(0,0,0,.25)' }} 
                />
              } 
              placeholder="请输入角色描述" 
            />
          )}
        </FormItem>
        <FormItem label="请选择添加权限所属范围">
          {
            getFieldDecorator('selectScope', {
              rules: [
                { required: true, 
                  message: '权限所属范围不能为空'
                }
              ],  
            })(
              <Select 
                placeholder="请选择权限所属范围"
                onChange = {this.handleChange}
              >
                <Option key="前台" value="1">
                  前台
                </Option>
                <Option key="后台" value="0">
                  后台
                </Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="请选择权限">
          {getFieldDecorator('selectAuth')(
              <Select 
                placeholder="请选择权限"
                mode="multiple"
              >
                {
                  roleArr ? (roleArr.map((item, index) => {
                    return(
                      <Option key={index} value={item.key}>
                        {item.itemDesc}
                      </Option>
                    )
                  })) : (
                    message.error('获取权限数据错误!')
                  )
                }
              </Select>
            )}
        </FormItem>
      </Form>
    );
  }
}
 
const WrappedNormalLoginForm = Form.create()(addUserRole);
 
export default WrappedNormalLoginForm;

