/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-07 21:26:41
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-21 14:36:55
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-07-05 17:28:57

 /**
  * 使用方法:
  * ❗ 这个组件是用于处理 新增用户/ 冻结用户/ 解冻用户/
  *                    重置用户密码/ 新增角色/ 修改角色权限
  *                    解冻话题/ 帖子详细信息
  * 
  * 1 : {config} 获取按钮配置
  * 2 : {routerPath} 路由history
  * 3 : {rowKeysArr} 获取表格行选中的key
  * 4 : {_reloadPage} 刷新页面
  * 5 : {selectOperatorType} 操作类型 '0'-后端 , '1'-前端
  */

import React, {useState, Fragment} from 'react';
import {Button, Modal, Form, message} from 'antd';
import './UserControlComponent.less';
import {
  ADDOPERATEUSER,
  LOCKUSER,
  UNLOCKUSER,
  RESETUSERPWD,
  ADDCREATEROLE,
  DISCUSSLOCK,
  DISCUSSUNLOCK,
  UPDATEAUTH,
} from '../../../axios/index';
import WrappedNormalLoginForm from './formComponents'; // 新增用户
import FreezeComponent from './freezeFormComponents'; // 冻结用户
import RelieveFreezeComponent from './RelieveFreezeComponents'; // 解冻用户
import ReloadUserPwd from './ReloadUserPwd'; // 重置用户密码
import AddUserRoleComponent from './addUserRole'; // 新增角色
import UpdateRoleComponent from './updateUserRole'; // 修改角色权限
import DiscussDetail from './discussDetail'; // 帖子详细信息
import {G_getAuthId} from '../../../utils/utils'

const UserControlComponent = props => {
  // 控制模态框显示与隐藏
  const [visible, setVisible] = useState ([
    { // 新增用户
      addUserVisible: false,
      _addUserConfirmLoading: false,
    },
    { // 冻结用户
      freezeUserVisible: false,
      _freezeConfirmLoading: false,
    },
    { // 解冻用户
      relieveFreezeUserVisible: false,
      _relieveFreezeConfirmLoading: false,
    },
    { // 重置用户密码
      reloadUserVisible: false,
      _reloadConfirmLoading: false,
    },
    { // 新增用户角色
      addUserRole: false,
      _addUserRoleConfirmLoading: false,
    },
    { // 修改角色权限
      queryUserRole: false,
      _queryConfirmLoading: false,
    },
    { // 帖子详细信息
      discussDetail: false,
      _discussDetailLoading: false,
    },
  ]);

  // 控制模态框title
  const [title, setTitle] = useState ('');

  // 被分类点击时触发用于处理加载状态
  const handleClick = {
    addUser (_title) {
      // 新增用户
      setVisible ([{addUserVisible: true}]);
      setTitle (_title);
    },
    freezeUser (_title) {
      // 冻结用户
      setVisible ([{freezeUserVisible: true}]);
      setTitle (_title);
    },
    relieveFreezeUser (_title) {
      // 解冻用户
      setVisible ([{relieveFreezeUserVisible: true}]);
      setTitle (_title);
    },
    reloadUser (_title) {
      // 重置用户密码
      setVisible ([{reloadUserVisible: true}]);
      setTitle (_title);
    },
    addRole (_title) {
      // 新增角色
      setVisible ([{addUserRole: true}]);
      setTitle (_title);
    },
    queryRole (_title) {
      // 修改角色权限
      setVisible ([{queryUserRole: true}]);
      setTitle (_title);
    },
    discussDetail (_title) {
      // 帖子详细信息
      setVisible ([{discussDetail: true}]);
      setTitle (_title);
    },
  };

  let formValue = React.createRef (); // 通过ref使的数据流从父组件 -> 子组件

  // Modal确认
  const handleOk = modalType => {
    switch (modalType) {
      case '新增用户':
        formValue.current.validateFields ((err, values) => {
          if (!err) {
            const infoConfig = {
              username: values.userName,
              password: values.password,
              mobile: values.mobile,
              email: values.email,
              name: values.realName,
              roleId: values.roleName,
            };
            ADDOPERATEUSER (infoConfig).then (res => {
              setVisible ([
                {
                  _addUserConfirmLoading: true,
                },
              ]);
              if (res.status === 200) {
                message.success (res.message);
                setVisible ([
                  {
                    addUserVisible: false,
                    _addUserConfirmLoading: false,
                  },
                ]);
                props._reloadPage (); // 调用父组件刷新子组件
              } else {
                message.error (res.message);
              }
            });
          } else {
            message.error ('表单输入格式有误');
          }
        });
        break;
      case '冻结用户':
        const freezeKey = formValue.current.props.selectRowKeys;
        LOCKUSER (freezeKey).then (res => {
          setVisible ([
            {
              _freezeConfirmLoading: true,
            },
          ]);
          if (res.status === 200) {
            message.success (`冻结用户 : ${freezeKey} 成功`);
            setVisible ([
              {
                freezeUserVisible: false,
                _freezeConfirmLoading: false,
              },
            ]);
            props._reloadPage (); // 调用父组件刷新子组件
          } else {
            message.error (res.message);
          }
        });
        break;
      case '解冻用户':
        const relieveFreezeKey = formValue.current.props.selectRowKeys;
        UNLOCKUSER (relieveFreezeKey).then (res => {
          setVisible ([
            {
              _relieveFreezeConfirmLoading: true,
            },
          ]);
          if (res.status === 200) {
            message.success (`用户${relieveFreezeKey}已被解除冻结!`);
            setVisible ([
              {
                relieveFreezeUserVisible: false,
                _relieveFreezeConfirmLoading: false,
              },
            ]);
            props._reloadPage ();
          } else {
            message.error (res.message);
          }
        });
        break;
      case '重置用户密码':
        const reloadPwd = formValue.current.props.selectRowKeys;
        RESETUSERPWD (reloadPwd).then (res => {
          if (res.status === 200) {
            setVisible ([
              {
                reloadUserVisible: false,
                _reloadConfirmLoading: false,
              },
            ]);
            message.success (
              `用户${reloadPwd}密码已被重置!, 重置后的密码是${res.data.newPsw}`
            );
            props._reloadPage ();
          } else {
            message.error (res.message);
          }
        });
        break;
      case '新增角色':
        formValue.current.validateFields ((err, values) => {
          if (!err) {
            const infoConfig = {
              roleName: values.roleName,
              roleDesc: values.roleNameDesc,
              operatorType: values.selectScope,
              key: values.selectAuth.join (','),
            };
            ADDCREATEROLE (infoConfig).then (res => {
              setVisible ([
                {
                  _addUserRoleConfirmLoading: true,
                },
              ]);
              if (res.status === 200) {
                message.success (res.message);
                setVisible ([
                  {
                    addUserRole: false,
                    _addUserRoleConfirmLoading: false,
                  },
                ]);
                props._reloadPage (); // 调用父组件刷新子组件
              } else {
                message.error (res.message);
              }
            });
          } else {
            message.error ('表单输入格式有误');
          }
        });
        break;
      case '冻结话题':
        const freezediscussedKey = formValue.current.props.selectRowKeys;
        DISCUSSLOCK (freezediscussedKey).then (res => {
          setVisible ([
            {
              _addUserConfirmLoading: true,
            },
          ]);
          if (res.status === 200) {
            message.success (`冻结话题 : ${freezediscussedKey} 成功`);
            setVisible ([
              {
                addUserVisible: false,
                _addUserConfirmLoading: false,
              },
            ]);
            props._reloadPage (); // 调用父组件刷新子组件
          } else {
            message.error (res.message);
          }
        });
        break;
      case '解冻话题':
        const relieveFreezeDiscussKey = formValue.current.props.selectRowKeys;
        DISCUSSUNLOCK (relieveFreezeDiscussKey).then (res => {
          setVisible ([
            {
              _addUserConfirmLoading: true,
            },
          ]);
          if (res && res.status === 200) {
            message.success (`话题${relieveFreezeDiscussKey}已被解除冻结!`);
            setVisible ([
              {
                addUserVisible: false,
                _addUserConfirmLoading: false,
              },
            ]);
            props._reloadPage ();
          } else {
            message.error (res.message);
          }
        });
        break;
      case '修改角色权限':
        formValue.current.validateFields ((err, values) => {
          if (!err) {
            const getAuthId = G_getAuthId(values.UserAuth);
            const infoConfig = {
              key: props.rowKeysArr.join (),
              item: getAuthId.join()
            };
            UPDATEAUTH (infoConfig).then (res => {
              setVisible ([
                {
                  _queryConfirmLoading: true,
                },
              ]);
              if (res && res.status === 200) {
                message.success (res.message);
                setVisible ([
                  {
                    _queryConfirmLoading: false,
                  },
                ]);
                props._reloadPage (); // 调用父组件刷新子组件
              } else {
                message.error (res.message);
              }
            });
          } else {
            message.error ('表单输入格式有误');
          }
        });
        break;
      default:
        throw new Error ('未匹配到Modal框的按钮名称');
    }
  };

  // Modal取消
  const handleCancel = e => {
    e.preventDefault ();
    setVisible ([{addUserVisible: false}]);
    setVisible ([{freezeUserVisible: false}]);
    setVisible ([{relieveFreezeUserVisible: false}]);
    setVisible ([{reloadUserVisible: false}]);
  };

  // 动态设置组件类型
  var modalComponent;
  if (title === '新增用户') {
    modalComponent = <WrappedNormalLoginForm ref={formValue} />;
  } else if (title === '冻结用户' || title === '冻结话题') {
    modalComponent = (
      <FreezeComponent selectRowKeys={props.rowKeysArr} ref={formValue} />
    );
  } else if (title === '解冻用户' || title === '解冻话题') {
    modalComponent = (
      <RelieveFreezeComponent
        selectRowKeys={props.rowKeysArr}
        ref={formValue}
      />
    );
  } else if (title === '重置用户密码') {
    modalComponent = (
      <ReloadUserPwd selectRowKeys={props.rowKeysArr} ref={formValue} />
    );
  } else if (title === '新增角色') {
    modalComponent = (
      <AddUserRoleComponent selectRowKeys={props.rowKeysArr} ref={formValue} />
    );
  } else if (title === '修改角色权限') {
    modalComponent = (
      <UpdateRoleComponent
        selectRowKeys={props.rowKeysArr}
        ref={formValue}
        selectOperatorType={props.selectOperatorType}
      />
    );
  } else if (title === '帖子详细信息') {
    modalComponent = (
      <DiscussDetail selectRowKeys={props.rowKeysArr} ref={formValue} />
    );
  }

  return (
    <Fragment>
      <div className="UserControlComponent">
        <ul>
          {props.config.map ((item, index) => {
            return (
              <Button
                key={index}
                type="primary"
                onClick={e => {
                  e.preventDefault ();
                  handleClick[item.buttonType] (item.buttonDesc);
                }}
              >
                {item.buttonDesc}
              </Button>
            );
          })}
        </ul>
      </div>
      <Modal
        width={740}
        title={title}
        visible={visible.some (item => Boolean (item[Object.keys (item)[0]]))}
        confirmLoading={visible.some (item =>
          Boolean (item[Object.keys (item)[1]])
        )}
        okText="确定"
        cancelText="取消"
        onCancel={handleCancel}
        onOk={e => {
          e.preventDefault ();
          handleOk (title);
        }}
      >
        {modalComponent}
      </Modal>
    </Fragment>
  );
};

export default Form.create () (UserControlComponent);
