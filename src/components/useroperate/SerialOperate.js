/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-01 01:00:32
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-18 23:01:29
 * @ 文件解释: 序列号创建
 */

import React from 'react';
import {Form, InputNumber, Input, Card, Cascader, Button, message} from 'antd';
import {SVGICON} from '../svg/svgIcon';
import district from '../../assets/City';
import {CreateSerial} from '../../axios/index';
import BreadcrumbCustom from '../BreadcrumbCustom'

const SerialOperate = props => {
  const FormItem = Form.Item;
  const {getFieldDecorator} = props.form;

  const handleSubmit = e => {
    e.preventDefault ();
    props.form.validateFieldsAndScroll ((err, values) => {
      if (!err) {
        const effectiveTime = values.effectiveTime,
          province = values.province[0],
          city = values.province[1],
          schoolName = values.schoolName,
          {history} = props;
        const objParam = {effectiveTime, province, city, schoolName};
        CreateSerial (objParam).then (res => {
          if (res.status === 200) {
            // 跳转到序列号管理
            message.success (`创建序列号成功 : ${res.data.serialNumber}`);
            history.push ('/app/usercontrol/SerialAdmin');
          } else {
            message.error (res.message);
          }
        });
      } else {
        message.error ('表单有误,请检查错误');
      }
    });
  };

  return (
    <React.Fragment>
			<BreadcrumbCustom first="序列号创建" second={props.routerTitle} />
      <Card
        title={[
          <SVGICON
						key="svgicon"
            type="icon-xuliehao"
            style={{fontSize: 25 + 'px', paddingRight: 20 + 'px'}}
          />,
          <span>序列号操作</span>,
        ]}
      >
        <Form onSubmit={handleSubmit}>
          <FormItem label="请输入序列号存活时间 - 单位(年)" key="effectiveTime">
            {getFieldDecorator ('effectiveTime', {
              initialValue: 10,
              rules: [
                {
                  required: true,
                  message: '请输入有效时间',
                },
              ],
            }) (<InputNumber min={1} max={365} />)}
          </FormItem>
          <FormItem label="请输入当前省-市-区" key="province">
            {getFieldDecorator ('province', {
              rules: [
                {
                  required: true,
                  message: '请选择省/市/区',
                },
              ],
            }) (<Cascader options={district} placeholder="请选择" />)}
          </FormItem>
          <FormItem label="请输入学校名称" key="schoolName">
            {getFieldDecorator ('schoolName', {
              rules: [
                {
                  required: true,
                  message: '请输入学校名称',
                },
              ],
            }) (<Input placeholder="请输入学校名称" type="text" />)}
          </FormItem>
          <FormItem key="submitButton">
            <Button type="primary" htmlType="submit"> 提交 </Button>
          </FormItem>
        </Form>
      </Card>
    </React.Fragment>
  );
};

export default Form.create () (SerialOperate);
