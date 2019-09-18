/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-01 01:00:32
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-10 00:34:05
 * @ 文件解释: 资讯信息管理
 */

import React from 'react';
import {
  _GetAllJournalism,
  _UpdateJournalism,
  _DeleteJournalism,
} from '../../axios/index';
import {SVGICON} from '../svg/svgIcon';
import {G_transformTime} from '../../utils/utils';
import ControlComponent from '../Common/BaseControlComponent/ControlComponent';
import {Card, Tooltip} from 'antd';

export const ControlInfo = props => {
  // 表头
  const columns = [
    // {
    //     title: 'id',
    //     dataIndex: 'key',
    //     key: 'key'
    // },
    {
      title: '新闻标题',
      dataIndex: 'title',
      key: 'title',
      editable: true,
      render: text => (
        <Tooltip title={text}>
          <div
            style={{
              whiteSpace: 'pre-wrap',
              width: '100px',
              height: '100px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              margin: '0 auto',
            }}
          >
            {text}
          </div>
        </Tooltip>
      ),
    },
    {
      title: '新闻内容',
      dataIndex: 'content',
      key: 'content',
      editable: true,
      render: text => (
        <Tooltip title={text}>
          <div
            style={{
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              width: '100px',
              height: '100px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              margin: '0 auto',
            }}
            dangerouslySetInnerHTML={{__html: text.replace (/\\n/g, '<br/>')}}
          />
        </Tooltip>
      ),
    },
    {
      title: '新闻视频缩略图',
      dataIndex: 'thumbUrl',
      key: 'thumbUrl',
      render: url => (
        <img
          src={url}
          alt="404"
          style={{
            height: '50px',
            width: '150px',
            margin: '0 auto',
            display: 'inherit',
          }}
        />
      ),
    },
    {
      title: '新闻跳转链接',
      dataIndex: 'jumpUrl',
      key: 'jumpUrl',
      editable: true,
      render: text => (
        <Tooltip title={text}>
          <div
            style={{
              whiteSpace: 'pre-wrap',
              height: '100px',
              width: '100px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {text}
          </div>
        </Tooltip>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render: data => (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          {G_transformTime (Number (data))}
        </div>
      ),
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
    },
  ];

  /**
     * @description 构造对象用于后台修改时,后端需要的参数
     * @param portParamKey    接口-Parameter
     * @param portParamValue  columns-dataIndex
     */
  const portParamKey = ['key', 'jumpUrl', 'title', 'content'];
  const portParamValue = ['key', 'jumpUrl', 'title', 'content'];

  const sendPortParam = {};
  portParamKey.forEach ((item, index) => {
    sendPortParam[item] = portParamValue[index];
  });

  return (
    <Card
      title={[
        <SVGICON typ="icon-new" key="controlNew" />,
        <span>{props.routerTitle}</span>,
      ]}
    >
      <ControlComponent
        columns={columns}
        interfaceUrl={[_GetAllJournalism, _DeleteJournalism, _UpdateJournalism]}
        _portParam={sendPortParam}
        // 面包屑路径配置
        crumbsConfig={{
          first: '资讯信息管理',
          second: props.routerTitle,
        }}
      />
    </Card>
  );
};

export default ControlInfo;
