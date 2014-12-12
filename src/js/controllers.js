(function(){
'use strict';

angular.module('cartongessoControllers', ['ngStorage', 'cartongessoData'])


.controller('DataController',
    ['$localStorage', 'data', 'priceHelper', 'cartongessoCalculator',
    function($localStorage, data, priceHelper, cartongessoCalculator){

  // refer to 'this' as View Model (vm)
  var vm = this;

  // provide the constant data
  this.data = data;

  // link the controller $storage var to HTML5 local storage
  this.storage = $localStorage.$default({
    montante: 30,
    guida: 30,
    lastra: 'cartongesso',
    parete: 1,
    
    m30price: 1,
    m50price: 1.2,
    m75price: 1.3,
    m100price: 1.4,

    g30price: 0.5,
    g50price: 0.8,
    g75price: 0.95,
    g100price: 1.2,

    lcrtprice: 2,
    lidrprice: 3.5,
    lignprice: 5.6,

    vitprice: 0.08,
    vitdistance: 0.3,
    stcprice: 0.4,
    interasse: 0.6
  });


  // exports the calculation algorithm processed with correct parameters
  this.getTotal = function() {
    // fetch the vars
    var b = vm.storage.base,
        h = vm.storage.altezza,
        i = vm.storage.interasse,
        dViti = vm.storage.vitdistance,
        dTasselli = vm.storage.tasdistance,
        numLastre = vm.storage.parete,
        pMontante = vm.storage[priceHelper.getMontantePriceKey(vm.storage.montante)],
        pGuida = vm.storage[priceHelper.getGuidaPriceKey(vm.storage.guida)],
        pLastra = vm.storage[priceHelper.getLastraPriceKey(vm.storage.lastra)],
        pViti = vm.storage.vitprice,
        pStucco = vm.storage.stcprice,
        pRoccia = vm.storage.lanaroccia ? vm.storage.lrocprice : 0,
        pTasselli = vm.storage.tasprice
        ;

    return cartongessoCalculator.calcTotale(b, h, i, dViti, dTasselli,
      numLastre, pMontante, pGuida, pLastra, pViti, pStucco, pRoccia, pTasselli);
  };

}]);

})();
