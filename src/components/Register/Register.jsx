/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-03 10:07:18
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-11 10:34:14
 * @ 文件解释: 注册模块
 */


import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import CanvasBox from '../canvasBackground/CanvasBg';
import LogoImg from '../../style/imgs/logo.png';
import Vcode from 'react-vcode';
import tools from '../../utils/tools';
import '../../style/login.less';

const FormItem = Form.Item;

class Register extends React.Component {

  // label , input布局
  formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  // 验证码改变时触发
  onVcodeChange(code) {
    const form = this.props.form;
    form.setFieldsValue({
      vcode: code // 开发模式自动赋值验证码，正式环境，这里应该赋值''
    });
    this.setState({
      codeValue: code
    });
  }

  handleSubmit = e => {};

  // 发送手机验证码
  sendSmsCode = () => {
    // sendSms()
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-form">
          {/* canvas效果 */}
          <div className="canvasBox">
            <CanvasBox row={12} col={8} />
          </div>
          <Form onSubmit={this.handleSubmit} style={{ maxWidth: '300px' }} className="formStyle" >
            <div className="login-logo">
              <span className="login-name">
                <img src={LogoImg} alt="logo" />
                <span>Gszs-React-Register</span>
              </span>
            </div>
            <FormItem {...this.formItemLayout} className="userStyle" >
              {getFieldDecorator('phoneNumber', {
                rules: [{ required: true, message: '请输入手机号码!' }]
              })(
                <Input
                  prefix={<Icon type="mobile" style={{ fontSize: 13 }} />}
                  placeholder="请输入手机号码"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("vcode", {
                rules: [
                  {
                    validator: (rule, value, callback) => {
                      const v = tools.trim(value);
                      if (v) {
                        if (v.length > 4) {
                          callback("验证码为4位字符");
                        } else if (
                          v.toLowerCase() !==
                          this.state.codeValue.toLowerCase()
                        ) {
                          callback("验证码错误");
                        } else {
                          callback();
                        }
                      } else {
                        callback("请输入验证码");
                      }
                    }
                  }
                ]
              })(
                <Input
                  className="inputCode"
                  size="large"
                  id="vcode" // 为了获取焦点
                  placeholder="请输入验证码"
                  onPressEnter={() => this.onSubmit()}
                />
              )}
              <Vcode
                height={40}
                width={150}
                onChange={code => this.onVcodeChange(code)}
                className="vcode"
                options={{
                  lines: 16
                }}
              />
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('VerificationCode', {
                  rules: [{ required: true, message: '请输入验证码!' }]
                })(
                  <Input
                    className="inputCode"
                    size="large"
                    placeholder="请输入手机验证码"
                  />
                )
              }
              <Button 
                height={40}
                width={150}
                className="vcode"
                onClick = {this.sendSmsCode}
              >
                发送验证码
              </Button>
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                    placeholder="请输入密码"
                  />
                )
              }
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: '100%' }}
              >
                注册
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(Register);