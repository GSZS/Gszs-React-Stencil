import React, { Component } from 'react';
import Routes from './routes';
import DocumentTitle from 'react-document-title'; // 根据不同的路由修改文档的title
import SiderCustom from './components/SiderCustom';
import HeaderCustomContainer from './containers/HeaderCustomContainer'
import { Layout, notification, Icon } from 'antd';
import { ThemePicker } from './components/widget';

const { Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      title: '',
    };
    this.roles = JSON.parse(localStorage.getItem('roles'));
    // 响应屏幕尺寸
    this.getClientWidth();
    window.onresize = () => {
      this.getClientWidth();
    };
  }

  componentDidMount() {
    const openNotification = () => {
      notification.open({
        message: `你好`,
        description: (
          <div>
            <span>欢迎登录</span>
          </div>
        ),
        icon: <Icon type="smile-circle" style={{ color: 'red' }} />,
        duration: 0,
      });
      // 第一次打开时弹出通告
      localStorage.setItem('isFirst', JSON.stringify(true));
    };
    const isFirst = JSON.parse(localStorage.getItem('isFirst'));
    !isFirst && openNotification();
  }

  getClientWidth = () => {
    // 获取当前浏览器宽度并设置responsive管理响应式
    const clientWidth = window.innerWidth;
    clientWidth <= 992 ? this.props.isMobile(true) : this.props.isMobile(false)
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { title } = this.state;
    return (
      <DocumentTitle title={title}>
        <Layout>
          {/* 侧边框 */}
          {!this.props._isMobile && <SiderCustom collapsed={this.state.collapsed} />}
          <ThemePicker />
          {/* 主题区域 */}
          <Layout style={{ flexDirection: 'column' }}>
            {/* 头部 */}
            <HeaderCustomContainer
              toggle={this.toggle}
              collapsed={this.state.collapsed}
              // user={this.roles.title || '' }
              user = {this.roles ? this.roles.title : ''} // 如果是第三方登录则需要处理
            />
            {/* 内容 */}
            <Content
              style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}
            >
              <Routes auth={this.roles} />
            </Content>
            {/* 脚部 */}
            <Footer style={{ textAlign: 'center' }}>
              我是脚部
            </Footer>
          </Layout>
        </Layout>
      </DocumentTitle>
    );
  }
}
export default App
