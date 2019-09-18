/* @Description 页面路由总设置
 * @Author: Gszs 
 * @Date: 2019-05-10 09:21:39 
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-18 21:36:42
 */

import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import LoginContainer from './containers/loginContainer';
import AppContainer from './containers/AppContainer';

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
      <Route component={NotFound} />
    </Switch>
  </Router>
)