/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-20 15:46:51
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-20 15:46:52
 * @ 文件解释: 文本区域(辅助上传公共组件))
 */

import React from 'react';
import {Input} from 'antd';

export const TextareaFrom = props => {
  const { TextArea } = Input;
  return (
    <TextArea
      autosize={{
        minRows: 4,
        maxRows: 8,
      }}
      style={{
        whiteSpace: 'pre-wrap',
      }}
    />
  )
}
