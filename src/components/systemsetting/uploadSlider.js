/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-02 21:36:36
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-27 10:52:49
 * @ 文件解释: 轮播图上传
 */

import React, {Component} from 'react';
import {Card} from 'antd';
import {SVGICON} from '../svg/svgIcon';
import UploadComponent from '../Common/BaseuploadComponent/uploadComponent';
import {_UploadSlider, GETEXEURL} from '../../axios/index';
import BreadcrumbCustom from '../BreadcrumbCustom'

/**
 * @description 轮播图上传
 */
class UploadSlider extends Component {
  render () {
    // 轮播图表单配置(用于传输给表单基本组件)
    const FormConfig = [
      {
        label: '轮播图名称',
        field: 'fileName',
        type: 'text',
        placeholder: '请输入轮播图名称',
      },
      {
        label: '轮播图简介',
        field: 'fileDesc',
        initialValue: '轮播图简介',
        type: 'textarea',
        placeholder: '请输入轮播图简介',
      },
      {
        label: '请选择跳转跳转类型',
        field: 'jumpType',
        initialValue: 'browser',
        type: 'radio',
      },
      {
        label: '跳转地址',
        field: 'jumpurl',
        type: 'joumpurltext',
        placeholder: '请选择跳转地址',
      },
      {
        label: '上传轮播图',
        field: 'UploadSlider',
        type: 'file',
      },
    ];
    const {history} = this.props;
    // 上传完后跳转地址
    const _skipUrl = '/app/systemsetting/slideshow';

    return (
      <React.Fragment>
				<BreadcrumbCustom first="轮播图上传" second={this.props.routerTitle} />
        <Card
          title={[
            <SVGICON
              type="icon-lunbotu"
              className="singleStyle"
              key="singleStyle"
            />,
            <span key="_uploadSliderSpan">轮播图上传</span>,
          ]}
          className="singvideo"
        >
          {/* 表单 */}
          <UploadComponent
            FormConfig={FormConfig}
            routerPath={history}
            interfaceUrl={_UploadSlider}
            skipUrl={_skipUrl}
            _getExeUrl = {GETEXEURL}
          />
        </Card>
      </React.Fragment>
    );
  }
}

export default UploadSlider;
