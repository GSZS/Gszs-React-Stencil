/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-01 01:00:32
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-16 10:13:11
 * @ 文件解释: 公共对话框组件
 */

import React, {useState, useEffect} from 'react';
import {Modal, Upload} from 'antd';

export const PublicModal = props => {
  const [modalOpen, setmodalOpen] = useState (false);
  const {title, controlModal, contentType} = props.modalConfig;

  useEffect (
    () => {
      setmodalOpen (controlModal);
    },
    [modalOpen]
  );

  // 判断对话框中需要什么类型
  const modalType = () => {
    if (contentType === 'upload') {
      return (
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
        >
          <img src="" alt="404" />
        </Upload>
      );
    }
  };

  // onCancel
  const onCancel = () => {
    setmodalOpen (controlModal);
    console.log (controlModal);
  };

  return (
    <Modal
      title={title}
      visible={modalOpen}
      onCancel={onCancel}
      onOk={() => setmodalOpen (false)}
    >
      {modalType ()}
    </Modal>
  );
};
