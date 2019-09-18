/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-06 09:59:21
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-13 16:46:38
 * @ 文件解释: 日志管理
 */

import React from 'react';
import LoserControlColumnContainer from '../../containers/LoserControlColumn';
import { G_transformTime } from '../../utils/utils';

const LogControl = props => {
  // 设置columns
  const columns = [
    {
      title: '日志类型',
      dataIndex: 'operatordesc',
      key: 'operatordesc',
    },
    {
      title: 'IP',
      dataIndex: 'ipAddress',
      key: 'ipAddress',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      render: data => G_transformTime(data)
    },
    {
      title: 'userId',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: '结果类型',
      dataIndex: 'resultType',
      key: 'resultType'
    },
    {
      title: '操作类型',
      dataIndex: 'logType',
      key: 'logType',
    }
  ];

  return (
    <React.Fragment>
			<LoserControlColumnContainer 
				columns={columns} 
				// 面包屑路径配置
				crumbsConfig = {
					{
						first: '日志管理',
						second: props.routerTitle
					}
				}
			/>
    </React.Fragment>
  );
};

export default LogControl;
