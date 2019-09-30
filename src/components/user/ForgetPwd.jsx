/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-30 19:56:14
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-30 21:34:19
 * @ 文件解释: 忘记密码/找回密码UI组件
 */

import React from 'react';
import {Row, Col, Button, Form, Input, message} from 'antd';
import '@/style/components/users/forgetPwd.less';
import {Link} from 'react-router-dom';

const ForgetPwd = props => {

  const { getFieldDecorator } = props.form;
  const FormItem = Form.Item;

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

  return(
    <div className="forgetPwdStyle">
      <div className="headerContent">
        <img src="../../assets/image/logo.png" alt="404" />
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
              <Form onSubmit={handleSubmit}>
                <FormItem label="注册时的邮箱">
                  {getFieldDecorator('oldPwd', {
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
                <span>如已经重置好了密码,请点击<Link to="/login">登录</Link></span>
              </div>
            </div>
          </Col>  
        </Row>
      </div>
    </div>
  )
}

export default Form.create()(ForgetPwd)



