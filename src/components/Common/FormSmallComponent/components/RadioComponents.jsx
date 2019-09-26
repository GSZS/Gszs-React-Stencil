/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-24 09:49:10
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-25 20:54:43
 * @ 文件解释: 单选框Ui-组件
 */

import React, { useState, useEffect } from 'react';
import {Radio, Form} from 'antd';
import { StyleDivFlex, StyleDiv, StyleSpan } from '../../../styleComponents';
import '../../../styleComponents.less';

export const RadioComponents = props => {
  const Radiogroup = Radio.Group;
  const FormItem = Form.Item;
  const {
    axiosPath,
    radioDesc,
    field,
    label
  } = props.radioConfig;
  const [radioValue, setRadioValue] = useState(1);

  if( axiosPath ){
    useEffect(() => {
      props.GetAllPjAction(axiosPath)
    }, [])
  }

  const changeHanle = e => {
    console.log(radioValue)
    setRadioValue(e.target.value)
  }

  return (
      <FormItem key={field} label={label}>
        {
          props.getFieldDecorator(field, {
            initialValue: 2,
          })(
            <Radiogroup style={{width: '100%'}} value={radioValue} onChange={changeHanle}>
              <StyleDivFlex>
                {
                  // props._allPjTypes.map((cv, key) => {
                  //   return (
                  //     // 每个小div
                  //     <StyleDiv className="_smallDiv">
                  //       <Radio value={cv.id} key={key} className="_GszsRadio">
                  //         <div>{ cv.proTypeName }</div>
                  //         <StyleSpan>
                  //           {cv.proTypeDesc}
                  //         </StyleSpan>
                  //       </Radio>
                  //     </StyleDiv>
                  //   )
                  // })
                  radioDesc.map((cv, key) => {
                    return (
                      <StyleDiv className="_smallDiv">              
                        <Radio value={cv.id} key={key} className="_GszsRadio">
                           <div>{ cv.name }</div>
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
      </FormItem>
  )
}


