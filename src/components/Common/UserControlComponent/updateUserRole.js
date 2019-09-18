/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-10 14:12:40
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-21 14:49:09
 * @ 文件解释: 修改用户对应的角色权限
 */

import React, {Component, Fragment} from 'react';
import {Form, Empty, Select, message, Modal, Button} from 'antd';
import {QUERYITEM, QUERYHASNOTITEM, FINDALLAUTH, ROLEITEMADD} from '../../../axios/index';

const FormItem = Form.Item;
const Option = Select.Option;

// 没有权限时调用这个组件查询应该要添加哪些权限
class RoleDetail extends Component {
  constructor (props) {
    super (props);
    const queryKey = this.props.selectRowKeys,
    selectOperatorType = this.props.selectOperatorType;
    this.state = {
      NoAuthData: []
    };

    // 这个接口是当该角色没有权限时点击添加权限获取数据的接口
    QUERYHASNOTITEM (queryKey, selectOperatorType).then (res => {
      if (res && res.status === 200) {
        this.setState ({
          NoAuthData: res.data,
        });
      } else {
        if (res) {
          message.error (res.message);
        }
      }
    });
  }
  
  render () {
    const {getFieldDecorator} = this.props.form;
    const {NoAuthData} = this.state;
    return(
      <Fragment>
        {
          NoAuthData.length !== 0 ? (
          <Form className="noAuthFormBox">
            <FormItem label="添加权限">
              {getFieldDecorator ('NoAuthform') (
                <Select 
                  mode="multiple"
                >
                  {NoAuthData.map ((item, index) => {
                    return (
                      <Option 
                        key={index} 
                        value={item.key}
                      >
                        {item.itemDesc}
                      </Option>
                    );
                  })}
                </Select>
              )}
            </FormItem>
          </Form>) : <Empty description={<span>数据正在加载中...</span>} />
        }
        
      </Fragment>
    )
  }
}

class addUserRole extends Component {

  constructor(props){
    super(props);
    this.state = {
      roleArr: [],
      visible: false,
      _selectRowKeys: [],
      allRoleData: [], // 所有权限接口
    };
    
    // 这个接口是获取该角色应有的权限
    QUERYITEM (this.props.selectRowKeys, this.props.selectOperatorType).then (res => {
      if (res && res.status === 200) {
        this.setState ({
          roleArr: res.data,
        });
      } else {
        if (res) {
          message.error (res.message);
        }
      }
    });
  }

  componentWillReceiveProps(newProps){
    if(this.props.selectRowKeys.join() !== newProps.selectRowKeys.join()){
        const __selectRowKeys = newProps.selectRowKeys,
              __selectOperatorType = newProps.selectOperatorType;
        QUERYITEM (__selectRowKeys, __selectOperatorType).then (res => {
          if (res && res.status === 200) {
              this.setState ({
                roleArr: res.data,
              });
          } else {
            if (res) {
              this.setState ({
                roleArr: res.data,
              });
              message.error (res.message);
            }
          }
        });
      }
    }


  handleClick = e => {
    e.preventDefault ();
    this.setState ({
      visible: !this.state.visible,
    });
  };

  // 触发显示SingleComponent组件的模态框
  handleOk = (updateUserRole, roleId) => {
    this.setState ({
      visible: !this.state.visible,
    });
    updateUserRole.current.validateFields((err, values) => {
      if(!err){
        let dataConfig = {
          roleId: roleId.join(),
          itemId: values.NoAuthform.join(',')
        }
        ROLEITEMADD(dataConfig).then(res => {
          if(res && res.status === 200){
            message.success(res.message)
          }
        })
      }else{
        message.error('表单格式有误!')
      }
    })
  };

  handleCancel = () => {
    this.setState ({
      visible: !this.state.visible,
    });
  };
  
  // 获得焦点的时候的回调,该接口是用于获取所有权限
  handleFocus = operate => {
    FINDALLAUTH(operate).then(res => {
      if(res && res.status === 200){
        this.setState({
          allRoleData: res.data
        })
      }else{
        if(res){
          message.error(res.message)
        }else{
          message.error('非正常错误,请联系开发人员处理!')
        }
      }
    })
  }

  render () {
    var updateUserRole = React.createRef();
    // 获取已有的权限
    const {getFieldDecorator} = this.props.form;
    var existAuth = [];
    if (this.state.roleArr && this.state.roleArr.length !== 0) {
      this.state.roleArr.map (item =>
        existAuth.push (item['itemDesc'])
      );
    }
    const {roleArr, visible, allRoleData} = this.state;

    return (
      <Fragment>
        <Modal
          title="添加角色权限"
          visible={visible}
          okText="确认添加"
          cancelText="取消"
          onOk={e => {
            e.preventDefault ();
            this.handleOk (updateUserRole, this.props.selectRowKeys);
          }}
          onCancel={e => {
            e.preventDefault ();
            this.handleCancel ();
          }}
        >
          {/* 调用这个组件 */}
          <SingleComponent
            selectRowKeys={this.props.selectRowKeys}
            selectOperatorType={this.props.selectOperatorType}
            ref={updateUserRole}
          />
        </Modal>
        {roleArr && roleArr.length
          ? <Form className="login-form">
              <FormItem label="角色权限">
                {getFieldDecorator ('UserAuth', {
                  initialValue: existAuth || [],
                }) (
                  <Select 
                    mode="multiple"
                    onFocus={ e => {this.handleFocus(this.props.selectOperatorType)}}
                  >
                    {allRoleData.map ((item, index) => {
                      return (
                        <Option 
                          key={index} 
                          value={item.itemDesc}
                        >
                          {item.itemDesc}
                        </Option>
                      );
                    })}
                  </Select>
                )}
              </FormItem>
            </Form>
          : <Empty>
              <Button 
                onClick={this.handleClick}
                style={{
                  backgroundColor: 'lightblue',
                  borderRadius: '9px'
                }}
              >
                添加权限
              </Button>
            </Empty>}
      </Fragment>
    );
  }
}

const WrappedNormalLoginForm = Form.create () (addUserRole);
const SingleComponent = Form.create () (RoleDetail);
export default WrappedNormalLoginForm;
