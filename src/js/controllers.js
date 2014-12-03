(function(){
'use strict';

var appControllers = angular.module('cartongessoControllers', []);


appControllers.controller('DataController', ['$scope', 'cartongessoCalculator',
    function($scope, cartongessoCalculator){

    console.log(cartongessoCalculator.calcMontanti(1,2));

    // $scope.getTotal = function() {
    //     return cartongessoCalculator.getTotal();
    // };
}]);


})();
