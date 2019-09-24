/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-23 23:31:39
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-25 07:38:25
 * @ 文件解释: 下拉框UI组件
 */

import React, { useEffect } from 'react';
import { Select } from 'antd';

export const SelectComponents = props => {
  const { axiosPath } = props.selectConfig;

  if (axiosPath) {
    useEffect(() => {
      props.GetAllOgAction(axiosPath);
    }, [])
  }

  const { Option } = Select;

  return (
    !props.selectConfig.on ?
      <Select>
        {
          props.selectConfig.selectData.map((cv, index) => {
            <Option value={cv.id} key={index}>
              {cv.value}
            </Option>
          })
        }
      </Select> : 
    props._allOg ? 
      <Select>
        props._allOg.map((cv, index) => {
          <Option value={cv.id} key={index}>
            {cv.groupName}
          </Option>
        })
      </Select> : <Select />
  )
}


