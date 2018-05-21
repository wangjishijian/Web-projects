$(function(){ 
	if(myWeb.Storage.getValueSession('userId').length>0){
		var serverHref;
		if (window["context"] == undefined) {
		    if (!window.location.origin) {
		        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
		    }
		    window["context"] = location.origin;
		}
		 
	 	serverHref=window["context"];
		
		var servicesUrl =serverHref+"/topsales_services/";
		var baseUrlSys =serverHref+"/toperp/";
		
		$.ajax({
			url : servicesUrl + "login/loginOut",
			type : 'post',
			data : "",
			dataType : 'json',
			async : true,
			success : function(result){
				if(result.code==1){
//					myWeb.Storage.setValueSession("companyName","");
//					myWeb.Storage.setValueSession("logoUrl","");
//					myWeb.Storage.setValueSession("ApiKey","");
//					myWeb.Storage.setValueSession("permissionList",[]);
					myWeb.Storage.setValueSession("userId","");
					myWeb.Storage.setValueSession("userName","");
				}else{
					sweet.auto(result.message);
				}
			},
			error : function(result){
				sweet.auto("网络错误!");
			}
		});
		
	}

}); 


function keyUp(event){
var e = event || window.event || arguments.callee.caller.arguments[0];
if(e && e.keyCode==27){ // 按 Esc 
    //要做的事情
  }
if(e && e.keyCode==113){ // 按 F2 
     //要做的事情
   }            
 if(e && e.keyCode==13){ // enter 键
	 login();
    }
}; 


/**
 * 登录
 */
function login() {
	if($("#mobile").val()==""){
		sweet.auto("请填写用户名!","error",1000);
		return;
	}else if($("#password").val()==""){
		sweet.auto("请填写密码!","error",1000);
		return;
	}else if($("#checkbox-signup").is(":checked")==false){
		sweet.auto("同意服务协议才能登录!","error",1000);
		return;
	}else if($("#dragYZ").html()=="验证通过"){
		var params = {
			userName : $("#mobile").val(),
			password : $("#password").val(),
			companyId:''
		}
		//var serverHref= window.location.origin;
		
		//发布用
		//var serverHref="http://47.93.103.197:8081";
		
		//测试用
		var serverHref;
		if (window["context"] == undefined) {
		    if (!window.location.origin) {
		        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
		    }
		    window["context"] = location.origin;
		}
		 
	 	serverHref=window["context"];
		
		var servicesUrl =serverHref+"/topsales_services/";
		var baseUrlSys =serverHref+"/WebSystem/";
		$.ajax({
			url : servicesUrl + "login/passwordlogin",
			type : 'post',
			data : params,
			dataType : 'json',
			async : true,
			success : function(result){
				if(result.code == 1){
					var apiKey = result.validateMap.apiKey;
					var permissions = result.validateMap.permissions;
					myWeb.Storage.setValueSession("author", apiKey);
					myWeb.Storage.setValueSession("ApiKey",apiKey);
					myWeb.Storage.setValueSession("permissionList", permissions);
					myWeb.Storage.setValueSession("userName", result.validateMap.userName);
					myWeb.Storage.setValueSession("nameCn", result.validateMap.nameCn);
					myWeb.Storage.setValueSession("userId",result.validateMap.userId);
					myWeb.Storage.setValueSession("email",result.validateMap.email);
					myWeb.Storage.setValueSession("mobile",result.validateMap.mobile);
					myWeb.Storage.setValueSession("companyName", result.validateMap.companyName);
					myWeb.Storage.setValueSession("companyLogo", result.validateMap.companyLogo);
					myWeb.Storage.setValueSession("language", 'pagesCn');
					myWeb.Storage.setValueSession("userLevel", result.validateMap.userLevel);
                    myWeb.Storage.setValueSession("companyId", result.validateMap.companyId);
                    myWeb.Storage.setValueSession("headPic", result.validateMap.headPic);
					window.location.href = "index.html";
				}else{
					sweet.auto(result.message);
				}
			},
			error : function(result){
				sweet.auto("网络错误!");
			}
		});
	}else{
		sweet.auto("请滑动验证！","error",1000);
	}
}