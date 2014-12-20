(function(){
'use strict';

// TODO change services to factory
angular.module('cartongessoServices', ['cartongessoData', 'underscorejs'])


/**
 * This service contains the logic for adapting any number to a fixed precision
 * two decimal number.
 * TODO: check if it can be substituted by ng currency filter
 */
.service('currencyAdapter', function(){

  this.getCurrencyValue = function(number) {
    var numberObj = Number(number);

    return isNaN(numberObj) ? 0 : Math.round(numberObj * 100) / 100;
  };
})


/**
 * This service contains the logic for calculate the partial prices relatives to
 * to the given area (i.e. [euro@m^2]).
 * Ask the mantainer for a detailed explatation of the calculations.
 */
.service('cartongessoCalculator', ['currencyAdapter', function(currencyAdapter){

  /**
   * @param price float the montante price [euro@m]
   * @param interasse float distance between montanti [m]
   */
  this.calcMontanti = function(interasse, price) {
    return interasse == '0' ? 0 :
      currencyAdapter.getCurrencyValue(price/interasse);
  };

  /**
   * @param b integer width [m]
   * @param h integer height [m]
   * @param price float the guide price [euro@m]
   */
  this.calcGuide = function(b, h, price) {
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
  this.calcLastre = function(num, price) {
    return currencyAdapter.getCurrencyValue(
      num * price);
  };

  /**
   * @param i integer interasse [m]
   * @param d integer viti distance [m]
   * @param price float the single vite price [euro@vite]
   */
  this.calcViti = function(i, d, price) {
    if (i == '0' || d == '0') {
      return 0;
    }
    return currencyAdapter.getCurrencyValue(
      price / (i * d));
  };

  /**
   * @param price float the stucco price [euro@m^2]
   */
  this.calcStucco = function(price) {
    return currencyAdapter.getCurrencyValue(
      2 * price);
  };

  /**
   * @param price float the lana di roccia price [euro@m^2]
   */
  this.calcRoccia = function(price) {
    return currencyAdapter.getCurrencyValue(price);
  };

  /**
   * @param b integer width [m]
   * @param h integer height [m]
   * @param d integer distance between tasselli [m]
   * @param price float the guide price [euro@tassello]
   */
  this.calcTasselli = function(b, h, d, price) {
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
  this.calcTotale = function(b, h, i, dViti, dTasselli, numLastre,
    pMontante, pGuida, pLastra, pViti, pStucco, pRoccia, pTasselli){

    return currencyAdapter.getCurrencyValue(
        this.calcMontanti(i, pMontante) +
        this.calcGuide(b, h, pGuida) +
        this.calcLastre(numLastre, pLastra) +
        this.calcViti(i, dViti, pViti) +
        this.calcStucco(pStucco) +
        this.calcRoccia(pRoccia) +
        this.calcTasselli(b, h, dTasselli, pTasselli)
      );
  };
}])


/**
 * This service contains the logic for adapting any number to a fixed precision
 * two decimal number.
 */
.service('priceHelper', ['data', '_', function(data, _){

  /**
   * Given a montante label (or value), returns the associated key for accessing
   * to his price in the data model
   */
  this.getMontantePriceKey = function(montanteType){
    var priceKey = _.chain(data.montante)
        .filter(function(el){
          return el.value == montanteType;
        })
        .first()
        .value();

    return priceKey ? priceKey.price : undefined;
  };

  /**
   * Given a guida label (or value), returns the associated key for accessing
   * to his price in the data model
   */
  this.getGuidaPriceKey = function(guidaType){
    var priceKey = _.chain(data.guida)
        .filter(function(el){
          return el.value == guidaType;
        })
        .first()
        .value();

    return priceKey ? priceKey.price : undefined;
  };

  /**
   * Given a lastra label (or value), returns the associated key for accessing
   * to his price in the data model
   */
  this.getLastraPriceKey = function(lastraType){
    var priceKey = _.chain(data.lastra)
        .filter(function(el){
          return el.value == lastraType.toLowerCase();
        })
        .first()
        .value();

    return priceKey ? priceKey.price : undefined;
  };

}]);


})();
