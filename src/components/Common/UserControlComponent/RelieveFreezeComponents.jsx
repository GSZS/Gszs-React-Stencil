/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-05 16:18:56
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-06 11:49:34
 * @ 文件解释: 解冻用户
 */

import React,{Fragment, Component} from 'react';

class RelieveFreezeComponent extends Component{

  render(){
    return(
      <Fragment>
        <div
          style={{
            fontSize: '20px'
          }}
        >你确定要解除对
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
          的冻结吗?
      </div>
      </Fragment>
    )
  }
}

export default RelieveFreezeComponent

