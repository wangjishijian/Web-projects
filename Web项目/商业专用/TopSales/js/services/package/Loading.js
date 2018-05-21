/**
 * Loading的提示
 * 做全局loading处理
 * 注意: 调用的时候一定要retain一次,数据返回后release一次
 *
 */
define(['appModule'], function (appModule) {
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
});