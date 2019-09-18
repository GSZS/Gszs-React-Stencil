#### 此后台管理模版规则

#### 🌱 文件蓝图

```js
.              
├── build                           // 打包生成
│   
├── config                         //  webpack配置存放
│  ├── jest                  
│  ├── env,js                 
│  ├── path.js                  
│  ├── webpack.config.dev.js    
│  ├── webpack.config.prod.js   
│  └── webpackDevServer.config.js
│
├── node_modules         // 依赖模块
│
├── public               // 公共文件存放
│
├── scripts              // package.json中脚本命令对应的配置
│  ├── build.js          // 打包（线上）
│  ├── start.js          // 本地（开发模式）
│  └── test.js           // 测试
│
├── src                  
│  ├── action            // redux-action
│  ├── assets            
│  ├── components        // UI组件
│  ├── constants         // 常量（用于配置Action，Reducer两者中'type',主要是方便管理）
│  ├── containers        // 容器组件  
│  ├── reducer           // redux-reducer（捕获对应的Action，并将处理结果存储与Store）
│  ├── routes            // 路由
│  ├── selector          // reselector（优化项目，扩展mapStateToProps中State的使用）
│  ├── store             // 储存Redux中的数据 
│  ├── style             
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