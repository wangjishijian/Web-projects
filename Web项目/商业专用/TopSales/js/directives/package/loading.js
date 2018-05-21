define(['appModule'], function (appModule) {
    appModule.directive("loading", [function () {
        return {
            scope: {},
            template: '\
        <div id="loadingToast" style="display: none;height: 100%;width:100%; position: fixed; left: 0; top: 0; z-index: 2000;">\
            <div id="toastMask" style="height: 100%;width:100%; background-color: #000000; filter: alpha(opacity=50); opacity: .5;"></div>\
            <div id="toastParent" style="height: 100%; width: 100%;position: absolute; left: 0; top: 0;  display: table;" >\
                <div style="display: table-cell; vertical-align: middle;">\
                    <div  style="width: 160px;background-color:#000000; color: #ffffff; margin: 0px auto;text-align: center;padding: 30px; border-radius: 10px;">\
                           <i class="fa fa-spinner fa-spin fa-3x fa-fw" ></i>\
                           <p id="toastContent" style="margin-top: 20px">操作中...</p>\
                    </div>\
                </div>\
             </div>\
        </div>'
        }
    }]);
});