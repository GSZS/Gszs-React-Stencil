/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-11 14:06:12
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-21 15:04:58
 * @ 文件解释: 存放常用工具函数
 */

import crypto from 'crypto';

/**
 * @description 时间戳转年-月-日-时-分-秒
 * @param {time} time 
 */
export const G_transformTime = (time = +new Date ()) => {
  const date = new Date (time + 8 * 3600 * 1000);
  return date.toJSON ().substr (0, 19).replace ('T', ' ').replace (/-/g, '/');
};

/**
 * @description 处理年级转化: 例如将"一年级"=>"1"
 * @param {data} data 
 */
export const G_transformGrade = data => {
  if (data === null) {
    return '未设置';
  } else {
    switch (data) {
      case '一年级':
        return 1;
      case '二年级':
        return 2;
      case '三年级':
        return 3;
      case '四年级':
        return 4;
      case '五年级':
        return 5;
      case '六年级':
        return 6;
      case '七年级':
        return 7;
      case '八年级':
        return 8;
      case '九年级':
        return 9;
      default:
        return data;
    }
  }
};

// 加密/签名有关
export const cryptoTools = {
  /**
   * @description aes-128-cbc加密要求key , iv都必须是16
   * @param {String} genstr 需要加密的字符串
   * @param {<string> | <Buffer> | <TypedArray> | <DataView>} key
   * @param {<string> | <Buffer> | <TypedArray> | <DataView>} iv
   */  
  genSign_ase_128_cbc(genstr, key, iv){
    let sign = '';
    const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    sign += cipher.update(genstr, 'utf8', 'hex');
    sign += cipher.final('hex');
    return sign;
  },
  
  /**
   * @description aes-128-cbc解密要求key , iv都必须是16
   * @param {String}  加密的字符串
   * @param {<string> | <Buffer> | <TypedArray> | <DataView>} key
   * @param {<string> | <Buffer> | <TypedArray> | <DataView>} iv
   */  
  deSign_aes_128_cbc(desstr, key, iv){
    let sign = '';
    const cipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    sign += cipher.update(desstr, 'hex', 'utf8');    
    sign += cipher.final('utf8');
    return sign;  
  }

}