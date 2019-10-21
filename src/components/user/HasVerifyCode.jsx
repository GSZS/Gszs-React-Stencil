/**
 * @ Author: Gszs
 * @ Create Time: 2019-10-14 00:14:23
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-14 20:23:06
 * @ 文件解释: 专门用于显示倒计时验证码的组件
 */

import React, { useState, useEffect } from 'react';
import { Form, Button, Input, message } from 'antd';
import { SETEMAIL, FINDPWD } from '@/axios';
import ResetPwd from './ResetPwd';

const HasVerifyCode = props => {

  const { getFieldDecorator } = props.form;
  const FormItem = Form.Item;
  const [ displayResetPwd, setDisplayResetPwd ] = useState(true);

  let [countDownTime, setCountDownTime] = useState(60);

  // 重新获取邮件验证码
  const getEmailCode = e => {
    e.preventDefault();
    SETEMAIL(props.email).then(res => {
      if (res && res.status === 200) {
        message.success('找回密码验证码已发送至你的注册邮箱');
      } else {
        message.error(res.message);
      }
    })
  }

  // 发送邮件
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let formData = {};
        Object.keys(values).map((cv, index) => {
          formData[cv] = values[cv];
        })
        FINDPWD(formData).then(res => {
          if (res && res.status === 200) {
            setDisplayResetPwd(!displayResetPwd)
          } else {
            message.error(res.message)
          }
        })
      } else {
        message.error('表单有误');
      }
    })
  }

  // 60s倒计时
  const startCountDownTime = () => {
    const _time = setInterval(() => {
      if (countDownTime === 0) {
        clearInterval(_time);
      }
      setCountDownTime(countDownTime--)
    }, 1000)
  };
  useEffect(() => {
    startCountDownTime();
  }, [])

  return (
    displayResetPwd ? 
      (<Form className="formStyle" onSubmit={handleSubmit}>
        <FormItem label="注册时的邮箱">
          {getFieldDecorator('email', {
            initialValue: props.email,
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
        {/* 验证码 */}
        <FormItem className="inputCode">
          {getFieldDecorator('verifyCode', {
            rules: [
              {
                required: true,
                message: '验证码不能为空',
              }
            ],
          })(<Input type="text" placeholder="请输入邮箱验证码" className="hasVerifyCode" />)}
        </FormItem>
        {/* 60s倒计时 */}
        <Button className="countDownCode"
          style={
            countDownTime == 0 ? {
              cursor: 'point'
            } : {
                opacity: .5,
                pointerEvents: 'none',
              }
          }
          onClick={getEmailCode}
        >
          {countDownTime == 0 ? '重新获取邮箱验证码' : `${countDownTime}秒后可重发`}
        </Button>
        <FormItem className="sendEmailButton_2">
          {/* TODO: htmlType="submit配合onSubmit={handleSubmit}"会自动提交表单 */}
          <Button className="sendEmail_2" htmlType="submit" >
            下一步
          </Button>
        </FormItem>
      </Form>)
      :
      (
        <ResetPwd />
      )
  )
}

export default Form.create()(HasVerifyCode);

