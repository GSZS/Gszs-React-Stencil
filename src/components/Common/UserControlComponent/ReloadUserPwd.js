/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-05 16:19:57
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-11 09:15:29
 * @ 文件解释: 重置用户密码
 */

import React,{Fragment, Component} from 'react';

class ReloadUserPwd extends Component{

  render(){
    return(
      <Fragment>
        <div
          style={{
            fontSize: '20px'
          }}
        >你确定要重置用户
          {
            this.props.selectRowKeys.map((item, index) => {
              return (
                <span 
                  key={index}
                  style={{
                    padding: '0 15px',
                    color: 'red'
                  }}
                >
                  {item}
                </span>
              )   
            })
          }
      </div>
      </Fragment>
    )
  }
}

export default ReloadUserPwd



