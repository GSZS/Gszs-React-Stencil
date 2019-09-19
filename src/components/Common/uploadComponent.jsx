/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-04 22:08:25
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-19 14:18:51
 * @ 文件解释: 表单上传公共组件(涵盖富文本,markdown)
 */

import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Upload,
  Button,
  Icon,
  message,
  Select,
  Radio
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import '../../style/components/common/uploadComponent.less';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const BaseFormComponent = props => {
  const [loading] = useState(false);

  // 用来获取原始组件的push方法
  const history = props.routerPath;

  // 初始化富文本内容
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorContent, setEditorContent] = useState(undefined)

  const [fileList, setfileList] = useState([])

  const { TextArea } = Input;

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
        sm: { span: 20 },
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

  // 处理富文本事件
  const onEditorStateChange = editorState => {
    setEditorState(editorState)
  };
  // 异步上传富文本中的图片,获取返回的链接
  const imageUploadCallBack = file => {
    let imageUploadPromise = new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://192.168.101.120:8081/web/file/add'); // 定义的图片地址
        const data = new FormData();
        data.append('file', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          const [res] = response.data; // 获取返回的链接
          resolve({ data: { link: res.saveUrl }, picId: res.picId });
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      }
    );

    imageUploadPromise.then(res => {
      // 将富文本中的图片保存在localStore
      if (window.localStorage.getItem('picId')) {
        const _picId = window.localStorage.getItem('picId');
        let picIdArr = Array(1).fill(_picId);
        picIdArr.push(res.picId);
        props.localStoreAction(1, 'picId', picIdArr);
      } else {
        props.localStoreAction(1, 'picId', res.picId);
      }
    })
    return imageUploadPromise;
  }

  const onEditorChange = editorContent => {
    setEditorContent(editorContent)
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
            // 特殊处理默认显示图片,enterpriseQr , enterpriseWxqr
            formData.append('file', file);
          });
        }
        // 处理页面不需要跳转直接刷新当前页面的情况
        props.addTableAction(props.interfaceUrl, formData, props.componentName);
        history.push(props.skipUrl) // 跳转到制定页面
      } else {
        message.error(`表单格式有误`);
      }
    });
  };

  // 处理表格组件
  const initForm = () => {
    const { getFieldDecorator } = props.form, 
          FormItem = Form.Item, 
          { Option } = Select,
          formItemList = [];
          
    // 正则处理特殊字符
    const RegExpStr = /[^<>&*%$^|\\]+$/gi;

    if (formList && formList.length > 0) {
      formList.forEach(item => {

        let label = item.label,
          field = item.field,
          initialValue = item.initialValue || '',
          placeholder = item.placeholder || '',
          radioContent = item.radioContent || [];

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
        // 下拉框
        else if(item.type === 'select'){
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
              })(
                <Select style={{ width: '300px' }}>
                  <Option value={1} key={1}>1</Option>
                  <Option value={2} key={2}>2</Option>
                  <Option value={3} key={3}>3</Option>
                </Select>
              )}
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
              })(
                <TextArea
                  autosize={{
                    minRows: 4,
                    maxRows: 8,
                  }}
                  style={{
                    whiteSpace: 'pre-wrap',
                  }}
                />
              )}
            </FormItem>
          );
          formItemList.push(input_textarea);
        }
        // 单选框
        else if (item.type === 'radio') {
          const radioInput = (
            <FormItem label={label}>
              {getFieldDecorator(field)(
                <Radio.Group>
                  {
                    radioContent.map((item, key) => {
                      return <Radio value={item.value} key={key}> {item.item} </Radio>
                    })
                  }
                </Radio.Group>,
              )}
            </FormItem>
          )
          formItemList.push(radioInput);
        }
        // 富文本
        else if (item.type === 'richText') {
          const richText = (<FormItem key={field} label={label} >
            {getFieldDecorator(field)(
              <div>
                <Editor
                  editorState={editorState}
                  toolbarClassName="home-toolbar"
                  wrapperClassName="home-wrapper"
                  editorClassName="home-editor"
                  localization={{ locale: 'zh', translations: { 'generic.add': '添加' } }}
                  wrapperClassName="wysiwyg-wrapper"
                  placeholder="请输入正文"
                  onEditorStateChange={onEditorStateChange} // 每次编辑器状态发生改变的时候调用这个函数,传递的参数是EditorState类型
                  onContentStateChange={onEditorChange} // 每次编辑器状态发生改变的时候调用这个函数,传递的参数是RawDraftContentState类型
                  toolbar={{
                    history: { inDropdown: true },
                    inline: { inDropdown: false },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    image: { uploadCallback: imageUploadCallBack },
                  }}
                />
              </div>
            )}
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
