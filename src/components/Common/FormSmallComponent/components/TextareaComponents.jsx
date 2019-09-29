/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-24 09:52:30
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-29 16:48:29
 * @ 文件解释: 文本框组-UI组件
 */

import React,{ useState } from 'react';
import {
  Input,
  Form
} from 'antd';

export const TextareaComponents = props => {
  const { TextArea } = Input;
  const FormItem = Form.Item;
  const {
    field,
    label,
    placeholder
  } = props.textareaConfig;
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  }

  return (
    <FormItem key={field} label={label} >
      {
        props.getFieldDecorator(field, {
          initialValue: value          
        })(
            <TextArea
            placeholder={placeholder}
            onChange = {handleChange}
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
    </FormItem>
  )
}


