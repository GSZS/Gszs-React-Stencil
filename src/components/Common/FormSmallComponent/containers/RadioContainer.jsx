/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-23 23:17:28
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-23 23:17:51
 * @ 文件解释: 单选框容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { RadioComponents } from '../components/RadioComponents';
import { GetAllPjAction } from '../../../../action/project/projectAction'
import { getAllPjTypes } from '../../../../selector/project/projectSelector';

const RadioContainer = props => <RadioComponents {...props} />

const mapStateToProps = state => {
  return {
    _allPjTypes: getAllPjTypes(state)
  }
}

export default connect(mapStateToProps, {
  GetAllPjAction
})(RadioContainer)