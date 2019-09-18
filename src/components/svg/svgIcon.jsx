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
 */

 import {Icon} from 'antd'

 
 // 图标代码地址
 const iconUrl = '//at.alicdn.com/t/font_1423052_ln6tfbmhiw.js';
 
// 创建icon-SVG图标
export const SVGICON = Icon.createFromIconfontCN({
    scriptUrl: iconUrl
})