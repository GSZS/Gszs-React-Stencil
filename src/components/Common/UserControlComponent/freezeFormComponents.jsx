/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-05 14:08:48
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-05 21:31:13
 * @ 文件解释: 冻结用户
 */

import React,{Fragment, Component} from 'react';

class FreezeComponent extends Component{

  render(){

    return(
      <Fragment>
        <div
          style={{
            fontSize: '20px'
          }}
        >你确定要冻结用户
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

export default FreezeComponent

