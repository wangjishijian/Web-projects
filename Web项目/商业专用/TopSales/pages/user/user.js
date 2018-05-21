define(['app','loader'], function (myApp,loader) {
    myApp.controller('userCtrl',['$scope','$uibModal','I','Upload','uiSelect','Download','Loading',function ($scope,$uibModal,I,Upload,uiSelect,Download,Loading) {
    	//这里是参数对象
    	$scope.param={};
    	//分页对象
          $scope.pageData = {
              currentPage: 20,
              pageCount: 1,
              callFun: function (page) {
                  $scope.param.pageNo= page;//赋值给pageNo
                  load();//调用数据
              }
          };
          
          //请求方法
          var load=function(){
             I.httpPost("globalports/querygloblports",null,$scope.param,function(res){
         		$scope.boxList=res.rows;//页面数据赋值
         		$scope.pageData.currentPage = res.pageNo;
                $scope.pageData.pageCount =res.totalPage;
             });
          };
          
          //初始化
          load();
          
          //点击查询
          $scope.dianji = function(){
        	  $scope.param.nameCn=$scope.countryName;
        	  load();//重新搜索
          }
          
          //新打开窗口
          $scope.model = function(noteId,mode){
    		  loader.load('../pages/test/model',function(){
    	    		if(!mode){  mode= noteId ? 'edit': 'new';}
    		        var noteEditor = $uibModal.open({
    		        	templateUrl: 'pages/test/model.html',
    		            size: 'modal',
    		            //backdrop: 'static',写上就是锁定，不写就是不锁定
    		            controller: 'modelCtrl',
    		            resolve: {
    		                data:{},
    		                mode: function () {
    		                    return mode;//还可以设置：'new', 'view'
    		                }
    		            }
    		        });
    		        noteEditor.result.then(
    		            function (result) {//成功
    		            }, function (result) {//失败
    		            }
    		        );
    	    	})
    	  }
    }]);
});