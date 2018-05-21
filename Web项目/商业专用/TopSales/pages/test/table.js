define(['app','loader'], function (myApp,loader) {
    myApp.controller('tableCtrl',['$scope','$uibModal','I','Upload','uiSelect','Download','Loading','config',function ($scope,$uibModal,I,Upload,uiSelect,Download,Loading,config) {
    	 //开始处理table   visible:false 是否初始化隐藏
        var $table = $('#table'),
        selections = [];
        
        //搜索按钮
        $scope.refreshTable=function () {
        	$table.bootstrapTable("refresh");
        }
        
        //是否初始化 
        initialize_table();
        //初始化表格
        function initialize_table() {
        	$table.bootstrapTable({
                height: 300,//定义表格的高度。
                method:"post",//请求方式
                striped: true,//设置为 true 会有隔行变色效果
                showColumns:true,//显示自定义列
                showRefresh:true,//显示刷新按钮
                dataType: "json",
                responseHandler: responseHandler,//针对angular的处理
                url : config.servicesUrl+"globalports/querygloblports",//请求地址
                ajaxOptions:{headers: {'Authorization':config.author,'sys_source': config.sys_source}},
                columns :[
                           {
                               field: '',
                               checkbox: true,
                               align: 'center'
                           },{
                               field: 'countryName',
                               title: 'countryName',
                               sortable: true,
                               align: 'center',
                               valign: 'middle'
                           },{
                               field: 'nameCn',
                               title: 'nameCn',
                               sortable: true,
                               align: 'center',
                               valign: 'middle'
                           }
                       ]
                ,queryParams: function (params) {
                    var limit = params.limit; //页面大小
                    var offset = params.offset; //页码
                    var currentPage = offset/limit+1;
                    var orderByName = null; //排序名称
                    if( params.sort != undefined){
                        orderByName = params.sort + " " +params.order
                    }
                    var entity = "";
                    var temp = {
                        pageSize : limit, //页面大小
                        pageNo : currentPage, //页码
                        orderColumn : orderByName, //排序
                        name:$scope.obj//参数
                    };
                    return temp;
                },onLoadError: function (status) { //请求错误
                    return false;
                },onLoadSuccess: function (data) { //请求成功
                	overrideTable();
                },onDblClickCell: function (file,value,obj) {
                }
            });
    	}
        
        //改写源码解决不能点击ng-click问题
        $('.checkboxClass').click(function(){
        	overrideTable();
        });
        
        function overrideTable(){
        	$(".overrideTable").each(function(index,ele){//重载方法
                var eleHtml=$(ele).html();
                var compile= $compile(eleHtml)($scope);
                $(ele).html(compile);
            });
        }
        
        
        //防止页面渲染错误
        setTimeout(function () {
        	$table.bootstrapTable('resetView');
        }, 200);

        //responseHandler 处理结果集 在这里处理数据json
        function responseHandler(res) {
            $.each(res.rows, function (i, row) {
                row.state = $.inArray(row.id, selections) !== -1;
            });
            return res;
        }
        
    }]);
});