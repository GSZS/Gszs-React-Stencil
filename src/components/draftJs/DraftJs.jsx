/**
 * @ Author: Gszs
 * @ Create Time: 2019-10-28 21:59:01
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-29 07:45:16
 * @ 文件解释: 测试富文本
 */


import React, { useState, useEffect } from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html'; // TODO: 不能处理img标签
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import htmlToDraft from 'html-to-draftjs';
import './draft.less';

const Gdraftjs = props => {

  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // 创建一个EditorState对象的实例
  const [editorContent, setEditorContent] = useState(undefined);

  /*
   * 创建一个onChange事件，当onChange事件触发，就会返回一个新的EditorState对象实例
   * Editor组件接收到这个新的实例，渲染新的内容
  */
  const onEditorStateChange = editorState => {
    setEditorState(editorState);
  }

  const onContentStateChange = contentState => {
    setEditorContent(contentState);
  }

  console.log('打印editorContent', editorContent);
  console.log('使用转化draftToHtml转化ContentState', draftToHtml(editorContent))

  return (
    <div className="draftBox">
      <Editor
        editorState={editorState}
        toolbarClassName="home-toolbar"
        wrapperClassName="home-wrapper"
        editorClassName="home-editor"
        localization={{ locale: 'zh', translations: { 'generic.add': '添加' } }}
        wrapperClassName="wysiwyg-wrapper"
        placeholder="请输入正文"
        onEditorStateChange={onEditorStateChange} // 每次编辑器状态发生改变的时候调用这个函数,传递的参数是EditorState类型
        onContentStateChange={onContentStateChange}
        toolbar={{
          history: { inDropdown: true },
          inline: { inDropdown: false },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
        }}
      />
    </div>
  )

}

export default Gdraftjs;