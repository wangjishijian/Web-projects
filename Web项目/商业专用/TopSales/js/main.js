require.config({
	//配置总路径
	//baseUrl : "/",
	paths : {
		// 其他模块会依赖他
		'ui.route':'../lib/angular-ui-router/release/angular-ui-router.min',
		'angular' : '../lib/angular/angular.min',
		'angularAMD' : '../lib/angularAMD/angularAMD',
		'angular-sanitize':'../lib/angular-sanitize/angular-sanitize.min',
		'ui-bootstrap':'../lib/angular-bootstrap/ui-bootstrap.min',
		'ui-bootstrap-tpls':'../lib/angular-bootstrap/ui-bootstrap-tpls.min',
		'ui-select':'../lib/angular-ui-select/dist/select',
		'loader':'loader',
		'config':'common/config',
		'appModule':'appModule',
		'app':'app'
	},
	shim : {
		// 表明该模块依赖angular
		'angularAMD' : [ 'angular'],
		'angular-route' : [ 'angular'],
		'ui.route':['angular'],
		'ui-bootstrap' : [ 'angular'],
		'ui-bootstrap-tpls' : [ 'angular','ui-bootstrap'],
		'ui-select':['angular'],
		'angular-sanitize' : [ 'angular' ],
		'appModule':['angular'],
		'app':['appModule']
	},
	urlArgs : "v=" + new Date().getTime(),
	// 启动程序 js/scripts/app.js
	deps : [ 'app' ]
});



