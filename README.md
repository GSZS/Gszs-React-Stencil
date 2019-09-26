#### React模版

#### 🌱 文件蓝图

```js
.              
├── build                          // 打包生成build
│   
├── config                         // webpack配置存放
│  ├── jest                        // jest测试            
│  ├── env.js                      
│  ├── path.js                     // 环境path
│  ├── webpack.config.dev.js       // 开发环境webpack配置
│  ├── webpack.config.prod.js      // 生产环境webpack配置
│  └── webpackDevServer.config.js  // webpack服务器
│
├── node_modules         // 依赖模块
│
├── public               // 公共文件存放
│
├── screenshots          // 存储logo
│
├── scripts              // package.json中脚本命令对应的配置
│  ├── build.js          // 打包（线上）
│  ├── start.js          // 本地（开发模式）
│  └── test.js           // 测试
│
├── src                  
│  ├── action            // redux-action
│  ├── assets            // 静态文件存储
│  └── axios             // 封装axios
│      ├── config.js     // 配置请求路径
│      ├── index.js      // axios请求方法
│      └── tools.js      // 封装'get', 'post'方法
│
│  ├── sagas             // 处理有副作用的Action
│  ├── components        // 存放UI组件
│  ├── constants         // 常量(用于配合Saga , Action, Reducer)
│  ├── containers        // 容器组件  
│  ├── reducer           // Reducer（捕获对应的Saga发出的Action，并将处理结果存储与Store）
│  └── routes            // 路由
│      ├── config.js     // 路由路径配置
│      └── index.js      // 导入Root组件，路由路径配置。生成路由核心系统
│
│  ├── selector          // reselector（优化项目，扩展mapStateToProps中State的使用）
│  ├── store             // 储存Redux中的数据 
│  └── style             // 储存样式
│      ├── antd          // 要修改antd样式则在这里修改
│      ├── font          // 字体库
│      ├── mixins        // less的公共mixins写在这
│      └── components    // 组件样式写在这
│
│  ├── utils             // 工具函数
│  ├── App.js            // 核心文件-配合index.js渲染DOM
│  ├── App.test.js       // 测试App.js
│  ├── commonlcon.less   // 公共less
│  ├── constants.js      // 存放公共配置(例如阿里云，七牛云的secretkey)
│  ├── index.js          // 核心文件-将虚拟DOM渲染真实DOM           
│  ├── Page              // 核心文件-路由跳转规则
│  └── serviceWorker.js  // SW
│
├── .eslinrc             // eslint风格配置
│
├── package.json
│
├── theme.js
│
└── README.md                  
```

#### 🌱 该如何使用这个模版呢🤔？

* <b>你需要了解过React生态知识</b>

  * <b>Webpack4.x or Webpack 5.x</b>

  * <b>React</b>

  * <b>React-router</b>

  * <b>Redux</b>

  * <b>Antd</b>

  * <b>Redux-Saga</b>
  
  * <b>reselect</b>
  
  * <b>Redux中间件概念</b>


#### 🌵 开始

* <b>这个项目处理请求的流程是这样的</b>

  ```
  1:  创建Action
  2:  Saga处理副作用操作
  3:  Reducer捕获Action
  4:  select扩展state
  5:  制作容器组件
  6:  制作UI组件
  ```