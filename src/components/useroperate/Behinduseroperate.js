/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-03 09:57:06
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-24 10:26:39
 * @ 文件解释: 后台用户管理
 */

import React,{Component, Fragment} from 'react';
import ControlComponent from '../Common/BaseControlComponent/ControlComponent';
import {FINDFRONTUSER, DELETEUSER, UPDATEUSER} from '../../axios/index';
import {G_transformTime} from '../../utils/utils';
import UserControlComponent from '../Common/UserControlComponent/UserControlComponent';

class FrontUserOperate extends Component {
  constructor(props) {
    super(props);

    //配置需要显示的组件
    this.ButtonConfig = [
      {
        buttonDesc: '新增用户',
        buttonType: 'addUser'
      },
      {
        buttonDesc: '冻结用户',
        buttonType: 'freezeUser'
      },
      {
        buttonDesc: '解冻用户',
        buttonType: 'relieveFreezeUser'
      },
      {
        buttonDesc: '重置用户密码',
        buttonType: 'reloadUser'
      }
    ]

    this.state = {
      rowKeysArr: [],
      sureUpdate: false
    }
    // 获取选择框选中的key
    this.getSelectRowsKey = selectKeysArr => {
     this.setState({
      rowKeysArr:selectKeysArr
     })
    }

    // 刷新页面
    this.reloadPage = () => {
      this.setState({
        sureUpdate: !this.state.sureUpdate
      })
    }

    this.columns = [
      {
        title: '登录名',
        dataIndex: 'userName',
        key: 'userName',
      },{
				title: '用户手机',
				dataIndex: 'mobile',
				key: 'mobile',
        editable: true			
      },{
        title: '用户邮箱',
        dataIndex: 'email',
        key: 'email',
        editable: true
      },{
				title: '姓名',
				dataIndex: 'name',
				key: 'name',
        editable: true			
      },{
        title: '角色',
        dataIndex: 'roleDesc',
        key: 'roleDesc',
        editable: true
      },{
				title: '创建时间',
				dataIndex: 'createTime',
				key: 'createTime',
				render: (data) => {
					return G_transformTime(data)
				}
			},{
				title: '用户状态',
				dataIndex: 'stateDesc',
				key: 'stateDesc'
			},{
        title: '操作',
        dataIndex: 'operation',
        key: 'operation'
      }
    ];
  }

  render() {
    /**
     * @description 构造对象用于后台修改时,后端需要的参数
     * @param portParamKey    接口-Parameter
     * @param portParamValue  columns-dataIndex
     */
		
    const portParamKey = ['key','mobile','email','name','roleId'];
    const portParamValue = ['key','mobile','email','name','roleId'];

    const sendPortParam = {};
    portParamKey.forEach((item, index) => {
      sendPortParam[item] = portParamValue[index];
    })

    // history
    const {history} = this.props;

    return (
        <Fragment>
          <UserControlComponent 
            config={this.ButtonConfig}
            routerPath={history}
            rowKeysArr = {this.state.rowKeysArr}
            _reloadPage = { () => this.reloadPage() }
          />
          <ControlComponent 
            columns = {this.columns} 
            interfaceUrl = {[
              FINDFRONTUSER,
              DELETEUSER,
              UPDATEUSER
            ]}
            _reloadPage = { () => this.reloadPage() }
            _portParam = {sendPortParam}
            interfaceUrlQuery = {{ //获取后台的用户管理数据
              _findquery : 0
            }}
            _name = 'Behinduseroperate'
            _getSelectRowsKey = { msg => this.getSelectRowsKey(msg) }
            // 设置一个是否要更新的标记
            _sureUpdate = {this.state.sureUpdate}
            // 面包屑路径配置
            crumbsConfig = {
              {
                first: '后台用户管理',
                second: this.props.routerTitle
              }
            }
          />
        </Fragment>
      )
    }
  }

export default FrontUserOperate