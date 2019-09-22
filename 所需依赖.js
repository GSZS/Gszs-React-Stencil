const js = {
  "prop-types": "^15.7.2",                                      // React插件 - 组件类型检测与设定
  "react": "^16.8.6",                                           // React插件 - 核心文件（我最可爱的孩子一哥）
  "react-dom": "^16.8.6",                                       // React插件 - react-dom
  "react-redux": "^7.1.0",                                      // React插件 - react-redux
  "react-router-dom": "^5.0.1",                                 // React插件 - react-router-dom
  "react-vcode": "^1.0.4",                                      // React插件 - 基于React的小型验证码模块
  "react-app-polyfill": "^0.1.3",                               // React插件 - 用于在React中使用常见的ES6功能
  "react-color": "^2.14.1",                                     // React插件 - 颜色选择器
  "react-cookies": "^0.1.0",                                    // React插件 - 处理Cookies
  "react-dev-utils": "^6.0.4",                                  // React插件 - 此包包含了create-react-app中一些常用的工具函数/工具模块
  "react-document-title": "^2.0.3",                             // React插件 - 处理title
  "react-hot-loader": "^4.8.4",                                 // React插件 - 热更
  "recharts": "^1.3.3",                                         // React插件 - 图表数据分析
  "redux-devtools-extension": "^2.13.8",                        // React插件 - 浏览器开发者工具
  "reselect": "^4.0.0",                                         // React插件 - 扩展state
  "redux": "^4.0.4",                                            // Redux插件 - 核心文件（我最可爱的孩子二哥）
  "redux-thunk": "^2.3.0",                                      // Redux插件 - Redux中间件(处理Action))
  "antd": "^3.23.2",                                            // Antd - 核心文件（我重量最大的孩子）
  "antd-theme-generator": "^1.1.3",                             // Antd - 自定义主题
  "webpack": "4.37.0",                                          // Webpack插件 - 核心文件（我最可爱的孩子之一）
  "webpack-bundle-analyzer": "^3.5.0",                          // Webpack插件 - 分析webpack中各个包的大小，以便优化
  "css-loader": "1.0.0",                                        // Webpack插件 - 用于支持CSS模块化
  "file-loader": "2.0.0",                                       // Webpack插件 - 用于处理文件解析
  "@svgr/webpack": "2.4.1",                                     // Webpack插件 - 优化打包
  "less": "2.7.2",                                              // Webpack插件 - 解析Less样式
  "less-loader": "^4.1.0",                                      // Webpack插件 - 处理Less加载问题
  "mini-css-extract-plugin": "0.4.3",                           // Webpack插件 - 分离优化CSS文件
  "node-sass": "^4.12.0",                                       // Webpack插件 - 处理Sass
  "optimize-css-assets-webpack-plugin": "5.0.1",                // Webpack插件 - 压缩优化CSS文件
  "pnp-webpack-plugin": "1.1.0",                                // Webpack插件 - 模块查找器
  "sass-loader": "7.1.0",                                       // Webpack插件 - 解析Sass样式
  "style-loader": "0.23.0",                                     // Webpack插件 - 将css-loader打包好的css代码以<style>标签的形式插入到html中
  "terser-webpack-plugin": "1.1.0",                             // Webpack插件 - 压缩优化
  "url-loader": "1.1.1",                                        // Webpack插件 - 处理路径解析的问题
  "webpack-cli": "^3.3.6",                                      // Webpack插件 - 配合Webpack核心文件
  "webpack-dev-server": ">=3.1.11",                             // Webpack插件 - 小型服务器
  "webpack-hot-middleware": "^2.25.0",                          // Webpack插件 - 热重载
  "webpack-manifest-plugin": "2.0.4",                           // Webpack插件 - manifest
  "workbox-webpack-plugin": "3.6.2",                            // Webpack插件 - 配合PWA
  "html-webpack-plugin": "4.0.0-alpha.2",                       // Webpack插件 - 为打包生成Html预提供一个Html模版
  "@babel/core": "7.1.0",                                       // Babel - 核心文件（我最闹心的孩子）
  "@babel/plugin-proposal-decorators": "^7.4.4",                // Babel插件 - 支持使用修饰符写法
  "babel-eslint": "9.0.0",                                      // Babel插件 - 让Eslint代码检测时，支持一些新语法，比如Eslint本身不认识修饰器@
  "babel-jest": "23.6.0",                                       // Babel插件 - 让jest代码测试时，支持一些新语法
  "babel-loader": "8.0.4",                                      // Babel插件 - 解析项目中Js的一些新语法
  "babel-plugin-import": "^1.9.1",                              // Babel插件 - 处理Antd的按需加载
  "babel-plugin-named-asset-import": "^0.2.2",                  // Babel插件 - 处理Antd的按需加载
  "babel-plugin-transform-decorators-legacy": "^1.3.5",         // Babel插件 - 支持ES7 修饰器语法Decorator
  "babel-preset-react-app": "^5.0.3",                           // Babel插件 - 支持react语法
  "eslint": "5.6.0",                                            // Eslint插件 - 核心文件
  "eslint-config-react-app": "^3.0.3",                          // Eslint插件 - 让Eslint支持检测React语法（JSX）（.eslintrc.json中配置的plugins参数）
  "eslint-loader": "2.1.1",                                     // Eslint插件 - 打包时检测代码规范时用
  "eslint-plugin-flowtype": "2.50.1",                           // Eslint插件 - 检测是否符合flow类型检查
  "eslint-plugin-import": "2.14.0",                             // Eslint插件 - 检测导入是否有错(例如模块名称)
  "eslint-plugin-jsx-a11y": "6.1.1",                            // Eslint插件 - 检测导入是否有错(例如模块名称)
  "eslint-plugin-react": "7.11.1",                              // Eslint插件 - 配置React的Eslint规则
  "jest": "23.6.0",                                             // Jest插件 - 核心文件（孤儿捡来的）
  "jest-pnp-resolver": "1.0.1",                                 // Jest插件 - 1
  "jest-resolve": "23.6.0",                                     // Jest插件 - 2
  "js-cookie": "^2.2.0",                                        // Jest插件 - 3
  "axios": "^0.19.0",                                           // 插件 - 请求有关Axios
  "core-js": "^3.1.4",                                          // 插件 - es5 , es6垫片库
  "markdown-it": "^10.0.0",                                     // 插件 - markdown
  "moment": "2.18.1",                                           // 插件 - 时间处理
  "react-markdown-editor-lite": "^0.4.3",                       // 插件 - markdown
  "styled-components": "^4.3.2",                                // 插件 - 用于在Component中更加个性化样式
  "bfj": "6.1.1",                                               // 插件 - 优化处理大量JSON
  "case-sensitive-paths-webpack-plugin": "2.1.2",               // 插件 - 强制导入模块的路径名称与磁盘上的名称相符合
  "chalk": "2.4.1",                                             // 插件 - 美化终端打印
  "classnames": "^2.2.6",                                       // 插件 - 如果订阅的State发生了变化，对应的UI的可以动态发生变化
  "dotenv": "6.0.0",                                            // 插件 - Dotenv是一个零依赖模块，可以将.env文件中的环境变量加载到process.env
  "dotenv-expand": "4.2.0",                                     // 插件 - 配合Dotenv
  "draft-js-import-html": "^1.4.1",                             // 插件 - 富文本    
  "draftjs-to-html": "^0.8.4",                                  // 插件 - 富文本    
  "draftjs-to-markdown": "^0.5.1",                              // 插件 - 富文本    
  "echarts": "^4.2.0-rc.1",                                     // 插件 - Echarts - 核心文件
  "echarts-for-react": "^2.0.15-beta.0",                        // 插件 - Echarts - 让Echarts支持React
  "fs-extra": "7.0.0",                                          // 插件 - 扩展Node的fs模块
  "nprogress": "^0.2.0",                                        // 插件 - 顶部进度条
  "postcss-flexbugs-fixes": "4.1.0",                            // 插件 - postcss-1
  "postcss-loader": "3.0.0",                                    // 插件 - postcss-2
  "postcss-preset-env": "6.0.6",                                // 插件 - postcss-3
  "postcss-safe-parser": "4.0.1",                               // 插件 - postcss-4
  "qs": "^6.7.0",                                               // 插件 - 配合axios用于Json化Post请求携带的data
  "query-string": "5",                                          // 插件 - 解析Url
  "react-draft-wysiwyg": "^1.12.13",                            // 插件 - 富文本
  "redux-alita": "^1.0.0",                                      // 插件 - 这个孩子需要删除(到时看看如何解耦)
  "resolve": "1.8.1",                                           // 插件 - 处理模块路径的问题
  "screenfull": "^3.3.3",                                       // 插件 - 平滑全屏展示功能
}