/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-17 10:06:31
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-11 10:37:26
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-07-01 17:02:56
 */

import React, { useState, useEffect, Fragment } from 'react';
import {
  Table,
  Button,
  Popconfirm,
  Form,
  Modal,
  Pagination,
  Tooltip
} from 'antd';
import BreadcrumbCustom from '../../BreadcrumbCustom';
import ModalFormContainer from '../../../containers/ModalFormContainer';

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

  // 使用Tooltip显示一些内容比较长的
  const displaytooltipContent = (e, record, dataIndex) => {
    e.preventDefault();
    // introduction代表表格中的详细内容的字段
    if (dataIndex === 'introduction') {
      // setTooltip(record[dataIndex])
      setTooltip(
        <div
          dangerouslySetInnerHTML={{ __html: record[dataIndex] }}
        />
      )
    }
  }
  const [tooltip, setTooltip] = useState([]);

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
          <Tooltip placement="top" title={tooltip}>
            <td {...restProps} onClick={e => displaytooltipContent(e, record, dataIndex)}>
              {restProps.children}
            </td>
          </Tooltip>
        );
      }}
    </EditableContext.Consumer>
  );
};

// EditableTable
const EditableTable = props => {

  // 接口地址
  const [GET_ALL_DATA, DELETE_ALL_DATA, GET_ALL_DATA_BYID] = props.interfaceUrl;

  // 设置初始值
  const [data, setData] = useState(null),
    [total, setTotal] = useState(10),
    [visible, setVisible] = useState(false),
    [rowId, setRowId] = useState(undefined)

  // 分页
  const [page, setPage] = useState(1);

  // 排序
  const [setSortedInfo] = useState(null);

  // 发送请求
  useEffect(() => {
    getData(page)
  }, [page, props._total, props._reload])

  // 获取数据的核心函数
  const getData = page => {
    props.getTableAction(GET_ALL_DATA, page)

    // 设置数据
    setData(props._tableData);
    setTotal(props._total);
  };


  // 删除操作
  const HandleDelete = id => {
    props.delTableAction(DELETE_ALL_DATA, id);
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
    <Fragment>
      <BreadcrumbCustom
        first={crumbsConfig.first}
        second={crumbsConfig.second}
      />
      <EditableContext.Provider value={props.form}>
        <Table
          components={components} // 用于覆盖默认的table配置
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={data}
          columns={columns}
          onChange={handleChange}
          loading={props.loading}
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
          <ModalFormContainer rowId={rowId} getDataById={GET_ALL_DATA_BYID} />
        </Modal>
      </EditableContext.Provider>
    </Fragment>
  );
};

export default EditableTable;

