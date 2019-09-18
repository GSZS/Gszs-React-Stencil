/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-07 16:31:19
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-07 22:04:55
 * @ 文件解释: 模态框公共组件
 */

import React, {Fragment, Component} from 'react';
import {Modal} from 'antd';

export class ModalComponents extends Component{

  render(){
    const props = this.props;
    return(
      <Fragment>
        {/* 模态框 */}
        <Modal
          title={props.Modaltitle}
          visible={props.Modalvisible}
          okText={props.ModalokText}
          cancelText={props.ModalcancelText}
          onCancel={props.ModalonCancel}
          onOk={props.ModalonOk}
          width={props.Modalwidth}
        >
          {props.children}
        </Modal>
      </Fragment>
    )
  }
}
