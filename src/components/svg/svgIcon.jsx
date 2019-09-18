/*
 * @Description: SVG图标管理
 * @Author: Gszs 
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-07 22:00:06
 * @Last Modified time: 2019-05-18 18:40:49
 */

/**
 * @description 图标的Type名称
 * @param { icon-kunnanshengrenyuanmingdan } 困难人员
 * @param { icon-fenzu } 美食
 * @param { icon-mingrentang } 名人
 * @param { icon-tianchongxing- } 首页
 * @param { icon-shouyelunbotu } 轮播图
 * @param { icon-rizhi } 日志
 * @param { icon-qiyexinxiguanli_huaban } 企业管理
 * @param { icon-xitongguanli } 系统管理
 * @param { icon-erji-zhengwuyun } 政务
 * @param { icon-xinxi } 信息
 * @param { icon-iconbell } 通知
 * @param { icon-kangjuxiangcun } 乡村
 * @param { icon-wenhuamingsheng } 文化名胜
 * @param { icon-jingqu } 景区
 * @param { icon-caidanguanli } 菜单管理
 * @param { icon-Management } 用户管理
 * @param { icon-jiaoseguanli } 角色管理
 * @param { icon-quanxianguanli } 权限管理
 */

 import {Icon} from 'antd'

 
 // 图标代码地址
 const iconUrl = '//at.alicdn.com/t/font_1339126_q6xqjuqzx9.js';
 
// 创建icon-SVG图标
export const SVGICON = Icon.createFromIconfontCN({
    scriptUrl: iconUrl
})