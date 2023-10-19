const webpack = require('webpack');
const window = require('./config/config');

module.exports = {
	// production 的路徑 folder
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
	// build 時不產生雜湊值
	filenameHashing: false,
	// 不產生 production 環境的 source map
	productionSourceMap: false,

	// 開發時使用，避免串接 api 的 CORS 問題
	devServer: {
		proxy: {
			'/baseProxy': {
			 target: window.__env.url.BASE_HOST,
			 changeOrigin: true,
			 pathRewrite: {
			  '^/baseProxy': '',
			 },
			},
			'/api': {
			 target: 'http://hedgedoc.flowring.com',
			 changeOrigin: true,
			 pathRewrite: {
			  '^/api': ''
			 }
			},
		   },
		  },
	// 設定 css 全域變數
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
				@import "@/assets/styles/_variable.scss";
	            `,
			},
		},
	},
	chainWebpack: (config) => {
		// 維護 api url，build後仍可修改
		config.plugin('copy').tap(([pathConfigs]) => {
			pathConfigs.patterns.unshift({
				from: 'config',
				to: 'config',
			});
			return [pathConfigs];
		});
		// 使 router 在 tomcat 下可以正常運行
		config.plugin('copy').tap(([pathConfigs]) => {
			pathConfigs.patterns.unshift({
				from: 'WEB-INF',
				to: 'WEB-INF',
			});
			return [pathConfigs];
		});
		// 提供全域使用
		config.plugin('provide').use(webpack.ProvidePlugin, [
			{
				_: 'lodash',
				dayjs: 'dayjs',
			},
		]);
	},
	}
