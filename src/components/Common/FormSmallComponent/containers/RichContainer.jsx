/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-25 07:42:31
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-25 07:42:34
 * @ 文件解释: 富文本容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { RichComponent } from '../components/RichComponents';

const RichContainer = props => <RichComponent {...props} />

export default connect()(RichContainer)