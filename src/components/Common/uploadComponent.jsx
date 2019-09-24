/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-04 22:08:25
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-25 07:57:17
 * @ 文件解释: 表单上传公共组件(涵盖富文本,markdown)
 */

import React, { useState } from 'react';
import {
  Form,
  Input,
  Upload,
  Button,
  Icon,
  message
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import RadioContainer from './FormSmallComponent/containers/RadioContainer';
import TextareaContainer from './FormSmallComponent/containers/TextareaContainer';
import MarkdownContainer from './FormSmallComponent/containers/ MarkdownContainer';
import SelectContainer from './FormSmallComponent/containers/SelectContainer';
import RichContainer from './FormSmallComponent/containers/RichContainer';
import '../../style/components/common/uploadComponent.less';

const BaseFormComponent = props => {

  const [loading] = useState(false);

  // 用来获取原始组件的push方法
  const history = props.routerPath;

  const [fileList, setfileList] = useState([]);

  // 表单配置
  const formList = props.FormConfig;

  // 判断是否要开启横向表格布局
  const checkFormItemLayout = () => {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19, offset: 1 },
      },
    };
    if (props.formItemLayout) return formItemLayout
  }

  // 配置上传
  const uploadConfig = {
    // 移除文件
    onRemove: file => {
      const index = fileList.indexOf(file); //取被删除者下标
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setfileList(newFileList);
    },

    //上传前的操作
    beforeUpload: file => {
      const imgType = ['image/jpeg', 'image/jpg', 'image/png'];

      // 处理图片
      if (file.type.split('/')[0] === 'image') {
        const isLt10M = file.size / 1024 / 1024 < 10; // 限制图片不得大于10M
        const checkImgType = imgType.filter(
          fileType => file.type === fileType
        );
        if (!checkImgType) {
          message.error('图片上传类型只允许JPG , PNG, JPEG,请检查你的格式');
        }
        if (!isLt10M) {
          message.error('图片大小不允许超过10M');
        }
      }

      // 处理视频
      if (file.type.split('/')[0] === 'video') {
        const isLt300M = file.size / 1024 / 1024 < 300; // 限制视频不得大于300M
        if (!isLt300M) {
          message.error('视频大小不允许超过300M');
        }
      }
      setfileList([...fileList, file]);
      return false;
    },

    listType: 'picture-card',
    fileList,
  };

  // 显示上传的文件
  const handleChange = ({ fileList }) => { setfileList(fileList) }

  // 上传提交
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        let formData = {};
        // 处理没有文件的情况
        if (fileList.length === 0) {
          Object.keys(values).map(cv => {
            formData[cv] = values[cv]
          })
        } else {
          let formData = new FormData();
          fileList.forEach(file => {
            formData.append('file', file);
          });
        }
        props.addTableAction(props.interfaceUrl, formData, props.componentName);
        history.push(props.skipUrl) // 跳转到制定页面
      } else {
        message.error(`表单格式有误`);
      }
    });
  };

  // 核心处理(渲染整个表格)
  const initForm = () => {
    const { getFieldDecorator } = props.form,
      FormItem = Form.Item,
      formItemList = [];

    // 正则处理特殊字符
    const RegExpStr = /[^<>&*%$^|\\]+$/gi;

    if (formList && formList.length > 0) {
      formList.forEach(item => {

        let label = item.label,
          field = item.field,
          initialValue = item.initialValue || '',
          placeholder = item.placeholder || '',
          radioDesc = item.radioDesc || [];

        // 文本框
        if (item.type === 'text') {
          const input_text = (
            <FormItem key={field} label={label}>
              {getFieldDecorator(field, {
                rules: [
                  {
                    required: true,
                    message: placeholder,
                  },
                  {
                    pattern: new RegExp(RegExpStr, 'ig'),
                    message: '不允许输入特殊字符',
                  },
                ],
                initialValue: initialValue,
              })(<Input type={item.text} />)}
            </FormItem>
          );
          formItemList.push(input_text);
        }
        // Markdown
        else if (item.type === 'markdown') {
          const input_text = (
            <FormItem key={field} label={label}>
              {getFieldDecorator(field, {
                rules: [
                  {
                    required: true,
                    message: placeholder,
                  }
                ]
              })(<MarkdownContainer />)}
            </FormItem>
          );
          formItemList.push(input_text);
        }
        // 下拉框
        else if (item.type === 'select') {
          const input_text = (
            <FormItem key={field} label={label}>
              {getFieldDecorator(field, {
                rules: [
                  {
                    required: true,
                    message: placeholder,
                  }
                ],
                initialValue: initialValue,
              })(<SelectContainer selectConfig={item} />)}
            </FormItem>
          );
          formItemList.push(input_text);
        }
        // 文本区域
        else if (item.type === 'textarea') {
          const input_textarea = (
            <FormItem key={field} label={label}>
              {getFieldDecorator(field, {
                rules: [
                  {
                    required: true,
                    message: placeholder,
                  },
                  {
                    pattern: new RegExp(RegExpStr, 'ig'),
                    message: '不允许输入特殊字符',
                  },
                ],
                initialValue: initialValue,
              })(<TextareaContainer />)}
            </FormItem>
          );
          formItemList.push(input_textarea);
        }
        // 单选框
        else if (item.type === 'radio') {
          const radioInput = (
            <FormItem label={label}>
              {getFieldDecorator(field)(<RadioContainer radioConfig={radioDesc} />)}
            </FormItem>
          )
          formItemList.push(radioInput);
        }
        // 富文本
        else if (item.type === 'richText') {
          const richText = (<FormItem key={field} label={label} >
            {getFieldDecorator(field)(<RichContainer />)}
          </FormItem>)
          formItemList.push(richText);
        }
        // 文件 
        else if (item.type === 'file') {
          const input_file = (
            <FormItem key={field} label={label}>
              {getFieldDecorator(field)(
                <Upload
                  {...uploadConfig}
                  onChange={handleChange}
                >
                  <Button>
                    <Icon type="upload">上传</Icon>
                  </Button>
                </Upload>
              )}
            </FormItem>
          );
          formItemList.push(input_file);
        }
      });
    }
    return formItemList;
  };

  return (
    <Form onSubmit={handleSubmit} {...checkFormItemLayout()} >
      {initForm()}
      <FormItem>
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          className="submitButton"
        >
          {loading ? `${props.submitButtonName}中` : `${props.submitButtonName}`}
        </Button>
      </FormItem>
    </Form>
  );
};

export default Form.create()(BaseFormComponent);
