/**
 * @ Author: Gszs
 * @ Create Time: 2019-08-05 17:31:03
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-10 15:49:27
 * @ 文件解释: 此公共组件用于修改表单内容
 */

import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { stateFromHTML } from 'draft-js-import-html';

const FormItem = Form.Item;
class ModalForm extends Component {

  constructor(props) {
    super(props);
    this.props.getTableByIdAction(this.props.getDataById, this.props.rowId);
    this.state = {
      _data: this.props._oldTableData,
      editorState: EditorState.createEmpty(),
      editorContent: undefined
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props._oldTableData !== state._data) {
      return {
        _data: props._oldTableData,
        // editorState: draftToHtml(EditorState.createWithContent(ContentState.createFromText(props._oldTableData.introduction)))
        editorState: EditorState.createWithContent(stateFromHTML(props._oldTableData.introduction))
      }
    } return null;
  }

  // 处理富文本事件
  onEditorStateChange(editorState) {
    this.setState({ editorState });
  };
  onEditorChange(editorContent) {
    this.setState({ editorContent });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { _data, editorState } = this.state;

    return (
      <Form className="login-form">
        <FormItem label="名称">
          {getFieldDecorator('roleName', {
            rules: [
              {
                required: true,
                message: '名称不能为空'
              },
            ],
            initialValue: _data.townName
          })(
            <Input
              prefix={
                <Icon type="user"
                  style={{ color: 'rgba(0,0,0,.25)' }}
                />
              }
              placeholder="名称"
            />
          )}
        </FormItem>
        <FormItem label="描述">
          {getFieldDecorator('roleNameDesc', {
            rules: [
              {
                required: true,
                message: '描述不能为空'
              },
            ]
          })(
            <Editor
              editorState={editorState}
              toolbarClassName="home-toolbar"
              wrapperClassName="home-wrapper"
              editorClassName="home-editor"
              localization={{ locale: 'zh', translations: { 'generic.add': '添加' } }}
              wrapperClassName="wysiwyg-wrapper"
              placeholder="请输入正文"
              onEditorStateChange={this.onEditorStateChange} // 每次编辑器状态发生改变的时候调用这个函数,传递的参数是EditorState类型
              onContentStateChange={this.onEditorChange} // 每次编辑器状态发生改变的时候调用这个函数,传递的参数是RawDraftContentState类型
              toolbar={{
                history: { inDropdown: true },
                inline: { inDropdown: false },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                // image: { uploadCallback: this.imageUploadCallBack },
              }}
            />
          )}
        </FormItem>
      </Form>
    );
  }
}

const WrappedUpdateFormData = Form.create()(ModalForm);

export default WrappedUpdateFormData;




