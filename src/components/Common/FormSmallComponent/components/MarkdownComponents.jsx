/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-24 09:39:37
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-25 17:14:04
 * @ 文件解释: Markdown-UI组件
 */

import React,{ useState } from 'react';
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it' 

export const MarkdownComponents = props => {
  
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


