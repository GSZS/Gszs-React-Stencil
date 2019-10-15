/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-04 22:08:25
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-15 11:05:09
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
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImgUrl] = useState('');
  // console.log('打印', props);
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

  // Base64
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => {
        setLoading(false);
        setImgUrl(imageUrl);
      })
    }
  };

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
    // showUploadList: false,
    // fileList,
  };

  // uploadButton按钮
  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">添加文件</div>
    </div>
  );

  // 上传提交
  const handleSubmit = e => {
    props.form.validateFields((err, values) => {
      if (!err) {
        const formData = new FormData();
        // 上传操作都带上user_id
        formData.append('user_id', window.localStorage.getItem('user_id'));
        fileList.forEach(file => {
          formData.append('file', file);
        });
        Object.keys(values).map((cv, index) => {
          formData.append(cv, values[cv]);
        });
        // props._startAction -> 用于在FormAction中做开始请求的中转Action
        props.addFormAction(props.interfaceUrl, formData, props._startAction);
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
          placeholder = item.placeholder || '';

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
                // initialValue: initialValue
              })(<Input type={item.text} placeholder={placeholder} />)}
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
          const input_text = <SelectContainer
            selectConfig={item}
            getFieldDecorator={getFieldDecorator}
          />
          formItemList.push(input_text);
        }
        // 文本区域
        else if (item.type === 'textarea') {
          const input_textarea = <TextareaContainer
            textareaConfig={item}
            getFieldDecorator={getFieldDecorator}
          />
          formItemList.push(input_textarea);
        }
        // 单选框
        else if (item.type === 'radio') {
          const radioInput = <RadioContainer
            getFieldDecorator={getFieldDecorator}
            radioConfig={item}
          />
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
                  {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
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
    <Form onSubmit={handleSubmit} ref={props._ref} {...checkFormItemLayout()} >
      {initForm()}
      {/* 如果没有设置submitButtonName则表示嵌入到Modal里 */}
      <FormItem>
        {
          props.submitButtonName ?
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="submitButton"
            >
              {loading ? `${props.submitButtonName}中` : `${props.submitButtonName}`}
            </Button> :
            <></>
        }
      </FormItem>
    </Form>
  );
};

export default Form.create()(BaseFormComponent);
