/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-04 22:08:25
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-20 22:51:38
 * @ 文件解释: Markdown组件(辅助上传公共组件)
 */

import React,{ useState, useEffect } from 'react';
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it' 

export const MarkdownForm = props => {
  
  const [mdParser] = useState(new MarkdownIt());

  return (
    <div style={{ height: "500px", width: '800px' }}>
      <MdEditor
        value={`请输入项目详情`}
        renderHTML={ text => mdParser.render(text) }
      />
    </div>
  )
}