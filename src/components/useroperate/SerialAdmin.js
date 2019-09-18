/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-09 10:15:33
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-24 14:52:04
 * @ 文件解释: 序列号管理
 */

import React, {Component} from 'react';
import '../../style/controlvideo.less';
import {QUERYALLMACNUM, EXTENSIONSERIAL, DELETEMAC} from '../../axios/index';
import ControlComponent from '../Common/BaseControlComponent/ControlComponent';
import {G_transformTime} from '../../utils/utils';

class ControlSerial extends Component {
  constructor (props) {
    super (props);

    this.state = {
      page: {},
      data: null,
      filterdata: null,
      sortedInfo: null,
      editingKey: '',
      sureUpdate: false,
    };

    this.columns = [
      {
        title: '序列号',
        dataIndex: 'machineNo',
        key: 'machineNo',
        width: 200,
        // 处理文字太长破坏表格布局
        render: text => {
          return (
            <div
              style={{
                wordWrap: 'break-word',
                wordBreak: 'break-all',
                height: '200px',
                overflow: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span>{text}</span>
            </div>
          );
        },
      },
      {
        title: 'Mac码',
        dataIndex: 'mac',
        key: 'mac',
        render: data => (data === null ? '还未有Mac码' : data),
        width: 200,
        // 处理文字太长破坏表格布局
        render: text => {
          return (
            <div style={{wordWrap: 'break-word', wordBreak: 'break-all'}}>
              {text}
            </div>
          );
        },
      },
      {
        title: '过期时间',
        dataIndex: 'passTime',
        key: 'passTime',
        render: data => (data === null ? '还未被使用' : G_transformTime (data)),
      },
      {
        title: '有效时间(年)',
        dataIndex: 'validity',
        key: 'validity',
        editable: true,
        sorter: (a, b) => a.validity - b.validity,
      },
      {
        title: '是否被使用',
        dataIndex: 'isUsed',
        key: 'isUsed',
        render: data => data === '1' ? '未使用' : '已使用',
      },
      {
        title: '学校名称',
        dataIndex: 'schoolName',
      },
      {
        title: '学校编号',
        dataIndex: 'schoolNo',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
      },
    ];
  }

  // 刷新页面
  reloadPage = () => {
    this.setState ({
      sureUpdate: !this.state.sureUpdate,
    });
  };

  render () {
    // 后台接口需要的参数
    const portParamKey = ['key', 'validity'];
    const portParamValue = ['key', 'validity'];

    const sendPortParam = {};
    portParamKey.forEach ((item, index) => {
      sendPortParam[item] = portParamValue[index];
    });

    return (
      <ControlComponent
        columns={this.columns}
        _portParam={sendPortParam}
        _reloadPage={() => this.reloadPage ()}
        _sureUpdate={this.state.sureUpdate}
        interfaceUrl={[QUERYALLMACNUM, DELETEMAC, EXTENSIONSERIAL]}
        // 面包屑路径配置
        crumbsConfig={{
          first: '序列号管理',
          second: this.props.routerTitle,
        }}
      />
    );
  }
}

export default ControlSerial;
