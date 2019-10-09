/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-24 17:12:57
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-09 16:23:56
 * @ Description: 头部的容器组件
 */

import React from 'react';
import {connect} from 'react-redux';
import {mobileSelector} from '../selector/settingSelector';
import HeaderCustom from '../components/HeaderCustom';
import {logout} from '../action/settingAction';


const HeaderCustomContainer = props => <HeaderCustom {...props} />

const mapStateToProps = state => {
  return {
    _isMobile: mobileSelector(state)
  }
}

export default connect(mapStateToProps, {
  logout
})(HeaderCustomContainer)