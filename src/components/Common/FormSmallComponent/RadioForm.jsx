/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-20 09:43:14
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-20 22:21:06
 * @ 文件解释: 单选框组件(辅助上传公共组件)
 */

import React from 'react';
import {Radio} from 'antd';
import { StyleDivFlex, StyleDiv, StyleSpan } from './styleComponents';
import './styleComponents.less';

export const RadioForm = props => {

  const Radiogroup = Radio.Group;

  return (
    <Radiogroup style={{width: '100%'}}>
      <StyleDivFlex>
        {
          props.radioConfig.map((cv, key) => {
            return (
              // 每个小div
              <StyleDiv className="_smallDiv">
                <Radio value={cv.name} key={key} className="_GszsRadio">
                  <StyleSpan>
                    {cv.desc}
                  </StyleSpan>
                </Radio>
              </StyleDiv>
            )
          })
        }
      </StyleDivFlex>
    </Radiogroup>
  )
}

