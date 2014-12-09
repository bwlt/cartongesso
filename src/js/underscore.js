(function(){
'use strict';

/**
 * underscore.js module wrapper for inject it with DI
 */
angular.module('underscorejs', [])

.factory('_',['$window', function($window){
    return $window._;
}]);


})();