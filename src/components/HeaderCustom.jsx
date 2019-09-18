/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-02 21:36:36
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-11 22:14:52
 * @ 文件解释: 导航条头部使用者介绍
 */

import React, { Component } from 'react';
import screenfull from 'screenfull';
import avater from '../style/imgs/Qiong.jpeg';
import SiderCustom from './SiderCustom';
import { Menu, Icon, Layout, Popover } from 'antd';
import { withRouter } from 'react-router-dom';
import { PwaInstaller } from './widget';
import { PublicModal } from './publicComponents/_Modal';
import { ModalComponents } from './Common/ModalComponents';
import { SVGICON } from './svg/svgIcon';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends Component {
  state = {
    user: '',
    visible: false,
    modalOpen: false,
    _Modalvisible: false,
  };
  screenFull = () => {
    if (screenfull.enabled) {
      screenfull.request();
    }
  };
  // 菜单点击
  menuClick = e => {
    if (e.key === 'userSetting') {
      this.setState({
        modalOpen: true,
      });
    }
  };

  // 退出弹出模态框
  logout = () => {
    this.setState({
      _Modalvisible: true,
    });
  };

  // 点击模态框确认触发函数
  handleModalOk = () => {
    this.setState({
      _Modalvisible: false,
    });
    this.props.logout((()=>{this.props.history.push('/login')}));
  };

  popoverHide = () => {
    this.setState({
      visible: false,
    });
  };
  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  render() {
    // 传递给公共对话框的参数
    const modalConfig = {
      title: '修改头像',
      content: 'Hello world',
      controlModal: this.state.modalOpen,
      contentType: 'upload',
    };
    // const responsive = {data: {}}, path} = this.props;
    return (
      <React.Fragment>
        <PublicModal modalConfig={modalConfig} />
        {/* 加载模态框公共组件 */}
        <ModalComponents
          Modaltitle="提示"
          Modalvisible={this.state._Modalvisible}
          ModalokText="确定"
          ModalcancelText="取消"
          ModalonCancel={() => {
            this.setState({
              _Modalvisible: false,
            });
          }}
          ModalonOk={this.handleModalOk}
          width="700"
        >
          <span
            style={{
              fontSize: '20px',
            }}
          >
            <SVGICON
              style={{
                fontSize: '25px',
                padding: '0 20px',
              }}
              type="icon-jinggaochenghuang"
            />
            确定注销并退出系统吗?
          </span>
        </ModalComponents>
        <Header className="custom-theme header">
          {this.props._isMobile
            ? <Popover
                content={
                  // <SiderCustom path={path} popoverHide={this.popoverHide} />
                  <SiderCustom popoverHide={this.popoverHide} />
                }
                trigger="click"
                placement="bottomLeft"
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}
              >
              <Icon type="bars" className="header__trigger custom-trigger" />
            </Popover>
            : <Icon
                className="header__trigger custom-trigger"
                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.props.toggle}
              />
            }
          <Menu
            mode="horizontal"
            style={{ lineHeight: '64px', float: 'right' }}
            onClick={this.menuClick}
          >
            <Menu.Item key="pwa">
              <PwaInstaller />
            </Menu.Item>
            <Menu.Item key="full" onClick={this.screenFull}>
              <Icon type="arrows-alt" onClick={this.screenFull} />
            </Menu.Item>
            <SubMenu
              title={
                <span className="avatar">
                  <img src={avater} alt="头像" />
                  <i className="on bottom b-white" />
                </span>
              }
            >
              <MenuItemGroup title="用户中心">
                <Menu.Item key="setting:1">
                  你好 - {this.props.user}
                </Menu.Item>
                <Menu.Item key="logout">
                  <span onClick={this.logout}>退出登录</span>
                </Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          </Menu>
        </Header>
      </React.Fragment>
    );
  }
}
export default withRouter(HeaderCustom)
