/**
 * @ Author: Gszs
 * @ Create Time: 2019-11-20 10:11:20
 * @ Modified by: Gszs
 * @ Modified time: 2019-11-20 10:16:59
 * @ 文件解释: 查缺补漏
 */

 
const compose = (f1, f2) => (str) => f1(f2(str));

const f1 = (str1) => String(str1).toUpperCase();

const f2 = (str2) => str2 + '!';

const newFun = compose(f1 ,f2);
console.log(newFun('hello world'));

