/**
 * 用户服务
 *
 */
define([ 'app', 'services/package/I' ], function(myApp) {

    myApp.factory('Test', ['I', function (I) {
        var service = {};

        //须知分页列表
        service.getList = function ( params, data, callback) {
            I.httpPost("port/querylist",params,data,function(data){
                callback(data);
            })
        };
        //须知详情接口
        service.detail = function ( params, data, callback) {
           /* I.post("pages/test/json.json",params,function(data){
                callback(data);
            })*/
            $.get('pages/test/json.json',params,function(res){
                callback(res);
            });
        };
        //须知新增接口
        service.saveAdd = function ( params, data, callback) {
            I.post("doctorManageApi/note/add",params, data,function(data){
                callback(data);
            })
        };
        //须知修改接口
        service.saveEdit = function ( params, data, callback) {
            I.httpPost("doctorManageApi/note/edit",params, data,function(data){
                callback(data);
            })
        };
        //须知删除接口
        service.isdelete = function ( params, data, callback) {
            I.httpPost("doctorManageApi/note/delete",params, data,function(data){
                callback(data);
            })
        };
        return service;
    }]);
});
