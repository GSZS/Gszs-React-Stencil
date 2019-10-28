/**
 * @ Author: Gszs
 * @ Create Time: 2019-10-15 19:57:02
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-28 14:41:13
 * @ 文件解释: 修改表格数据模态框组件
 */

import React, { useState, useEffect } from 'react';
import UpoloadComponentContainer from '../../containers/uploadComponentContainer';

const WrappedUpdateFormData = props => {

  const [getData, setGetData] = useState();
  const { _record, _difficultId } = props;

  useEffect(() => {
    if (props.markName !== undefined) {
      props.axiosFunc(props.markName, _record).then(res => {
        if (res && res.status === 200) {
          setGetData(res.data);
        }
      })
    } else {
      props.axiosFunc(_record).then(res => {
        if (res && res.status === 200) {
          setGetData(res.data);
        }
      })
    }
  }, [_record, _difficultId]);

  // 提供给FormConfig健的值,配置参数
  let Master = [];
  // 修改表格配置
  let filterResult = [];
  const _columns = props.columns;
  filterResult = _columns.filter(cv => 'type' in cv);

  filterResult.map((cv, key) => {
    const { title: label, dataIndex: field, type: type, promiseUpload: promiseUpload } = cv;
    const newCv = { label, field, type, promiseUpload };

    // 筛选需要的值,这段代码有点复杂，
    // 主要是筛选请求得到的key与dataIndex对应然后把请求得到的value填充进对象initialValue

    // 处理资助信息不用数组化getData
    if (props.markName !== undefined) {
      return getData ? getData.map((cv2, index) =>
        Object.keys(cv2).map((cv3, index2) => {
          if (cv3 === cv['dataIndex']) {
            newCv.initialValue = cv2[cv3];
            Master.push(newCv);
          }
        })
      ) : []
    } else {
      return getData ? [getData].map((cv2, index) =>
        Object.keys(cv2).map((cv3, index2) => {
          if (cv3 === cv['dataIndex']) {
            newCv.initialValue = cv2[cv3];
            Master.push(newCv);
          }

        })
      ) : []
    }
  })

  return (
    <UpoloadComponentContainer
      {...props}
      FormConfig={Master}
      interfaceUrl={props.interfaceUrl[2]}
      _mark='UPDATE' // UPDATE标记代表是修改调用了上传公共组件
    />
  )

}

export default WrappedUpdateFormData;




