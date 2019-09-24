/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-23 23:18:26
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-23 23:19:56
 * @ 文件解释: 
 */

import React from 'react';
import { connect } from 'react-redux';
import { TextareaComponents } from '../components/TextareaComponents';

const TextareaContainer = props => <TextareaComponents {...props} />

export default connect()(TextareaContainer)