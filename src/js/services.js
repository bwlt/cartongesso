(function(){
'use strict';

angular.module('cartongessoServices', [])


/**
 * This service contains the logic for adapting any number to a fixed precision
 * two decimal number.
 */
.factory('currencyAdapter',
  function(){

  var getCurrencyValue = function(number) {
    var numberObj = Number(number);

    return Number.isNaN(numberObj) ? 0 : Math.round(numberObj * 100) / 100;
  };

  return {
    getCurrencyValue: getCurrencyValue
  };
})


/**
 * This service contains the logic for calculate the partial prices relatives to
 * to the given area (i.e. [euro@m^2]).
 * Ask the mantainer for a detailed explatation of the calculations.
 */
.factory('cartongessoCalculator', ['currencyAdapter', function(currencyAdapter){

  /**
   * @param price float the montante price [euro@m]
   * @param interasse float distance between montanti [m]
   */
  var calcMontanti = function(interasse, price) {
    return interasse == '0' ? 0 :
      currencyAdapter.getCurrencyValue(price/interasse);
  };

  /**
   * @param b integer width [m]
   * @param h integer height [m]
   * @param price float the guide price [euro@m]
   */
  var calcGuide = function(b, h, price) {
    if (b == '0' || h == '0') {
      return 0;
    }
    return currencyAdapter.getCurrencyValue(
      2 * (b + h) * price / (b * h));
  };

  /**
   * @param num integer the number of lastre [dimesionless]
   * @param price float the lastre price [euro@m]
   */
  var calcLastre = function(num, price) {
    return currencyAdapter.getCurrencyValue(
      num * price);
  };

  /**
   * @param i integer interasse [m]
   * @param d integer viti distance [m]
   * @param price float the single vite price [euro@vite]
   */
  var calcViti = function(i, d, price) {
    if (i == '0' || d == '0') {
      return 0;
    }
    return currencyAdapter.getCurrencyValue(
      price / (i * d));
  };

  /**
   * @param price float the stucco price [euro@m^2]
   */
  var calcStucco = function(price) {
    return currencyAdapter.getCurrencyValue(
      2 * price);
  };

  /**
   * @param price float the lana di roccia price [euro@m^2]
   */
  var calcRoccia = function(price) {
    return currencyAdapter.getCurrencyValue(price);
  };

  /**
   * @param b integer width [m]
   * @param h integer height [m]
   * @param d integer distance between tasselli [m]
   * @param price float the guide price [euro@tassello]
   */
  var calcTasselli = function(b, h, d, price) {
    if (b == '0' || h == '0' || d == '0') {
      return 0;
    }
    return currencyAdapter.getCurrencyValue(
      2 * (b + h) * price / (b * h * d));
  };

  /**
   * @param b float width [m]
   * @param h float height [m]
   * @param i float interasse [m]
   * @param dViti float distance between viti [m]
   * @param dTasselli float distance between tasselli [m]
   * @param numLastre integer number of lastre [dimensionless]
   * ... various prices
   */
  var calcTotale = function(b, h, i, dViti, dTasselli, numLastre,
    pMontante, pGuida, pLastra, pViti, pStucco, pRoccia, pTasselli){

    return calcMontanti(i, pMontante) +
      calcGuide(b, h, pGuida) +
      calcLastre(numLastre, pLastra) +
      calcViti(i, dViti, pViti) +
      calcStucco(pStucco) +
      calcRoccia(pRoccia) +
      calcTasselli(b, h, dTasselli, pTasselli)
      ;
  };

  return {
    calcMontanti: calcMontanti,
    calcGuide: calcGuide,
    calcLastre: calcLastre,
    calcViti: calcViti,
    calcStucco: calcStucco,
    calcRoccia: calcRoccia,
    calcTasselli: calcTasselli,
    calcTotale: calcTotale
  };
}]);


})();
