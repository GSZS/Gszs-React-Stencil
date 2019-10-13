/* @Description 页面路由总设置
 * @Author: Gszs 
 * @Date: 2019-05-10 09:21:39 
 * @ Modified by: Gszs
 * @ Modified time: 2019-10-13 10:37:08
 */

import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import LoginContainer from './containers/loginContainer';
import RegisterContainer from './containers/RegisterContainer';
import AppContainer from './containers/AppContainer';
// import OutSideForgetPwdContainer from './containers/OutSideForgetPwdContainer'
// 私人路线组件
import PrivateContainer from '@/containers/PrivateContainer'

export default () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/app/dashboard/index" push />}
      />
      <Route path="/app" component={AppContainer} />
      <Route path="/404" component={NotFound} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/Register" component={RegisterContainer} />
      {/* 外部的忘记密码 */}
      {/* <Route path="/forgetpwd" component={OutSideForgetPwdContainer} /> */}
      {/* 私人路线 */}
      <Route path='/private' component={PrivateContainer} />      
      <Route component={NotFound} />
    </Switch>
  </Router>
)