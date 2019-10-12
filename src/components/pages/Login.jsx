/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-07-01 15:49:46
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-12 16:32:18
 * @ 文件解释: 登录页面
 */

import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Tabs } from 'antd';
import { aes_128_cbc_key, aes_128_cbc_iv } from '@/constants';
import { cryptoTools } from '@/utils/utils';
import LogoImg from '@/assets/image/logo.png';
import Vcode from 'react-vcode';
import tools from '@/utils/tools';
import cookies from 'react-cookies';
import RegisterContainer from '@/containers/RegisterContainer';
import { SVGICON } from '@/components/svg/svgIcon';
import '@/style/components/login.less';


const FormItem = Form.Item;
const { TabPane } = Tabs;

class Login extends React.Component {

  state = {
    key: 1
  }

  componentDidUpdate() {
    const { loginData, history } = this.props;
    if (loginData.newUserData) {
      this.props.saveUserInfo(loginData); // 存localStore
      history.push('/');
    }
  }

  // label , input布局
  formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  // 切换Tabs
  handleChange = key => {
    this.setState({
      key,
    })
  }

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

  // 第三方
  handleOAuth() { }

  handleSubmit = e => {
    // 提交到后台
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { remember, username, password } = values;
        this.props.loginAction(remember, username, password); // 提交登陆密码
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-form">
          {/* canvas效果-1 */}
          {/* <canvas id="sakura" /> */}

          {/* canvas效果-2 */}
          {/* <div className="canvasBox">
            <CanvasBox row={12} col={8} />
          </div> */}
          {/* 核心内容盒子 */}
          <div className="middleBox">
            <div className="login-logo">
              <span className="login-name">
                <img src={LogoImg} alt="logo" />
                <span className="projectName" >项目管理系统</span>
              </span>
              {/* <PwaInstaller /> */}
            </div>
            <div className="formBox">
              <Tabs defaultActiveKey={this.state.key} onChange={this.handleChange} >
                <TabPane tab="欢迎登录" key={1}>
                  <Form onSubmit={this.handleSubmit} className="formStyle" >
                    <FormItem className="userStyle" label="用户名 / 邮箱地址">
                      {getFieldDecorator('username', {
                        initialValue: cookies.load('authCookie') ? cryptoTools.deSign_aes_128_cbc(cookies.load('authCookie').username, aes_128_cbc_key, aes_128_cbc_iv) : '',
                        rules: [{ required: true, message: '请输入用户名!' }]
                      })(
                        <Input
                          prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                          placeholder="请输入账号"
                        />
                      )}
                    </FormItem>
                    <FormItem className="passwordStyle" label="密码">
                      {getFieldDecorator('password', {
                        initialValue: cookies.load('authCookie') ? cryptoTools.deSign_aes_128_cbc(cookies.load('authCookie').password, aes_128_cbc_key, aes_128_cbc_iv) : '',
                        rules: [{ required: true, message: '请输入密码!' }]
                      })(
                        <Input
                          prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                          type="password"
                          placeholder="请输入"
                        />
                      )}
                    </FormItem>
                    <FormItem label="验证码">
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
                      {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                      })(<Checkbox>记住我</Checkbox>)}

                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        style={{ width: '100%' }}
                      >
                        登录
                      </Button>
                    </FormItem>
                  </Form>
                </TabPane>
                <TabPane tab="注册" key={2}>
                  <RegisterContainer history={this.props.history} />
                </TabPane>
              </Tabs>
              {/* 第三方登录 */}
              <div className="third-login">
                
                <div className="third-login-name">
                  <span>社交账号登录</span>
                </div>
                <hr />
                <div className="third-login-content">
                  {/* Github */}
                  <a href="javascript:;" className="githubAddress" onClick={this.handleOAuth}>
                    <SVGICON type="icon-github" /> Github
                  </a>

                  {/* QQ */}
                  <a href="javascript:;" className="githubAddress" onClick={this.handleOAuth}>
                    <SVGICON type="icon-qq" /> QQ
                  </a>

                  {/* 微信 */}
                  <a href="javascript:;" className="githubAddress" onClick={this.handleOAuth}>
                    <SVGICON type="icon-weixin" /> 微信
                  </a>

                  {/* 微博 */}
                  <a href="javascript:;" className="githubAddress" onClick={this.handleOAuth}>
                    <SVGICON type="icon-weibo" /> 微博
                  </a>  
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create()(Login);