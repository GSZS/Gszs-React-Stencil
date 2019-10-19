/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-17 10:06:31
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-19 12:13:05
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-07-01 17:02:56
 */

import React, { useState, useEffect } from 'react';
import {
  Table,
  Button,
  Popconfirm,
  Form,
  Modal,
  Pagination
} from 'antd';
import ModalFormContainer from '@/containers/ModalFormContainer';

// 创建Context实例
const EditableContext = React.createContext();

// 创建生产者
const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

// 表格细胞
const EditableCell = props => {
  const {
    dataIndex,
    title,
    inputType,
    record,
    index,
    ...restProps
  } = props;

  return (
    <EditableContext.Consumer>
      {form => {
        return (
            <td {...restProps} >
              {restProps.children}
            </td>
        );
      }}
    </EditableContext.Consumer>
  );
};

// EditableTable
const EditableTable = props => {

  // 设置初始值
  const [data, setData] = useState([]),
    [total, setTotal] = useState(10),
    [visible, setVisible] = useState(false),
    [rowId, setRowId] = useState(undefined)

  // 监控表格数据
  useEffect(() => {
    setData(props.data);
  }, [props.data])

  // 分页
  const [page, setPage] = useState(1);

  // 排序
  const [setSortedInfo] = useState(null);

  // 删除操作
  const HandleDelete = id => {
    // props.delTableAction(DELETE_ALL_DATA, id);
  };

  // 排序操作
  const handleChange = sorter => {
    setSortedInfo(sorter);
  };

  // modleHandleCancel
  const handleCancel = () => {
    setVisible(false)
  }

  // modleHandleOk
  const handleOk = () => {
    setVisible(false)
  }

  // modleHandleEdit
  const handleEdit = id => {
    setRowId(id)
    setVisible(true)
  }

  // 整合细胞组件与表格行配置
  const components = {
    body: {
      row: EditableFormRow, // 表格行配置
      cell: EditableCell, // 表格细胞配置
    },
  };

  // columns表格头(动态导入)
  const columns = props.columns.map(col => {
    // if (!col.editable) {
    //   return col;
    // }
    return {
      ...col,
      onCell: record => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title
      }),
    };
  });

  const dealOperateFn = () => {
    const columnList = props.columns;
    columnList.forEach(item => {
      if (item.title === '操作') {
        item.render = (text, record) => {
          return (
            <div>
              <span>
                <EditableContext.Consumer>
                  {form => (
                    <Button type="primary" icon="edit" onClick={() => handleEdit(record.id)} >
                      修改
                    </Button>
                  )}
                </EditableContext.Consumer>
                <Popconfirm
                  title="确定要删除吗?"
                  onConfirm={() => HandleDelete(record.id)}
                >
                  <a href="javascript:;">
                    <Button icon="delete" type="danger" className="deleteButton">
                      删除
                    </Button>
                  </a>
                </Popconfirm>
              </span>
            </div>
          );
        };
      }
    });
  };
  dealOperateFn();

  // 用于设置面包屑导航
  let crumbsConfig = props.crumbsConfig;

  // 渲染
  return (
    <>
      <EditableContext.Provider value={props.form}>
        <Table
          components={components} // 用于覆盖默认的table配置
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={data}
          columns={columns}
          onChange={handleChange}
          pagination={false}
        />
        {/* 分页 */}
        <Pagination
          defaultCurrent={1}
          total={total}
          onChange={e => setPage(Number(e))}
          style={{ marginTop: '20px', float: 'right' }}
          showSizeChanger
        />
        <Modal
          width={500}
          title={props.componentName}
          visible={visible}
          okText="确定修改"
          cancelText="取消更改"
          onCancel={handleCancel}
          onOk={handleOk}
        >
          {/* <ModalFormContainer rowId={rowId} getDataById={GET_ALL_DATA_BYID} /> */}
        </Modal>
      </EditableContext.Provider>
    </>
  );
};

export default EditableTable;


/**
 * 
 * 
 * {className: "", record: {…}, dataIndex: "og_name", title: "组织名称", onClick: ƒ, …}
children: (3) [null, null, undefined]
className: ""
dataIndex: "og_name"
onClick: ƒ (e)
record: {key: "1", name: "胡彦斌", age: 32, address: "西湖区湖底公园1号"}
title: "组织名称"
__proto__: Object
 */

 /**
  * // 1
{
    "_id": ObjectId("5da679566034e3594b37d387"),
    "company_id": NumberInt("47"),
    "user_id": NumberInt("26"),
    "og_id": NumberInt("51"),
    "og_key": "G",
    "og_name": "缘之空",
    "og_desc": "遥远的天空",
    "og_pic": "16dd24a0fb589.jpeg",
    "project": [
        {
            "_id": ObjectId("5da679566034e3594b37d388"),
            "id": NumberInt("9")
        }
    ],
    "__v": NumberInt("0"),
    "key": "2"
}

// 2
{
    "_id": ObjectId("5daa75b172f35dba5193e706"),
    "company_id": NumberInt("47"),
    "user_id": NumberInt("26"),
    "og_id": NumberInt("52"),
    "og_key": "1",
    "og_name": "1",
    "og_desc": "1",
    "og_pic": "16de1dbe0fa90.jpeg",
    "project": [
        {
            "_id": ObjectId("5daa75b172f35dba5193e707"),
            "id": NumberInt("10")
        }
    ],
    "__v": NumberInt("0"),
    "key": "1"
}
  */