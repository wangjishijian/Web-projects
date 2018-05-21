/**
 * 分页条
 * pagination 元素
 *
 */
define(['appModule'], function (appModule) {
    appModule.directive("areaChoice", [function () {
        return {
            restrict: 'AE',
            replace: false,
            scope: {data:'='},
            templateUrl:'template/areaChoice.html',
            controller: ['$scope','Dict', function($scope,Dict) {
                $scope.isTag='province';
                var initOptions={
                    provinceId:'',
                    provinceName:'',
                    cityId:'',
                    cityName:'',
                    districtId:'',
                    districtName:'',
                    areaName:'',
                    callFun:null,
                    loadFun:function(){
                        $scope.load();
                    }
                };
                $scope.provinceList=[];
                $scope.cityList=[];
                $scope.districtList=[];

                $scope.areaObj=angular.copy(initOptions);
                var callFun=$scope.data.callFun;
                var loadFun=initOptions.loadFun;
                $scope.data.loadFun=loadFun;

                $scope.load=function(){
                    $scope.areaObj=$.extend($scope.areaObj,$scope.data);
                    console.log($scope.areaObj);
                    console.log($scope.data);
                    $scope.provinceListFun();
                    $scope.cityListFun($scope.areaObj.provinceId);
                    $scope.districtListFun($scope.areaObj.cityId);
                    $scope.isTag='province';
                }

                /******** 省级处理 *********/
                    //省级列表加载事件
                $scope.provinceListFun=function(){
                    Dict.areaQueryList(0,function(res){
                        $scope.provinceList=res;
                        return true;
                    });
                }
                //省级点击事件
                $scope.provinceClick=function(province){
                    $scope.areaObj.provinceId=province.id;
                    $scope.areaObj.provinceName=province.nameCn;

                    $scope.areaObj.cityId='';
                    $scope.areaObj.cityName='';
                    $scope.areaObj.districtId='';
                    $scope.areaObj.districtName='';
                    //重新加载市级数据
                    $scope.cityListFun(province.id);
                    //设置input输入框里值
                    $scope.setAreaName();
                    //切换到市级面板
                    $scope.isTag='city';
                }

                /******** 市级处理 *********/
                    //市级列表加载事件
                $scope.cityListFun=function(provinceId){
                    $scope.cityList=[];
                    if(!provinceId || provinceId==''){
                        return ;
                    }
                    Dict.areaQueryList(provinceId,function(res){
                        $scope.cityList=res;
                    });
                    $scope.districtListFun('');//重新加载区县数据
                }
                //市级点击事件
                $scope.cityClick=function(city){
                    $scope.areaObj.cityId=city.id;
                    $scope.areaObj.cityName=city.nameCn;

                    $scope.areaObj.districtId='';
                    $scope.areaObj.districtName='';

                    $scope.districtListFun(city.id);
                    //切换到区县级面板
                    $scope.isTag='district';
                    //设置input输入框里值
                    $scope.setAreaName();
                }

                /******** 区县级处理 *********/
                    //区县级列表加载事件
                $scope.districtListFun=function(cityId){
                    $scope.districtList=[];
                    if(!cityId || cityId==''){
                        return ;
                    }
                    Dict.areaQueryList(cityId,function(res){
                        $scope.districtList=res;
                    });
                }
                //区县级点击事件
                $scope.districtClick=function(district){
                    $scope.areaObj.districtId=district.id;
                    $scope.areaObj.districtName=district.nameCn;
                    //设置input输入框里值
                    $scope.setAreaName();
                    //省市区选定后的回调事件
                    $scope.callFun();
                    //移除焦点
                    angular.element("#cityBox").blur();
                }


                //省市区选定后的回调事件
                $scope.callFun=function(){
                    //回调返回的数据
                    $scope.data.provinceId=$scope.areaObj.provinceId;
                    $scope.data.cityId=$scope.areaObj.cityId;
                    $scope.data.districtId=$scope.areaObj.districtId;
                    $scope.data.areaName=$scope.areaObj.areaName;
                    //修改默认显示文本
                    $scope.data.areaName=$scope.areaObj.areaName;
                    //调用回调函数
                    $scope.data.callFun($scope.data);
                    //切回到省级面板
                    $scope.isTag='province';
                }

                //设置input输入框里值
                $scope.setAreaName=function(){
                    $scope.areaObj.areaName=$scope.areaObj.provinceName+'-'+$scope.areaObj.cityName+'-'+$scope.areaObj.districtName;
                }

                //鼠标离开事件
                $scope.areaBoxBlur=function(){
                    //如果失去焦点的时候不是最后点击区县选项，就放弃操作还原数据
                    if(!$scope.areaObj.districtId){
                        //初始化areaObj,将值清空
                        $scope.areaObj=angular.copy(initOptions);
                        $scope.load();
                    }
                    //关闭省市选择器
                    $scope.areaClose();
                }
                //清空事件
                $scope.areaClear=function(){
                    //初始化areaObj,将值清空
                    $scope.areaObj=angular.copy(initOptions);
                    $scope.callFun();
                    //移除焦点
                    angular.element("#cityBox").blur();
                }
                /***关闭省市选择器***/
                $scope.areaClose=function(){
                    $scope.areaShow=false;
                }

                $scope.load();
            }]
        }
    }]);
});