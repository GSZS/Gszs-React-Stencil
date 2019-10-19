/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-23 23:31:39
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-29 17:00:52
 * @ 文件解释: 下拉框UI组件
 */

import React, { useState, useEffect } from 'react';
import { Select, Form } from 'antd';

export const SelectComponent = props => {
  const { 
    axiosPath,
    field,
    label,
    initialValue,
    on
  } = props.selectConfig;
  const { Option } = Select;
  const FormItem = Form.Item;
  const [selectValue, setSelectValue] = useState(initialValue)

  const handleChange = (_v) => {
    setSelectValue(_v)
  }

  return (
    <FormItem key={field} label={label} >
      {props.getFieldDecorator(field, {
        initialValue: selectValue
      })(
        !on ?
          <Select onChange={handleChange}>
            {
              props.selectConfig.selectData.map((cv, index) => {
                return <Option value={cv.id} key={index}>
                  {cv.value}
                </Option>
              })
            }
          </Select> :
          props._allOg ?
            <Select onChange={handleChange}>
              {
                props._allOg.map((cv, index) => {
                  return <Option value={cv.id} key={index}>
                    {cv.groupName}
                  </Option>
                })
              }
            </Select> : <Select />
      )}
    </FormItem>
  )
}