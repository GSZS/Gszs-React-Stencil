'use strict';

const path = require('path');
const webpack = require('webpack');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const getClientEnvironment = require('./env');
const paths = require('./paths');
const ManifestPlugin = require('webpack-manifest-plugin');
const getCacheIdentifier = require('react-dev-utils/getCacheIdentifier');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const publicPath = '/'; // 为路径增加前缀
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less/;

// 样式解析通用函数
const getStyleLoaders = (cssOptions, preProcessor) => {
	const loaders = [
		require.resolve('style-loader'),
		{
			loader: require.resolve('css-loader'),
			options: cssOptions,
		},
		{
			loader: require.resolve('postcss-loader'),
			options: {
				ident: 'postcss',
				plugins: () => [
					require('postcss-flexbugs-fixes'),
					require('postcss-preset-env')({
						autoprefixer: {
							flexbox: 'no-2009',
						},
						stage: 3,
					}),
				],
			},
		},
	];
	if (preProcessor) {
		loaders.push(require.resolve(preProcessor));
	}
	return loaders;
};

/**
 * @description 核心配置
 */

module.exports = {
	mode: 'development',
	devtool: 'eval', // 设置生成source map的方式
	entry: [
		require.resolve('react-dev-utils/webpackHotDevClient'), // 热重载
		paths.appIndexJs, // src/index.js
	],
	output: {
		pathinfo: true, // 带上注释,开发模式-defaut : true , 生产模式-default : false
		filename: 'static/js/bundle.js', // 赋予生成的bundle名称
		chunkFilename: 'static/js/[name].chunk.js',
		publicPath: publicPath,
		// 用于存储所有输出文件到本地磁盘
		devtoolModuleFilenameTemplate: info =>
			path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
	},
	externals: {
		'react': 'React',
		'moment': 'moment',
		'react-dom': 'ReactDOM',
		'react-router-dom': 'ReactRouterDOM',
		'echarts': 'echarts'
	},
	optimization: {
		splitChunks: {
			chunks: 'all', // 不管任何类型的块都将被拆解
			name: false,
		},
		runtimeChunk: true, // 优化持久化缓存
	},
	resolve: {
		modules: ['node_modules'].concat(
			process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
		),
		// These are the reasonable defaults supported by the Node ecosystem.
		// We also include JSX as a common component filename extension to support
		// some tools, although we do not recommend using it, see:
		// https://github.com/facebook/create-react-app/issues/290
		// `web` extension prefixes have been added for better support
		// for React Native Web.
		extensions: ['.mjs', '.web.js', '.js', '.json', '.web.jsx', '.jsx'], // 解析扩展
		alias: { // 别名系统
			'react-native': 'react-native-web',
			// 全局相对路径别名，处理相对路径过长和繁琐问题
			'@': paths.appSrc
		},
		plugins: [
			// Adds support for installing with Plug'n'Play, leading to faster installs and adding
			// guards against forgotten dependencies and such.
			PnpWebpackPlugin,
			// Prevents users from importing files from outside of src/ (or node_modules/).
			// This often causes confusion because we only process files within src/ with babel.
			// To fix this, we prevent you from importing files out of src/ -- if you'd like to,
			// please link the files into your node_modules/ and let module-resolution kick in.
			// Make sure your source files are compiled, as they will not be processed in any way.
			new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
		],
	},
	resolveLoader: {
		plugins: [
			// Also related to Plug'n'Play, but this time it tells Webpack to load its loaders
			// from the current package.
			PnpWebpackPlugin.moduleLoader(module),
		],
	},
	module: {
		strictExportPresence: true, // 报告缺少导出的错误
		rules: [
			{ parser: { requireEnsure: false } }, // 暂时禁用解析器
			{
				test: /\.(js|mjs|jsx)$/,
				enforce: 'pre',
				use: [
					{
						options: {
							formatter: require.resolve('react-dev-utils/eslintFormatter'),
							eslintPath: require.resolve('eslint'),

						},
						loader: require.resolve('eslint-loader'),
					},
				],
				include: paths.appSrc,
			},
			{
				oneOf: [ // 当加载规则匹配时,只使用第一个匹配规则
					{
						test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
						loader: require.resolve('url-loader'),
						options: {
							limit: 10000,
							name: 'static/media/[name].[hash:8].[ext]',
						},
					},
					// 调用babel-loader加载器处理
					{
						test: /\.(js|mjs|jsx)$/,
						include: paths.appSrc,
						loader: require.resolve('babel-loader'),
						options: {
							customize: require.resolve(
								'babel-preset-react-app/webpack-overrides'
							),

							plugins: [
								[
									require.resolve('babel-plugin-named-asset-import'),
									{
										loaderMap: {
											svg: {
												ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
											},
										},
									},
								],
								['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
							],
							cacheDirectory: true,
							cacheCompression: false,
						},
					},
					{
						test: /\.(js|mjs)$/,
						exclude: /@babel(?:\/|\\{1,2})runtime/,
						loader: require.resolve('babel-loader'),
						options: {
							babelrc: false,
							configFile: false,
							compact: false,
							presets: [
								[
									require.resolve('babel-preset-react-app/dependencies'),
									{ helpers: true },
								],
							],
							cacheDirectory: true,
							cacheCompression: false,

							sourceMaps: false,
						},
					},
					{
						test: cssRegex,
						exclude: cssModuleRegex,
						use: getStyleLoaders({
							importLoaders: 1,
						}),
					},
					// Adds support for CSS Modules (https://github.com/css-modules/css-modules)
					// using the extension .module.css
					{
						test: cssModuleRegex,
						use: getStyleLoaders({
							importLoaders: 1,
							modules: true,
							getLocalIdent: getCSSModuleLocalIdent,
						}),
					},
					// Opt-in support for SASS (using .scss or .sass extensions).
					// Chains the sass-loader with the css-loader and the style-loader
					// to immediately apply all styles to the DOM.
					// By default we support SASS Modules with the
					// extensions .module.scss or .module.sass
					{
						test: sassRegex,
						exclude: sassModuleRegex,
						use: getStyleLoaders({ importLoaders: 2 }, 'sass-loader'),
					},
					// Adds support for CSS Modules, but using SASS
					// using the extension .module.scss or .module.sass
					{
						test: sassModuleRegex,
						use: getStyleLoaders(
							{
								importLoaders: 2,
								modules: true,
								getLocalIdent: getCSSModuleLocalIdent,
							},
							'sass-loader'
						),
					},
					// Opt-in support for LESS (using .less extensions).
					{
						test: lessRegex,
						exclude: lessModuleRegex,
						use: [
							...getStyleLoaders({ importLoaders: 2 }, 'less-loader'),
							// {
							// 	loader: require.resolve('less-loader'),
							// 		options: {
							// 		  	modifyVars: { "@primary-color": "#001529" },
							// 		},
							// }
						],
					},
					// Adds support for CSS Modules, but using LESS
					// using the extension .module.scss or .module.sass
					{
						test: lessModuleRegex,
						use: getStyleLoaders(
							{
								importLoaders: 2,
								modules: true,
								getLocalIdent: getCSSModuleLocalIdent,
							},
							'less-loader'
						),
					},
					// "file" loader makes sure those assets get served by WebpackDevServer.
					// When you `import` an asset, you get its (virtual) filename.
					// In production, they would get copied to the `build` folder.
					// This loader doesn't use a "test" so it will catch all modules
					// that fall through the other loaders.
					{
						// Exclude `js` files to keep "css" loader working as it injects
						// its runtime that would otherwise be processed through "file" loader.
						// Also exclude `html` and `json` extensions so they get processed
						// by webpacks internal loaders.
						exclude: [/\.(js|mjs|jsx)$/, /\.html$/, /\.json$/],
						loader: require.resolve('file-loader'),
						options: {
							name: 'static/media/[name].[hash:8].[ext]',
						},
					},
				],
			},
			// ** STOP ** Are you adding a new loader?
			// Make sure to add the new loader(s) before the "file" loader.
		],
	},
	plugins: [
		// Generates an `index.html` file with the <script> injected.
		new HtmlWebpackPlugin({
			inject: true,
			template: paths.appHtml,
		}),
		//指定端口可视化查看打包的体积
    new BundleAnalyzerPlugin({ 
			analyzerPort: 8081 
		}),
		// Makes some environment variables available in index.html.
		// The public URL is available as %PUBLIC_URL% in index.html, e.g.:
		// <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
		// In development, this will be an empty string.
		new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
		// This gives some necessary context to module not found errors, such as
		// the requesting resource.
		new ModuleNotFoundPlugin(paths.appPath),
		// Makes some environment variables available to the JS code, for example:
		// if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
		new webpack.DefinePlugin(env.stringified),
		// This is necessary to emit hot updates (currently CSS only):
		new webpack.HotModuleReplacementPlugin(),
		// Watcher doesn't work well if you mistype casing in a path so we use
		// a plugin that prints an error when you attempt to do this.
		// See https://github.com/facebook/create-react-app/issues/240
		new CaseSensitivePathsPlugin(),
		// If you require a missing module and then `npm install` it, you still have
		// to restart the development server for Webpack to discover it. This plugin
		// makes the discovery automatic so you don't have to restart.
		// See https://github.com/facebook/create-react-app/issues/186
		new WatchMissingNodeModulesPlugin(paths.appNodeModules),
		// Moment.js is an extremely popular library that bundles large locale files
		// by default due to how Webpack interprets its code. This is a practical
		// solution that requires the user to opt into importing specific locales.
		// https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
		// You can remove this if you don't use Moment.js:
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		// Generate a manifest file which contains a mapping of all asset filenames
		// to their corresponding output file so that tools can pick it up without
		// having to parse `index.html`.
		new ManifestPlugin({
			fileName: 'asset-manifest.json',
			publicPath: publicPath,
		}),
	],

	// Some libraries import Node modules but don't use them in the browser.
	// Tell Webpack to provide empty mocks for them so importing them works.
	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty',
	},
	// Turn off performance processing because we utilize
	// our own hints via the FileSizeReporter
	performance: false,
};
