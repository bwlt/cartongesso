(function(){
'use strict';

var appServices = angular.module('cartongessoServices', []);


/**
 * This service contains the logic for adapting any number to a fixed precision
 * two decimal number.
 */
appServices.factory('currencyAdapter', function(){

    var getCurrencyValue = function(number) {
        return Math.round(Number(number) * 100) / 100;
    };

    return {
        getCurrencyValue: getCurrencyValue
    };
});


/**
 * This service contains the logic for calculate the partial prices relatives to
 * to the given area (i.e. [euro@m^2]).
 * Ask the mantainer for a detailed explatation of the calculations.
 */
appServices.factory('cartongessoCalculator', ['currencyAdapter', function(currencyAdapter){

    /**
     * @param price float the montante price [euro@m]
     * @param interasse float distance between montanti [m]
     */
    var calcMontanti = function(price, interasse) {
        return currencyAdapter.getCurrencyValue(price/interasse);
    };

    /**
     * @param b number the montante price [euro@m]
     * @param interasse number distance between montanti [m]
     */
    var calcGuide = function(b, h, price) {
        return currencyAdapter.getCurrencyValue(
            2 * (b + h) * price / (b * h)
            );
    };

    var getResult = function(){
        return 'I am getResult';
    };

    return {
        calcMontanti: calcMontanti,
        calcGuide: calcGuide
    };
}]);


})();
