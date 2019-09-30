/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-30 22:42:19
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-30 22:42:22
 * @ 文件解释: 私人路线容器组件
 */

import React from 'react';
import {connect} from 'react-redux';
import {isMobile} from '../action/settingAction';
import {mobileSelector} from '../selector/settingSelector';
import {loginDataSelector} from '../selector/commonSelector';
import { Private } from '../routes/private';

const PrivateContainer = props => <Private {...props} />

const mapStateToProps = state => {
  return {
    _isMobile: mobileSelector(state),
    loginData: loginDataSelector(state)
  }
}

export default connect(mapStateToProps, {
  isMobile
})(PrivateContainer);