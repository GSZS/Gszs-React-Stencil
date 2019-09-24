/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-23 23:19:39
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-23 23:19:42
 * @ 文件解释: Markdown容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { MarkdownComponents } from '../components/MarkdownComponents';

const MarkdownContainer = props => <MarkdownComponents {...props} />

export default connect()(MarkdownContainer)