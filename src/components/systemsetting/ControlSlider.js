/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-02 21:36:36
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-24 15:25:11
 * @ 文件解释: 轮播图管理
 */

import React, {Component} from 'react';
import {GET_ALL_SLIDERSHOW, _DeleteSlide, _AmendSlide} from '../../axios/index';
import {G_transformTime} from '../../utils/utils';
import ControlComponent from '../Common/BaseControlComponent/ControlComponent';

class EditableTable extends Component {
  constructor (props) {
    super (props);

    this.columns = [
      {
        title: '轮播图名称',
        dataIndex: 'title',
        key: 'title',
        editable: true,
      },
      {
        title: '轮播图简介',
        dataIndex: 'desc',
        key: 'desc',
        editable: true,
        width: 200,
        //处理br标签
        render: text => (
          <div
            style={{
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            }}
            dangerouslySetInnerHTML={{__html: text.replace (/\\n/g, '<br/>')}}
          />
        ),
      },
      {
        title: '上传时间',
        dataIndex: 'uploadTime',
        key: 'uploadTime',
        render: data => {
          return G_transformTime (data);
        },
      },
      {
        title: '轮播图序号',
        dataIndex: 'wheelNo',
        key: 'wheelNo',
        editable: true,
      },
      {
        title: '轮播图图片',
        dataIndex: 'picThumbUrl',
        key: 'picThumbUrl',
        render: url => (
          <img
            src={url}
            alt="404"
            style={{
              width: '150px',
              height: '50px',
            }}
          />
        ),
      },
      {
        title: '跳转链接',
        dataIndex: 'jumpurl',
        key: 'jumpurl',
        editable: true,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
      },
    ];
  }

  render () {
    /**
     * @description 构造对象用于后台修改时,后端需要的参数
     * @param portParamKey    接口-Parameter
     * @param portParamValue  columns-dataIndex
     */
    const portParamKey = ['key', 'title', 'desc', 'jumpurl', 'wheelNo'];
    const portParamValue = ['key', 'title', 'desc', 'jumpurl', 'wheelNo'];

    const sendPortParam = {};
    portParamKey.forEach ((item, index) => {
      sendPortParam[item] = portParamValue[index];
    });

    return (
      <ControlComponent
        columns={this.columns}
        interfaceUrl={[GET_ALL_SLIDERSHOW, _DeleteSlide, _AmendSlide]}
        _portParam={sendPortParam}
        // 面包屑路径配置
        crumbsConfig={{
          first: '轮播图管理',
          second: this.props.routerTitle,
        }}
      />
    );
  }
}

export default EditableTable;
