/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-11 16:26:04
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-20 10:56:21
 * @ 文件解释: 获取管理员信息
 */

import React, {useState, useEffect} from 'react';
import {SVGICON} from '../svg/svgIcon';
import {Table, Card, Icon} from 'antd';
import { connectAlita } from 'redux-alita';

const UseRole = (props) => {
  const [roleData, setRoleData] = useState ([]);  
  const { setAlitaState } = props;

  const getRoleInfo = async () => {
    (await function(){
      setAlitaState({
        funcName: 'GETADMININDEX',
        stateName: 'userRoleData'
      })
    }())
  };

  useEffect (() => {
    getRoleInfo ();
    const {userRoleData} = props
    if( userRoleData && Object.keys(userRoleData.data).length !== 0 ){
      setRoleData(new Array(1).fill(userRoleData.data.data.user))
    }
  }, []);

  var userDetailData;
  if(props && props.userRoleData && Object.keys(props.userRoleData.data).length !== 0){
    const {userRoleData} = props
    userDetailData = new Array(1).fill(userRoleData.data.data.user)
  }

  // 管理员信息数据表头
  const columns = [
    {
      title: '角色权限',
      dataIndex: 'roleDesc',
      key: 'roleDesc',
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      key: 'userName',
      render: data => (data === null ? '未设置' : data),
    },
    {
      title: '手机号码',
      dataIndex: 'mobile',
      key: 'mobile',
      render: data => (data === null ? '未设置' : data),
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      render: data => (data === null ? '未设置' : data),
    },
  ];

  return (
    <React.Fragment>
      <Card bordered={false}>
        <div className="pb-m">
          <h3>
            <SVGICON type="icon-information" className="admin_icon" />
            你的基本信息 :
            {' '}
          </h3>
          <small />
        </div>
        <span className="card-tool"><Icon type="sync" /></span>
        <Table
          columns={columns}
          dataSource={
            roleData.length !== 0 ? roleData : userDetailData
          }
          bordered
          pagination={false}
        />
      </Card>
    </React.Fragment>
  );
};

export default connectAlita(['userRoleData'])(UseRole);