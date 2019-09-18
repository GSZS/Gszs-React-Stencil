/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-06 13:19:23
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-09 17:32:32
 * @ 文件解释: 资讯信息上传
 */



import React, {Component, Fragment} from 'react';
import {Card} from 'antd';
import {SVGICON} from '../svg/svgIcon';
import {_UploadJournalism} from '../../axios/index';
import BaseFormComponent from '../Common/BaseuploadComponent/uploadComponent';
import BreadcrumbCustom from '../BreadcrumbCustom'

class UploadJournalism extends Component {
  render () {
    // 新闻资讯上传表单配置
    const FormConfig = [
      {
        label: '新闻资讯名称',
        field: 'fileName',
        type: 'text',
        placeholder: '请输入新闻资讯名称',
      },
      {
        label: '新闻内容',
        field: 'fileDesc',
        type: 'textarea',
        placeholder: '请输入新闻资讯内容',
      },
      {
        label: '跳转地址',
        field: 'jumpUrl',
        type: 'text',
        placeholder: '请输入跳转地址',
      },
      {
        label: '上传新闻资讯',
        field: 'UploadJournalism',
        type: 'file',
      },
    ];

    const {history} = this.props;

    // 上传完后跳转地址
    const _skipUrl = '/app/systemsetting/journalismInfo';

    return (
      <Fragment>
				<BreadcrumbCustom first="资讯信息上传" second={this.props.routerTitle} />
        <Card
          title={[
            <SVGICON
              className="singleStyle"
              type="icon-new"
              key="JournalismControl"
            />,
            <span key="uploadJournalismSpan"> 新闻资讯上传 </span>,
          ]}
          className="singvideo"
        >
          {/* 表单 */}
          <BaseFormComponent
            FormConfig={FormConfig}
            routerPath={history}
            interfaceUrl={_UploadJournalism}
            skipUrl={_skipUrl}
          />
        </Card>
      </Fragment>
    );
  }
}

export default UploadJournalism;
