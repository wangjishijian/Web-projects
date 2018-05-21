var sweet = {
	alert : function(title, type) {
		if (title == undefined) {
			title = "";
		}
		if (type == undefined || type == "") {
			type = "warning";
		}
		swal({
			title : title,
			text : "",
			type : type,
			timer : 60000,
			confirmButtonColor : "#6e8cd7",
			showConfirmButton : true
		});
	},
	auto : function(title, type,mis) {
		if (title == undefined) {
			title = "";
		}
		if (type == undefined || type == "") {
			type = "error";
		}
		if (mis == undefined || mis == "") {
			mis = 1000;
		}
		swal({
			title : title,
			text : "",
			type : type,
			timer : mis,
			showConfirmButton : false
		});
	},
	confirm : function(title, type, fun) {
		if (title == undefined) {
			title = "";
		}
		if (type == undefined || type == "") {
			type = "warning";
		}
		swal({
			title : title,
			text : "",
			type : type,
			showCancelButton : true,// 是否显示"取消"按钮
			cancelButtonText : "取消",// 取消按钮的文本内容定义
			confirmButtonText : "确认",// 确定按钮的文本内容
			confirmButtonColor : "#6e8cd7",
			closeOnConfirm : true,
			html:true
		// 点击确认删除之后的页面样式
		}, fun);
	}
}