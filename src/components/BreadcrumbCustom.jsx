/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-01 01:00:32
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-09 13:58:39
 * @ 文件解释: 面包屑独立组件
 */


import React from 'react';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';

class BreadcrumbCustom extends React.Component {
  render () {
    const first = <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item> || '';
    const second = <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item> || '';
    return (
      <span>
        <Breadcrumb style={{margin: '12px 0'}}>
          <Breadcrumb.Item>
            <Link to={'/app/dashboard/index'}>首页</Link>
          </Breadcrumb.Item>
          {first}
          {second}
        </Breadcrumb>
      </span>
    );
  }
}

export default BreadcrumbCustom;
