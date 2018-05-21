define([], function () {
	//var author ="eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiY29ublR5cGVcIjoyLFwic3lzVHlwZVwiOjEsXCJ1c2VySWRcIjozLFwidXNlck5hbWVcIjpcImFkbWluXCIsXCJuYW1lXCI6bnVsbCxcIm5pY2tOYW1lXCI6XCJcIixcInBsYXRmb3JtXCI6bnVsbCxcInBob25lTnVtYmVyXCI6bnVsbCxcImNvbXBhbnlJZFwiOjEsXCJjb21wYW55TmFtZVwiOlwi5pmv55GeXCIsXCJsb2dvXCI6XCJodHRwOi8vZXNoaXBwaW5nLWZpbGVzdG9yZS5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tL3VwbG9hZC9mcmVlX3NoaXBwaW5nXzUxMnB4XzExNjg4NjBfZWFzeWljb24ubmV0LnBuZ1wiLFwiY3VzdG9tZXJJZFwiOm51bGwsXCJkZXB0SWRcIjpudWxsLFwidXNlckxldmVsXCI6MCxcInVzZXJUeXBlXCI6MCxcImZjbExldmVsSWRcIjpudWxsLFwicm9sZUlkc1wiOm51bGwsXCJwZXJtaXNzaW9uc1wiOltcIkZTQy0wMjA0XCIsXCJGU0MtMDIwM1wiLFwiRlNDLTAyMDZcIixcIkZTQy0wMjA1XCIsXCJGU0MtMDIwMlwiLFwiRlNDLTAyMDFcIixcIkZTQy0wMzAxXCIsXCJGU0MtMDMwM1wiLFwiRlNDLTAzMDJcIixcIkZTQy0wMzA1XCIsXCJGU0MtMDMwNFwiLFwiRlNDLTA1MDFcIixcIkZTQy0wNTAyXCIsXCJGU0MtQURNSU5cIixcIkZTQy0wNTAzXCIsXCJGU0MtMDQwMVwiLFwiRlNDLTA0MDJcIixcIkZTQy0wNDAzXCIsXCJGU0MtMDQwNFwiLFwiRlNDLTAyMTRcIixcIkZTQy0wNDA5XCIsXCJGU0MtMDIxM1wiLFwiRlNDLTA0MDhcIixcIkZTQy0wMjEyXCIsXCJGU0MtMDQwN1wiLFwiRlNDLTAyMTFcIixcIkZTQy0wNDA2XCIsXCJGU0MtMDIxMFwiLFwiRlNDLTA0MDVcIixcIkZTQy0wNTA3XCIsXCJGU0MtMDVcIixcIkZTQy0wNTA2XCIsXCJGU0MtMDUwNVwiLFwiRlNDLTA1MDRcIixcIkZTQy0wMVwiLFwiRlNDLTAyXCIsXCJGU0MtMDUwOVwiLFwiRlNDLTAzXCIsXCJGU0MtMDUwOFwiLFwiRlNDLTA0XCIsXCJGU0MtMDUxMFwiLFwiRlNDLTA1MTNcIixcIkZTQy0wNTE0XCIsXCJGU0MtMDUxMVwiLFwiRlNDLTA1MTJcIixcIkZTQy0wNDE0XCIsXCJGU0MtMDQxNVwiLFwiRlNDLTA0MTJcIixcIkZTQy0wNDEzXCIsXCJGU0MtMDIwOVwiLFwiRlNDLTA0MTBcIixcIkZTQy0wNDExXCIsXCJGU0MtMDIwN1wiLFwiRlNDLTAyMDhcIixcIkZTQy0wMTA1XCIsXCJGU0MtMDEwNFwiLFwiRlNDLTAxMDdcIixcIkZTQy0wMTA2XCIsXCJGU0MtMDEwMVwiLFwiRlNDLTAxMDNcIixcIkZTQy0wMTAyXCIsXCJGU0MtMDQxNlwiLFwiRlNDLTA1MTlcIixcIkZTQy0wNDE3XCIsXCJGU0MtMDQxOFwiLFwiRlNDLTA0MTlcIixcIkZTQy0wNTE2XCIsXCJGU0MtMDUxNVwiLFwiRlNDLTA1MThcIixcIkZTQy0wNTE3XCIsXCJGU0MtMDUyMlwiLFwiRlNDLTA0MjBcIixcIkZTQy0wNDIyXCIsXCJGU0MtMDQyMVwiLFwiRlNDLTA0MjRcIixcIkZTQy0wNDIzXCIsXCJGU0MtMDUyMFwiLFwiRlNDLTA1MjFcIixcIkZTQy0wMTE1XCIsXCJGU0MtMDExNFwiLFwiRlNDLTAxMTNcIixcIkZTQy0wMTEyXCIsXCJGU0MtMDExMVwiLFwiRlNDLTAxMTBcIixcIkZTQy0wMTA4XCIsXCJGU0MtMDEwOVwiXSxcInVzZXJQb3J0TGlzdFwiOm51bGwsXCJ1c2VyUm91dGVMaXN0XCI6bnVsbCxcInVzZXJTaGlwcGluZ0xpc3RcIjpudWxsLFwiZW1wbG95ZWVOb1wiOm51bGx9IiwiZXhwIjoyNTMzNzA3MzYwMDB9.NgoJo4uN3o18-J0Dtimylp4uEkS3kj0i3A5CCHf49pA";
	var author = myWeb.Storage.getValueSession('author');
	var permissionList = myWeb.Storage.getValueSession('permissionList');
	//var language = myWeb.Storage.getValueSession('language');
	var language ='pages';
	var companyName = myWeb.Storage.getValueSession('companyName');
	var companyLogo = myWeb.Storage.getValueSession('companyLogo');
	var userName = myWeb.Storage.getValueSession('userName');
	var nameCn = myWeb.Storage.getValueSession('nameCn');
	var userId= myWeb.Storage.getValueSession('userId');
	var mobile=myWeb.Storage.getValueSession('mobile');
	var email=myWeb.Storage.getValueSession('email');
	var logoUrl = myWeb.Storage.getValueSession('logoUrl');
	var userLevel = myWeb.Storage.getValueSession('userLevel');
	var headPic = myWeb.Storage.getValueSession('headPic');
	var pathname = window.location.pathname;
	var	sys_source=pathname.substring(1,pathname.lastIndexOf("/"));
	var pageNo = 1;
	var baseUrl;
	var baseUrlwebsite;
	var servicesUrl;
	var fineFlag="test";//formal;test
	jQuery.support.cors = true;

	 //var serverHref= window.location.origin;
	 //serverHref='http://192.168.1.199:8080'
	 // 
	
	//测试用
	/* var serverHref='http://localhost:8080/';
	 baseUrl ="http://localhost:8080/"+sys_source+"/";*/
	 
	 var serverHref;
	 if (window["context"] == undefined) {
	    if (!window.location.origin) {
	        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
	    }
	    window["context"] = location.origin;
	 }
	 
 	 serverHref=window["context"];
 	 
 	 baseUrl =serverHref+"/"+sys_source+"/";
	 
	 
	 servicesUrl =serverHref+"/topsales_services/";
	 baseUrlwebsite =serverHref+"/topsales_services/";

	/*if(!window.location.origin){
		 var base = location.protocol + "//" + location.hostname + ( location.port ? ':' + window.location.port: '');
		 baseUrl = base+"/"+sys_source+"/";
		 servicesUrl = base+"/shining_services/";
		 baseUrlwebsite = base+"/shining_sys/";
	 }else{
		 var serverHref= window.location.origin;
		 baseUrl =serverHref+"/"+sys_source+"/";
		 servicesUrl =serverHref+"/shining_services/";
		 baseUrlwebsite =serverHref+"/shining_sys/";
	 }*/

	var config={
		author : author,
		userName : userName,
		nameCn : nameCn,
		userId : userId,
		mobile : mobile,
		email : email,
		headPic : headPic,
		permissionList:permissionList,
		companyName : companyName,
		companyLogo : companyLogo,
		logoUrl :logoUrl,
		userLevel:userLevel,
		pathname : pathname,
		sys_source:sys_source,
		fineFlag:fineFlag,//formal;test
		pageNo:pageNo,
		baseUrl:baseUrl,
		baseUrlwebsite:baseUrlwebsite,
		servicesUrl:servicesUrl,
		language:language,//pagesCn
		jsDir:'../'+language+'/',//controller根目录
		controllerJsDir:'../'+language+'/',//controller根目录
		htmlDir:language+'/',//html根目录
		directiveJsDir:'directives/',//directives目录
		serviceJsDir:'services/',//services目录
	}
	return config;
});

