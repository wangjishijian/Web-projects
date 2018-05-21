/**
 * Created by wang on 16/2/16.
 */
/**
 * app的资源服务
 *
 */
define([ 'appModule','config' ], function(appModule) {
    appModule.factory('I', ['$http','config', function ($http,configServices) {
        var service = {};

        /**
         * 退出登录
         */
        service.loginOut=function(){
            service.httpPost("syslogin/loginOut",null,null,function(data){
                service.toLoginPage();
            });
        }

        /**
         * 退出登录直接跳转到登录页面并且清理内存
         */
        service.toLoginPage=function(){
            myWeb.Storage.setValueSession("author","");
            myWeb.Storage.setValueSession("permissionList","");

            var hrefUrl= window.location.href;
            var cn=hrefUrl.indexOf('index_cn.html');
            var en=hrefUrl.indexOf('index_en.html');
            if(cn>=0){
                window.location.href=configServices.baseUrl+'login_cn.html';
                return;
            }
            if(en>=0){
                window.location.href=configServices.baseUrl+'login_En.html';
                return;
            }
            window.location.href=configServices.baseUrl+'login.html';

        }


        service.httpGet = function(path,params,callback){
            http(path,params,"GET", null, callback);
        }
        service.httpPost = function(path, params, data, callback){
            http(path,params,"POST", data, callback);
        }
        service.httpPostForm = function(path, params, data, callback){
            http(path,params,"POST", data, callback, {'Content-Type':undefined});
        }
        var http = function(path, params, method, data, callback, headers){

            $http({
                url: configServices.servicesUrl + path,
                method: method,
                params: params,
                data: data,
                headers: headers
            }).success(function (data, status, headers, config) {
                if (typeof data === 'string') {
                    console.warn('API Server wrong json content type: ' + data);
                    data = angular.fromJson(data);
                }
                if(data.code && data.code=='401'){
                    service.doerrfun();
                }
                callback(data);
            }).error(function (data, status, headers, config) {
                if (!data) data = {};
                callback(data);
                service.httpErrorHandler(data, status, headers, config);
            });
        }

        /**
         * 处理401报错方法
         * @param errcode
         */
        service.doerrfun=function(errcode){
            if(errcode == "01"){
                loginOut();
            }else if(errcode == "02"){
                toLoginPage();
            }else{
                toLoginPage();
            }
        }

        // 处理app的异常, 给出相应错误提示.
        service.errorHandler = function (resCode, resDesc) {
            switch (resCode) {
                case '9001':
                    //  Notification.pushNotification({type: 'error', message: resDesc});
                    //userInfo.status = 'logout';
                    break;
                case '9002':
                    // Notification.pushNotification({type: 'error', message: '出现未知异常,建议联系客服.'});
                    break;
                /*default:
                 Notification.pushNotification({type: 'error', message: resDesc});*/
            }
        }

        // 处理app的$http异常, 给出相应错误提示.
        service.httpErrorHandler = function(data, status, headers, config) {
            switch (status) {
                case -1:
                    //Notification.pushNotification({type: 'error', message: '网络异常,请尝试检查网络并重试.'});
                    break;
                case 404:
                    // Notification.pushNotification({type: 'error', message: '请求失败,未找到对应资源.'});
                    break;
                case 500:
                    // Notification.pushNotification({type: 'error', message: '服务器状态异常,可能在维护中,请稍后再试.'});
                    break;
                case 504:
                    // Notification.pushNotification({type: 'error', message: '网关连接超时,可能在维护中,请稍后再试.'});
                    break;
                default:
                // Notification.pushNotification({type: 'error', message: '异常, 状态码:' + status});
            }
        }
        return service;
    }]);
});
