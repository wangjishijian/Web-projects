define([ 'routes','loader','angularAMD','config','angular-sanitize','ui-bootstrap', 'ui.route','ui-select','ui-bootstrap-tpls'],
	function(routes,loader,angularAMD,config) {
	var app = angular.module('webapp', ['ngSanitize','ui.bootstrap', 'ui.router','ui.select','appModule']);
	app.value('userInfo', {token: '', status: '', authInfo: ''});
	//app.value('config', config);
	app.config(['$stateProvider','$urlRouterProvider','$httpProvider',function($stateProvider, $urlRouterProvider,$httpProvider) {
		// 配置路由
		if (routes.routes != undefined) {
			angular.forEach(routes.routes, function(route, path) {
				$stateProvider.state(path, {
					templateUrl : route.templateUrl,
					url : route.url,
					controller:route.controller,
					resolve : loader.init(route.dependencies),
				// allowAnonymous: route.allowAnonymous
				});
			});
		}
		// 默认路由
		if (routes.defaultRoute != undefined) {
			$urlRouterProvider.when("", routes.defaultRoute);
		}
		//$locationProvider.html5Mode(true);
		$httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
		$httpProvider.defaults.headers.common['Pragma'] = 'no-cache';
		$httpProvider.interceptors.push('ApikeyInterceptor');
		$httpProvider.defaults.cache = false;
	}]);

	return  angularAMD.bootstrap(app);
});
