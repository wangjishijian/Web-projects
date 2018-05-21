define(['appModule'], function (appModule) {
    appModule.service('zmzSelectMinErr', function() {
        var minErr = angular.$$minErr('appModule');
        return function() {
            var error = minErr.apply(this, arguments);
            var message = error.message.replace(new RegExp('\nhttp://errors.angularjs.org/.*'), '');
            return new Error(message);
        };
    })
    appModule.directive("selectPlugin", [function () {
        var directive={
            restrict: 'AE',
            replace: false,
            require: 'ngModel',
            templateUrl: 'template/selectPlugin.html',
            compile: function(tElement, tAttrs) {

                if (!tAttrs.repeat) throw zmzSelectMinErr('repeat', "Expected 'repeat' expression.");
                var NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/;
                var parserResult=tAttrs.repeat.match(NG_OPTIONS_REGEXP);
                var choices = tElement.querySelectorAll('.clearfix');
                var inputVal = tElement.querySelectorAll('.input_val');
                var selectValue = tElement.querySelectorAll('.pull-left');
                var repeatStr=parserResult[5]+' in '+parserResult[8]+' track by $index';
                choices.attr('ng-repeat',repeatStr);
                // choices.attr('ng-class',"onSelected("+parserResult[1]+","+parserResult[2]+")");
                choices.attr('ng-click',"onSelect("+parserResult[1]+","+parserResult[2]+")");
                selectValue.attr('ng-bind',parserResult[2]);
                selectValue.attr('value','{{'+parserResult[1]+'}}');
                tAttrs.parserResult=parserResult;
                return function link(scope, element, attrs, ngModel) {
                    scope.selectPluginShow=false;
                    console.log(ngModel);
                    var defaultValue=scope.ngModel;
                    console.log(defaultValue);

                    // parserResult[1]
                    scope.onSelected=function(value,name){
                        if(value==defaultValue){
                            element.querySelectorAll('.input_val').html(name);
                        }
                        return name;
                    }
                    scope.onSelect=function(value,name,$event){
                        element.querySelectorAll('.select_plugin').blur();
                        element.querySelectorAll('.input_val').html(name);
                        ngModel.$setViewValue(value);
                        ngModel.$render();
                    }
                }
            }
        }
        var repeat="item.id as item.name for item in peopleList";
        return directive;
    }]);
});