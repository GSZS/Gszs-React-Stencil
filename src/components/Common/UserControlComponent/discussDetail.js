/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-18 09:42:39
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-21 09:34:22
 * @ 文件解释: 帖子详细信息
 */

import React,{Component} from 'react'
import {DISCUSSQUERYBYID} from '../../../axios/index'
import { message, Card} from 'antd';
import BraftEditor from 'braft-editor'
import './discussDetail.less';

class DiscussDetail extends Component{

  constructor(props){
    super(props)
    this.state = {
      discussDetailData : null
    }
    // _discussQueryById(props.selectRowKeys).then(res => {
    //   if(res && res.status === 200){
    //     this.setState({
    //       discussDetailData: res.data
    //     })
    //   }else{
    //     if(res){
    //       message.error(res.message)
    //     }else{
    //       message.error('非后端抛出的错误,请联系开发人员!')
    //     }
    //   }
    // })
    this.getdiscussDetailData(props.selectRowKeys)
  }

  getdiscussDetailData = (key) => {
    DISCUSSQUERYBYID(key).then(res => {
      if(res && res.status === 200){
        this.setState({
          discussDetailData: res.data
        })
      }else{
        if(res){
          message.error(res.message)
        }else{
          message.error('非后端抛出的错误,请联系开发人员!')
        }
      }
    })
  }

  componentWillReceiveProps(newProps){
    if(this.props.selectRowKeys !== newProps.selectRowKeys){
      this.getdiscussDetailData(newProps.selectRowKeys)
    }
  }

  render(){
    const discussDetail = this.state.discussDetailData;
    var titleToHtml = null;
    if(discussDetail && discussDetail !== null 
      && discussDetail.title !== null){
        titleToHtml = BraftEditor.createEditorState(discussDetail.content).toHTML();
    }
    

    return(
      <div className="BoxContainer">
        <Card title={
          discussDetail && discussDetail.content !== null ? 
            (
              <div dangerouslySetInnerHTML={{__html: titleToHtml}} />
            ) : 
            ''
        } />
        
      </div>
    )
  }
}

export default DiscussDetail;