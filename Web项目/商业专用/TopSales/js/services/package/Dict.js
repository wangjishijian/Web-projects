
define(['appModule'], function (appModule) {
	appModule.factory('Dict',['I', function (I) {
		var service={};

		//省市区数据接口
		service.areaQueryList=function (pid,callBack){
			I.httpPost('area/querylist',{pid:pid},null,function(res){
				callBack(res);
			});
		}
		return service;
	}]);

});