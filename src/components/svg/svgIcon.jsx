/*
 * @Description: SVG图标管理
 * @Author: Gszs 
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-07 22:00:06
 * @Last Modified time: 2019-05-18 18:40:49
 */

/**
 * @description 图标的Type名称
 * @param { icon-tianjiaxiangmu } 添加项目
 * @param { icon-wenti } 问题
 * @param { icon-rizhi } 项目日志
 * @param { icon-xiangmu } 项目 
 * @param { icon-gerenziliao } 个人资料
 * @param { icon-tubiao112 } 设置
 * @param { icon-mima } 密码
 * @param { icon-bianji } 编辑
 * @param { icon-xiangji } 相机
 * @param { icon-weixin } 微信
 * @param { icon-github } github
 * @param { icon-qq } qq
 * @param { icon-weibo } 微博 
 * @param { icon-panel } 仪表盘
 * @param { icon-renwu } 任务
 * @param { icon-tongzhi } 通知
 * @param { icon-tongyongleisiyoushitu } 私有项目
 * @param { icon-iconzhengli_xiangmu } 项目
 */

 import {Icon} from 'antd'

 
 // 图标代码地址
 const iconUrl = '//at.alicdn.com/t/font_1423056_24b0xkmyy15.js';
 
// 创建icon-SVG图标
export const SVGICON = Icon.createFromIconfontCN({
    scriptUrl: iconUrl
})
