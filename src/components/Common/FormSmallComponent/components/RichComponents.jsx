/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-25 07:43:26
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-25 07:57:04
 * @ 文件解释: 富文本UI组件
 */

import React,{ useState, useEffect } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const RichComponent = () => {

  // 初始化富文本内容
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorContent, setEditorContent] = useState(undefined);

  // 每次编辑器状态发生改变的时候调用这个函数,传递的参数是EditorState类型
  const onEditorStateChange = editorState => {
    setEditorState(editorState)
  };
  // 异步上传富文本中的图片,获取返回的链接
  const imageUploadCallBack = file => {
    let imageUploadPromise = new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'xxx'); // 定义的图片地址
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

  // 每次编辑器状态发生改变的时候调用这个函数,传递的参数是RawDraftContentState类型
  const onEditorChange = editorContent => {
    setEditorContent(editorContent)
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="home-toolbar"
        wrapperClassName="home-wrapper"
        editorClassName="home-editor"
        localization={{ locale: 'zh', translations: { 'generic.add': '添加' } }}
        wrapperClassName="wysiwyg-wrapper"
        placeholder="请输入正文"
        onEditorStateChange={onEditorStateChange}
        onContentStateChange={onEditorChange} 
        toolbar={{
          history: { inDropdown: true },
          inline: { inDropdown: false },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          image: { uploadCallback: imageUploadCallBack },
        }}
      />
    </div>
  )
}