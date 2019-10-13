/**
 * @ Author: Gszs
 * @ Create Time: 2019-10-14 00:14:23
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-14 01:23:43
 * @ 文件解释: 专门用于显示倒计时验证码的组件
 */

import React,{useState, useEffect} from 'react';
import { Form, Button, Input, message} from 'antd';
import { GETEMAILCODE } from '@/axios'

const HasVerifyCode = props => {

  const { getFieldDecorator } = props.form;
  const FormItem = Form.Item;

  let [countDownTime, setCountDownTime] = useState(60);

  // 重新获取邮件验证码
  const getEmailCode = e => {
    e.preventDefault();
    GETEMAILCODE(props.receiveEmail);
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
    <Form className="formStyle">
      <FormItem label="注册时的邮箱">
        {getFieldDecorator('email', {
          initialValue: props.receiveEmail,
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
      <FormItem>
        {getFieldDecorator('verifyCode', {
          rules: [
            {
              required: true,
              message: '验证码不能为空',
            }
          ],
        })(
          <>
            <Input type="text" placeholder="请输入邮箱验证码" className="hasVerifyCode" />
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
          </>
        )}
      </FormItem>
      <FormItem>
        {/* TODO: htmlType="submit配合onSubmit={handleSubmit}"会自动提交表单 */}
        <Button className="sendEmail" htmlType="submit" >
          下一步
        </Button>
      </FormItem>
    </Form>
  )
}

export default Form.create()(HasVerifyCode);

