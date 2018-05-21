define(['common/jqeruyApp','config','loader'], function (jqeruyApp,config,loader) {
	var appModule=angular.module('appModule',[]);
	appModule.value('config', config);
	appModule.controller("homeCtrl",["$scope",'$rootScope','Loading','config','I','$uibModal',function($scope,$rootScope,Loading,configServices,I,$uibModal){
		//Loading.retain("followTemplateList");
		//Loading.release("followTemplateList");
		$scope.menuStatus=false;
		//var permissionList=configServices.permissionList;
		var permissionList="[\"FMS-01\"]";
		//var author=configServices.author;
		$scope.userName=configServices.userName;
		$rootScope.companyName=configServices.companyName;
		$rootScope.headPic=configServices.headPic;
		var author='asdf';
		if(!permissionList || permissionList=='' || !author || author.length==0){
			//sweet.alert('身份过期，请重新登录', "warning");
			swal({
					title: "身份过期，请重新登录!",
					text: "",
					type: "warning",
					allowEscapeKey:'false',
					confirmButtonColor: "#DD6B55",
					confirmButtonText: "重新登录",
					closeOnConfirm: false
				},
				function(){
					I.toLoginPage();
				});
			return;
		}
		permissionList= eval("(" + permissionList + ")");
		if(permissionList.length == 0){
			I.toLoginPage();
			return;
		}
		$scope.menuStatus=true;
		jQuery('#sidebar-menu').removeClass('hidden');

		$scope.loginOut=function(){
			swal({
					title: "您确定退出吗？",
					text: "",
					type: "warning",
					showCancelButton: true,
					confirmButtonColor: "#DD6B55",
					confirmButtonText: "退出",
					cancelButtonText: "取消",
					closeOnConfirm: false
				},
				function(){
					I.loginOut();
				});

		}

		//权限检验
		$scope.permissionFun=function(permission){
			for(var i=0;i<permissionList.length;i++){
				if(permission==permissionList[i]){
					return true;
				}
			}
			return false;
		}
		//客服QQ链接
		$scope.PlayJsAdPopWin=function(){
			popwin = window.location.href = 'tencent://message/?uin=3361338348&Site=公司QQ服务号&Menu=yes';
		}

		setTimeout(function(){
			//初始化菜单栏
			new jqeruyApp().init();
		},200)
		//获取cookies
		 $scope.getCookie = function(name){
			 var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			 if(arr=document.cookie.match(reg))
			 return unescape(arr[2]);
			 else
			 return null;
		}
		/*if($scope.getCookie('tipsAnnouncement') == 'yes'){
			
		}else{
			//弹出公告
			loader.load('notice/gonggao',function(){
	    		$uibModal.open({
		        	templateUrl: 'pages/notice/gonggao.html',
		            size: 'sm_modal',
		            controller:"gonggaoCtrl"
		        });
	    	})
		}*/
		
	}]);


	/*****************************************************************************************
	 * uiSelect服务
	 ******************************************************************************************** */
	appModule.factory('uiSelect',['I', function (I) {
		var service = {};
		service.refreshFun=function(url,params,callback){
			I.httpPost(url,params,null,function(res){
				var  results={model:null,list:res }
				callback(results);
			});
		}
		return service;
	}]);
	/*****************************************************************************************
	 * download服务
	 ******************************************************************************************** */
	appModule.factory('Download',['I','config', function (I,configServices) {
		var service = {};
		/*导出模板*/
		service.exportTemplate=function(fileName,callback){
			var url = configServices.servicesUrl+"common/downloadtemplet?fileName="+fileName+"&sys_source="+configServices.sys_source;
			openUrl(url);
		}

		/*下载文件*/
		service.downloadfile=function(alifileName,fileName,callback){
			if(fileName == null){
				fileName = "";
			}
			var url = configServices.servicesUrl+"common/downloadfile";
			var newwindow = window.open();
			var newform = "<form action=\""+url+"\" method=\"post\" accept-charset=\"UTF-8\">"
				+"<input type=\"text\" style=\"display:none;\" name=\"Authorization\" value=\""+configServices.author+"\">"
				+"<input type=\"text\" style=\"display:none;\"  name=\"sys_source\" value=\""+configServices.sys_source+"\">"
				+"<input type=\"text\" style=\"display:none;\"  name=\"alifileName\" value=\""+alifileName+"\">"
				+"<input type=\"text\" style=\"display:none;\"  name=\"fileName\" value=\""+fileName+"\">"
				+"<button type=\"submit\" style=\"display:none;\" value=\"提交\"></button>"
				+"</form>";
			$(newwindow.document).find("body").append(newform);
			$(newwindow.document).find("button").click();
		}
		function openUrl(url){
			if(url!=null && url!=""){
				var newwindow = window.open();
				if(url.indexOf("http:")!=0){
					url=servicesUrl+url;
				}
				if(author==null){
					author="";
				}
				if(sys_source==null){
					sys_source="";
				}
				var newform = "<form action=\""+url+"\" method=\"post\">"
					+"<input type=\"text\" style=\"display:none;\" name=\"Authorization\" value=\""+author+"\">"
					+"<input type=\"text\" style=\"display:none;\"  name=\"sys_source\" value=\""+sys_source+"\">"
					+"<button type=\"submit\" style=\"display:none;\" value=\"提交\"></button>"
					+"</form>";
				$(newwindow.document).find("body").append(newform);
				$(newwindow.document).find("button").click();
			}
		}
		return service;
	}]);

	/*****************************************************************************************
	* Loading服务
	******************************************************************************************** */
	appModule.factory('Loading', function () {
		var service = {};
		service.retainCount = 0;

		service.retain = function (msg) {
			service.retainCount++;
			if (service.retainCount == 1)$('#loadingToast').show();
		};

		service.release = function (msg) {
			service.retainCount--;
			if (service.retainCount <= 0) {
				$('#loadingToast').hide();
			}
		}
		return service;
	});

	/*****************************************************************************************
	 * 拦截器服务
	 * 在每个http里面增加header,携带apikey
	 ******************************************************************************************** */
	appModule.factory('ApikeyInterceptor', ['$q','config', function ($q,configServices) {
		return {
			request: function (configs) {
				if (configServices.author && configs.url && configs.url.indexOf(configServices.servicesUrl) == 0) {
					configs.headers["Authorization"] =configServices.author;
					configs.headers["sys_source"] =configServices.sys_source;
				}
				return configs;
			},
			response: function (response) {
				return response || $q.when(response);
			}
		};
	}]);
	appModule.filter('trustHtml', function ($sce) {
	        return function (input) {
	            return $sce.trustAsHtml(input);
	        }
	});
	loader.loadServices(['package/I','package/Dict','package/Upload'],function(){
	});
	loader.loadDirectives(['package/pagination','package/areaChoice'],function(){
	});

	return appModule;
});