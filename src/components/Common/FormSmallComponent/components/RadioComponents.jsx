/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-24 09:49:10
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-24 09:49:11
 * @ 文件解释: 单选框Ui-组件
 */

import React from 'react';
import {Radio} from 'antd';
import { StyleDivFlex, StyleDiv, StyleSpan } from '../../../styleComponents';
import '../../../styleComponents.less';

export const RadioComponents = props => {

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


