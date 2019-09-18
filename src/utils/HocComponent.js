/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-07-02 16:52:07
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-07-03 14:12:14
 * @ 文件解释: HOC下的包装组件
 */

/**
 * @description 作用处理为各种组件添油加醋,下面是模板组件写法
 */

import React,{Component} from 'react';
import PropTypes from 'prop-types'


export const wrapHocAuth = ComposeComponent => class WrapComponent extends Component{
  constructor(props){
    super(props)
  }

  static propTypes = {
    auth: PropTypes.string.isRequired
  }

  render(){
    return <ComposeComponent {...this.props} />
  }
}

