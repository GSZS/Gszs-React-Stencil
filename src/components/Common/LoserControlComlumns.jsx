/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-19 21:58:15
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-19 09:59:50
 * @ 文件解释: 低级表格组件(不处理主动分发请求的操作的公共表格展示组件)
 */

import React, {useState, useEffect} from 'react';
import {Table} from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom'
import {Pagination} from 'antd'

const LoserControlColumns = props => {

  // 设置分页
  const [page, setPage] = useState(1);

  // 从父组件获取请求接口
  const [requestData] = props.interfaceUrl;
  const columns = props.columns;

  useEffect(() => {
    props.LogAction(requestData, page);
  }, [page])

	// 用于设置面包屑导航
	let crumbsConfig = props.crumbsConfig;

  return (
    <React.Fragment>
      <BreadcrumbCustom first={crumbsConfig.first} second={crumbsConfig.second} />
      <Table
        bordered
        columns={columns}
        dataSource={props.logData}
        pagination={false}
        loading={props.loading}
      />
      <Pagination 
        defaultCurrent={1} 
        total={props.logDataTotal} 
        onChange={e => setPage(Number(e))} 
        style={{marginTop:"20px",float:"right"}}
      />
    </React.Fragment>
  );
};

export default LoserControlColumns;
