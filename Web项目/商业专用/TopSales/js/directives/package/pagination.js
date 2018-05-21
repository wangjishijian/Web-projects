/**
 * 分页条
 * pagination 元素
 *
 */
define(['appModule'], function (appModule) {
    appModule.directive('paginationBar', function () {
        var directive = {
            restrict: 'A',
            replace: false,
            scope: {
                data: '='
            },
            templateUrl: 'template/pagination.html',
            controller: ['$scope', function ($scope) {

                //$scope.currentPage = $scope.data.currentPage;
                //$scope.pageCount = $scope.data.pageCount;
                $scope.showStartPagerDot = false;
                $scope.showEndPagerDot = false;
                //$scope.callFun = $scope.data.callFun;
                $scope.pages = function () {
                    var result = [], pagerCount = 5, start = 1, end = pagerCount;

                    if (!$scope.data) return result;

                    if ($scope.data.currentPage >= pagerCount) {
                        start = $scope.data.currentPage - Math.floor(pagerCount / 2);
                        $scope.showStartPagerDot = true;
                    } else {
                        $scope.showStartPagerDot = false;
                    }
                    ;
                    end = start + pagerCount - 1;
                    if (end > $scope.data.pageCount) {
                        end = $scope.data.pageCount;
                        $scope.showEndPagerDot = false;
                    } else {
                        $scope.showEndPagerDot = true;
                    }
                    ;
                    for (var i = start; i <= end; i++) {
                        result.push(i);
                    }
                    ;
                    return result
                };

               $scope.goPage = function (page) {
                    if (page != $scope.data.currentPage) {
                        $scope.data.callFun(page);
                    }
                };

                $scope.firstPage = function () {
                    if (1 != $scope.data.currentPage) {
                        $scope.data.callFun(1);
                    }
                };

                $scope.lastPage = function () {
                    if ($scope.data.pageCount != $scope.data.currentPage) {
                        $scope.data.callFun($scope.data.pageCount);
                    }
                };


                $scope.prevPage = function () {
                    var page = $scope.data.currentPage - 1;
                    if (page == 0) page = 1;
                    if (page != $scope.data.currentPage) {
                        $scope.data.callFun(page);
                    }
                };


                $scope.nextPage = function () {
                    var page = $scope.data.currentPage + 1;
                    if (page >= $scope.data.pageCount) page = $scope.data.pageCount;
                    if (page != $scope.data.currentPage) {
                        $scope.data.callFun(page);
                    }
                };
            }]

        };

        return directive;
    });
});