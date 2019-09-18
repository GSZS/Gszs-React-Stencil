/**
 * @ Author: Gszs
 * @ Create Time: 2019-08-05 10:34:32
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-05 10:55:12
 * @ 文件解释: 
 */

import React from 'react';
import {connect} from 'react-redux';
import LoserControlColumns from '../components/Common/BaseControlComponent/LoserControlComlumns';
import {logDataSelector, logDataTotalSelector} from '../selector/settingSelector';
import {LogAction} from '../action/settingAction';

const LoserControlColumnContainer = props => <LoserControlColumns {...props} />

const mapStateToProps = state => {
  return {
    logData: logDataSelector(state),
    logDataTotal: logDataTotalSelector(state),
    loading: state.logDataReducer.loading
  }
}


export default connect(mapStateToProps, {
  LogAction
})(LoserControlColumnContainer);
