define(['config'], function(config) {
    var loader={};
    loader.init= function(dependencies) {
        var definition = {
            resolver: ['$q', '$rootScope', function($q, $rootScope) {
                var defered = $q.defer();
                require(dependencies, function() {
                    $rootScope.$apply(function() {
                        defered.resolve();
                    });
                });
                return defered.promise;
            }]
        };
        return definition;
    }


    //js文件加载
    loader.load=function (dependencies,cb){
        if(!dependencies ||dependencies.length<=0){
            return;
        }
        //如果传进来的不是数组就转成数组
        if (!(dependencies instanceof  Array)){
            dependencies=[dependencies];
        }
        //添加目录前缀
        for(var i=0;i<dependencies.length;i++){
            dependencies[i]=config.jsDir+dependencies[i];
        }
        require(dependencies,function(){
            cb(config.htmlDir);
        });
    };


    //指令js文件加载
    loader.loadDirectives=function (dependencies,cb){
        if(!dependencies ||dependencies.length<=0){
            return;
        }
        //如果传进来的不是数组就转成数组
        if (!(dependencies instanceof  Array)){
            dependencies=[dependencies];
        }
        //添加目录前缀
        for(var i=0;i<dependencies.length;i++){
            dependencies[i]=config.directiveJsDir+dependencies[i];
        }
        require(dependencies,function(){
            cb();
        });
    };


    //服务js文件加载
    loader.loadServices=function (dependencies,cb){
        if(!dependencies ||dependencies.length<=0){
            return;
        }
        //如果传进来的不是数组就转成数组
        if (!(dependencies instanceof  Array)){
            dependencies=[dependencies];
        }
        //添加目录前缀
        for(var i=0;i<dependencies.length;i++){
            dependencies[i]=config.serviceJsDir+dependencies[i];
        }
        require(dependencies,function(){
            cb();
        });
    };


    //控制器js文件加载
    loader.loadController=function (dependencies,cb){
        if(!dependencies ||dependencies.length<=0){
            return;
        }
        //如果传进来的不是数组就转成数组
        if (!(dependencies instanceof  Array)){
            dependencies=[dependencies];
        }
        //添加目录前缀
        for(var i=0;i<dependencies.length;i++){
            dependencies[i]=config.controllerJsDir+dependencies[i];
        }
        require(dependencies,function(){
            cb(config.htmlDir);
        });
    };
    return loader;
});