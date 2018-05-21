/**
 * token拦截器
 * 在每个http里面增加header,携带token
 */
consoleServices.factory('TokenInterceptor', ['$q', function ($q) {
    return {
        request: function (config) {
            config.params = config.params || {};
            if (sessionStorage.apiToken && config.url && config.url.indexOf(sessionStorage.apiBaseUrl) == 0) {
                config.params.token = sessionStorage.apiToken;
                config.headers["X-Token"] = sessionStorage.apiToken;
            }
            return config;
        },

        response: function (response) {
            return response || $q.when(response);
        }
    };
}]);