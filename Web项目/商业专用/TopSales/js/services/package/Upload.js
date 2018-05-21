
define(['appModule'], function (appModule) {
	appModule.factory('Upload',['I','$http','config' ,function (I,$http,commonConfig) {
		var service = {
			imgType: ["JPG", "PNG"],
			txtType:["DOCX", "XLSX", "PDF", "XLS"],
			exeType:["EXE"],
			zipType:["ZIP", "RAR"],
			fileSize:3
		};
		/**
		 *	文件上传共通方法
		 *
		 * @data 上传参数对象
		 * @flag 上传类型 （1：图片，2：文本）
		 * @size 上传大小
		 * @cb 回调函数
		 * */
		service.upload = function (files,flag, size, callBack) {
			if(files == null && files.length<= 0) {
				sweet.alert("上传对象不能为空！");
				return;
			}
			for(var i=0;i<files.length;i++){
				var file=files[i];
				var fileName = file.name;
				var suffix = fileName.substring(fileName.lastIndexOf(".") + 1).toUpperCase();
				/*if(flag == 1 && $.inArray(suffix, service.imgType) < 0) {
					sweet.alert("请选择" + service.imgType.join(",") + "类型的文件");
					return;
				} else if(flag == 2 && $.inArray(suffix, service.txtType) < 0) {
					sweet.alert("请选择" + service.txtType.join(",") + "类型的文件");
					return;
				}*/

				var uploadSize = file.size;
				size = size == null ? service.fileSize : size;
				if(uploadSize > (size * 1024 * 1024)) {
					sweet.alert("上传文件不能大于" + size + "M");
					return
				}
			}
			var formData = new FormData();
			formData.append('file', files[0]);
			I.httpPostForm("common/uploadfile",null, formData,function(data){
				callBack(data);
			});
		};
		/**
		 *	文件上传共通方法
		 *	@params.url 上传路径
		 * @params.files 上传参数对象
		 * @params.flag 上传类型 （1：图片，2：文本）
		 * @params.size 上传大小
		 * @cb 回调函数
		 * */
		service.importUpload = function (params ,callBack) {
			if(params.files == null && params.files.length<= 0) {
				sweet.alert("上传对象不能为空！");
				return;
			}
			for(var i=0;i<params.files.length;i++){
				var file=params.files[i];
				var fileName = file.name;
				var suffix = fileName.substring(fileName.lastIndexOf(".") + 1).toUpperCase();
				/*if(params.flag == 1 && $.inArray(suffix, service.imgType) < 0) {
					sweet.alert("请选择" + service.imgType.join(",") + "类型的文件");
					return;
				} else if(params.flag == 2 && $.inArray(suffix, service.txtType) < 0) {
					sweet.alert("请选择" + txtType.join(",") + "类型的文件");
					return;
				}*/

				var uploadSize = file.size;
				var size = params.size == null ? service.fileSize :  params.size;
				if(uploadSize > (size * 1024 * 1024)) {
					sweet.alert("上传文件不能大于" + size + "M");
					return
				}
			}
			var formData = new FormData();
			//formData.append('file', params.files[0]);
			formData.append('file', params.files[0]);
			I.httpPostForm(params.url,null, formData,function(data){
				callBack(data);
			});
		};
		return service;
	}]);

});