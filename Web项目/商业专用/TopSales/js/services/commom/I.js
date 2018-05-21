/**
 * Created by wang on 16/2/16.
 */
/**
 * app的资源服务
 *
 */
define(['app','config'], function(myApp,config) {

    myApp.factory('I', ['userInfo','$http', function (userInfo, $http) {
        var service = {};
        var _load;
        service._load=null;
        
        /**
         * 处理401报错方法
         * @param errcode
         */
        function doerrfun(errcode){
            if(errcode == "01"){
                loginOut();
            }else if(errcode == "02"){
                toLoginPage();
            }else{
                toLoginPage();
            }
        }

        /**
         * 退出登录
         */
        function loginOut(){
            post("syslogin/loginOut", "?sysSource="+sys_source,"callback_loginOut");
        }

        function callback_loginOut(res){
            if(res.code == '1'){
                myWeb.Storage.setValueSession("SCMApiKey","");
                myWeb.Storage.setValueSession("companyName","");
                myWeb.Storage.setValueSession("logoUrl","");
                window.location.href = baseUrl+"login.html";
            }
        }


        /**
         * 退出登录直接跳转到登录页面并且清理内存
         */
        function toLoginPage(){

            myWeb.Storage.setValueSession("SCMApiKey","");
            myWeb.Storage.setValueSession("companyName","");
            myWeb.Storage.setValueSession("logoUrl","");

            var loginSys = myWeb.Storage.getValueSession('loginSys');
            if(loginSys != null && loginSys != ""){
                if(loginSys == "webCh"){
                    window.location.href = baseUrlwebsite+"websiteCh/login/employees_login.html";
                }else if(loginSys == "webEn"){
                    window.location.href = baseUrlwebsite+"/websiteEn/login/employees_login.html";
                }
                myWeb.Storage.setValueSession("loginSys","");
            }else{
                window.location.href = baseUrl+"login.html";
            }
        }


        service.httpGet = function(path,params,callback){
            http(path,params,"GET", null, callback);
        }

        service.httpPost = function(path, params, data, callback){
            http(path,params,"POST", data, callback);
        }

        service.httpPostForm = function(path, params, data, callback){
            http(path,params,"POST", data, callback, {'Content-Type': undefined});
        }

        var http = function(path, params, method, data, callback, postForm){
            var headers={
                'Authorization':config.author,
                'sys_source': config.sys_source
            }
            if(postForm){
                headers['Content-Type']=undefined;
            }
            $http({
                url: config.servicesUrl + path,
                method: method,
                params: params,
                data: data,
                headers: headers
            }).success(function (data, status, headers, config) {
                callback(data);
            }).error(function (data, status, headers, config) {
                if (!data) data = {};
                callback(data);
               // service.httpErrorHandler(data, status, headers, config);
            });
        }

        // 处理app的异常, 给出相应错误提示.
        service.errorHandler = function (resCode, resDesc) {
            switch (resCode) {
                case '9001':
                    //  Notification.pushNotification({type: 'error', message: resDesc});
                    userInfo.status = 'logout';
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
