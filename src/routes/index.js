/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-28 11:19:50
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-11 17:18:02
 * @ 文件解释: 控制路由系统
 */

import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import AllComponents from '../components';
import routesConfig from './config';
import queryString from 'query-string'; // 将URL参数解构为对象
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'
// import '../style/font/iconfont.css'

/**
 * @description 核心路由类
 */
export default class CRouter extends Component {
  /**
   * @description 验证权限渲染对应组件
   */
  requireAuth = (permission, component) => {
    const auth = this.props.auth;
    const rolename = auth.rolename;
    if(!rolename || rolename !== permission ){
      return <Redirect to={'404'} />
    }
    // const {permissions} = auth.data;
    // if (!permissions || !permissions.includes (permission))
    //   return <Redirect to={'404'} />;
    return component;
  };

  /**
   * @description 验证登录
   */
  requireLogin = (component, permission) => {
    nprogress.done();
    const auth = this.props.auth;
    if (!auth) { // 判断是否登录
      return <Redirect to={'/login'} />;
    }
    // return permission ? this.requireAuth (permission, component) : component;
    return component;
  };

  render () {

    return (
      <Switch>
        {Object.keys (routesConfig).map (key =>
          routesConfig[key].map (r => {
            const route = r => {
              // 隐藏不需要显示的组件
              const Component = AllComponents[r.component];
              return (
                <Route
                  key={r.route || r.key}
                  exact
                  path={r.route || r.key}
                  render={props => {
                    nprogress.start()
                    const reg = /\?\S*/g;
                    // 匹配?及其以后字符串
                    const queryParams = window.location.hash.match (reg);
                    // 去除?的参数
                    const {params} = props.match;
                    Object.keys (params).forEach (key => {
                      params[key] =
                        params[key] && params[key].replace (reg, '');
                    });
                    props.match.params = {...params};
                    const merge = {
                      ...props,
                      query: queryParams
                        ? queryString.parse (queryParams[0])
                        : {},
                    };
                    // 重新包装组件
                    const wrappedComponent = (
                      <DocumentTitle title={r.title}>
                        <Component {...merge} routerTitle={r.title} />
                      </DocumentTitle>
                    );
                    // 权限拦截
                    return r.login
                      ? wrappedComponent
                      : this.requireLogin (wrappedComponent, r.auth);
                  }}
                />
              );
            };
            // 处理一级路由跟二级路由
            return r.component ? route (r) : r.subs.map (r => route (r));
          })
        )}
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    );
  }
}
