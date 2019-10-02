/**
 * @ Author: Gszs
 * @ Create Time: 2019-10-02 13:00:35
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-02 13:00:36
 * @ 文件解释: 注册容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import Register from '../components/pages/Register';

const RegisterContainer = props => <Register {...props} />

export default connect()(RegisterContainer);