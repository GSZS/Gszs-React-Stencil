/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-24 09:52:30
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-24 09:52:32
 * @ 文件解释: 文本框组-UI组件
 */

import React from 'react';
import {Input} from 'antd';

export const TextareaComponents = props => {
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


