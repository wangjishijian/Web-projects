/**
 * 确认框，一般用于确认删除，确认关闭
 * show(config)返回一个deffer
 */
consoleServices.factory('Confirm', ['$uibModal', function ($uibModal) {
    var service = {};

    service.show = function (config,type) {
        var sizeType=['sm','','lg'];
        var size= type? sizeType[type]:'sm';
        var title = config.title || "提示";
        var content = config.content;
        var confirmModal = $uibModal.open({
            size:size ,
            template: '' +
            '<div class="modal-header">' +
            //'<button type="button" class="close" ng-click="instance.dismiss(\'close\')" aria-label="Close"><span aria-hidden="true">&times;</span>' +
            //'</button>' +
            '<h4 class="modal-title">{{title}}</h4>' +
            '</div>' +
            '<div class="modal-body" ng-bind-html="content">'+
            '</div>' +
            '<div class="modal-footer" style="border-top: 0;">' +
            '<button ng-click="instance.close(\'confirm\')" class="btn btn-warning btn-l">{{confirmBtnLabel||"确定"}}</button>' +
            '<button class="btn btn-default btn-l" ng-click="instance.dismiss(\'close\')">取消</button>' +
            '</div>' +
            '',
            backdrop: 'static',
            controller: function ($scope, config, $uibModalInstance) {
                $scope.title = config.title || "提示";
                $scope.content = config.content;
                $scope.confirmBtnLabel = config.confirmBtnLabel;
                $scope.instance = $uibModalInstance;
            },
            resolve: {
                config: function () {
                    return config;
                }
            }
        });

        return confirmModal.result;
    }
    return service;
}])