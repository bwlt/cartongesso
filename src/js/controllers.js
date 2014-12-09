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
    parete: 1
  });


  // exports the calculation algorithm processed with correct parameters
  this.getTotal = function() {
    // define some vars
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
