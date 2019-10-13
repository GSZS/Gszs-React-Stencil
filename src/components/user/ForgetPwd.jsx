/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-30 19:56:14
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-13 12:05:53
 * @ 文件解释: 忘记密码/找回密码UI组件
 */

import React from 'react';
import {Row, Col, Button, Form, Input, message} from 'antd';
import '@/style/components/users/forgetPwd.less';
import {withRouter} from 'react-router-dom';
import logo from '@/assets/image/logo.png';
import { phonenumber } from '@/constants/settingConstant'
import { FINDPWD } from '@/axios'

const ForgetPwd = props => {

  const { getFieldDecorator } = props.form;
  const FormItem = Form.Item;

  // // 发送邮件
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if(!err){
        message.success('找回密码验证码已发送至你的注册邮箱');
        const formData = {};
        formData.email = values.email;
        FINDPWD(formData).then((res, err) => {
          if(res && res.status === 200){
            message.success(`请查阅你的: ${values.email} 邮箱`);
          }else{
            message.error(res.message);
          }
        })
      }else{
        message.error('表单有误');
      }
    })
  }

  // 重置密码后点击跳转到登录清除localstore保存的信息
  const handleClick = e => {
    e.preventDefault();
    const { history } = props;
    props.logout( phonenumber, (()=>{history.push('/login')}));    
  }
  

  return(
    <div className="forgetPwdStyle">
      <div className="headerContent">
        <img src={logo} alt="404" />
      </div>
      <div className="middleContent">
        <Row>
          <Col span={12}>
            <div className="leftContentHeader">
              Gszs项目管理系统私人版
            </div>
            <div className="leftContent">
              基于事项驱动和敏捷开发的项目管理工具，参考Jira和Gitlab优秀特性发展而来。
              适用于互联网团队进行高效协作和敏捷开发，交付极致卓越的产品
            </div>
          </Col>  
          <Col span={12}>
            <div className="rightContent">
              <div className="rightContent-1">
                <span>找回密码</span>
              </div>
              <Form onSubmit={handleSubmit} className="formStyle">
                <FormItem label="注册时的邮箱">
                  {getFieldDecorator('email', {
                    rules: [
                      {
                        required: true,
                        message: '邮箱不能为空',
                      }
                    ],
                  })(<Input
                    type="text"
                    placeholder="请输入邮箱账号"
                  />)}
                </FormItem>
                <FormItem>
                  <Button className="sendEmail" htmlType="submit">
                    发送重置邮件
                  </Button>
                </FormItem>
              </Form>
              <div>
                <span>如已经重置好了密码,请点击
                  <a style={{color: '#1b69b6'}} onClick={handleClick}>
                    &nbsp;&nbsp;登录
                  </a>
                </span>
              </div>
            </div>
          </Col>  
        </Row>
      </div>
    </div>
  )
}

export default withRouter(Form.create()(ForgetPwd))



