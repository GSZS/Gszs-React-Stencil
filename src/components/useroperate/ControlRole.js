/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-03 14:47:34
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-21 15:07:12
 * @ 文件解释: 角色管理
 */


import React,{Component, Fragment} from 'react';
import ControlComponent from '../Common/BaseControlComponent/ControlComponent';
import {FINDALLROLE, DELETEROLE, UPDATEAUTH} from '../../axios/index';
import {G_transformTime} from '../../utils/utils';
import UserControlComponent from '../Common/UserControlComponent/UserControlComponent';

class ControlRole extends Component {
  constructor(props) {
    super(props);

    //配置需要显示的组件
    this.ButtonConfig = [
      {
        buttonDesc: '新增角色',
        buttonType: 'addRole'
      },
      {
        buttonDesc: '修改角色权限',
        buttonType: 'queryRole'
      }
    ]

    this.state = {
      rowKeysArr: [],
      operatorType: undefined,
    }

    // 获取选择框选中的key
    this.getSelectRowsKey = (selectKeysArr) => {
     this.setState({
      rowKeysArr:selectKeysArr
     })
    }

    // 获取角色所属范围
    this.getOperatorType = (operatorType) => {
      this.setState({
        operatorType
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
        title: '角色名称',
        dataIndex: 'roleName',
        key: 'roleName',
      },{
				title: '角色描述',
				dataIndex: 'roleDesc',
				key: 'roleDesc',
        editable: true			
      },{
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        render: data => G_transformTime(data)
      },
      {
        title: '角色所属范围',
        dataIndex: 'operatorTypeDesc',
        key: 'operatorTypeDesc',
      },
      {
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
		
    const portParamKey = ['key','roleName','roleDesc'];
    const portParamValue = ['key','roleName','roleDesc'];

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
            selectOperatorType = {this.state.operatorType}
            _reloadPage = { () => this.reloadPage() }
          />
          <ControlComponent 
            columns = {this.columns} 
            interfaceUrl = {[
              FINDALLROLE,
              DELETEROLE,
              UPDATEAUTH
            ]}
            _name="ControlRole"
            _portParam = {sendPortParam}
            _getSelectRowsKey = { msg => this.getSelectRowsKey(msg) }
            _getOperatorType = { msg => this.getOperatorType(msg) }
            // 设置一个是否要更新的标记
            _sureUpdate = {this.state.sureUpdate}
            // 角色管理组件独有为了处理修改角色而设置的
            _setAuthSign = {this.state.operatorType}
            // 面包屑路径配置
            crumbsConfig = {
              {
                first: '角色管理',
                second: this.props.routerTitle
              }
            }
          />
        </Fragment>
      )
    }
  }

export default ControlRole