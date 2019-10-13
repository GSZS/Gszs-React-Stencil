/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-30 19:56:14
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-14 01:13:38
 * @ 文件解释: 忘记密码/找回密码UI组件
 */

import React, { useState } from 'react';
import { Row, Col, Button, Form, Input, message } from 'antd';
import '@/style/components/users/forgetPwd.less';
import { withRouter } from 'react-router-dom';
import logo from '@/assets/image/logo.png';
import { phonenumber } from '@/constants/settingConstant'
import { SETEMAIL } from '@/axios'
import HasVerifyCode from './HasVerifyCode';

const ForgetPwd = props => {

  const { getFieldDecorator } = props.form;
  const FormItem = Form.Item;

  let [receiveEmail, setReceiveEmail] = useState(''); // 选择接收验证码的邮箱
  let [displayForm, setDisplayForm] = useState(true) // 默认隐藏倒计时再次发送验证码

  // 发送邮件
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        setDisplayForm(!displayForm);
        setReceiveEmail(values.email);
        SETEMAIL(values.email).then(res => {
          if (res && res.status === 200) {
            message.success('找回密码验证码已发送至你的注册邮箱');
          } else {
            message.error(res.message);
          }
        })
      } else {
        message.error('表单有误');
      }
    })
  }

  // 重置密码后点击跳转到登录清除localstore保存的信息
  const handleClick = e => {
    e.preventDefault();
    const { history } = props;
    props.logout(phonenumber, (() => { history.push('/login') }));
  }

  return (
    <div className="forgetPwdStyle">
      <div className="headerContent">
        <img src={logo} alt="404" />
      </div>
      <hr />
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
              {
                displayForm ? 
                (<Form className="formStyle" onSubmit={handleSubmit} >
                  <FormItem label="注册时的邮箱">
                    {getFieldDecorator('email', {
                      initialValue: receiveEmail,
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
                    <Button className="sendEmail" htmlType="submit" >
                      下一步
                    </Button>
                  </FormItem>
                </Form>)
                :
                (
                  <HasVerifyCode email={receiveEmail} />
                )
              }
              <div>
                <span>如已经重置好了密码,请点击
                  <a style={{ color: '#1b69b6' }} onClick={handleClick}>
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



