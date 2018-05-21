define(['app','loader'], function (myApp,loader) {
    myApp.controller('modelCtrl',['$scope','$uibModal','I','Upload','uiSelect','Download','$uibModalInstance',function ($scope,$uibModal,I,Upload,uiSelect,Download,$uibModalInstance) {
    	$scope.close = function () {
            $uibModalInstance.dismiss('cancel');
        };
        
        setTimeout(function(){
        	$('.form_date').datetimepicker({
	            language : 'zh-CN',
	            todayBtn : 1,
	            autoclose : 1,
	            todayHighlight : 1,
	            clearBtn:true,
	            weekStart : 0,
	            startView : 2,
	            minView : 2,
	            forceParse : 0,
	            format : 'yyyy-mm-dd',
	            pickerPosition : "bottom-left"
	        });
        }, 100);
    }]);
});
