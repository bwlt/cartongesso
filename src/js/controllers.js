(function(){
'use strict';

angular.module('cartongessoControllers', ['ngStorage'])


.controller('DataController',
    ['$localStorage', 'cartongessoCalculator', 'data',
    function($localStorage, cartongessoCalculator, data){

  // provide the constant data
  this.data = data;

  // link the controller $storage var to HTML5 local storage
  this.$storage = $localStorage.$default({
    montante: 30,
    guida: 30,
    lastra: 'cartongesso',
    parete: 1
  });
}])


/* This is the best place found to embed this data, because it is only
 * needed by the DataController, and cannot be declared as an external json
 * file (remember that the builded project must stay in a single file)
 */
.constant(
  'data',
  {
    montante:
    [
      {
        label: 30,
        value: 30
      },
      {
        label: 50,
        value: 50
      },
      {
        label: 75,
        value: 75
      },
      {
        label: 100,
        value: 100
      }
    ],

    guida:
    [
      {
        label: 30,
        value: 30
      },
      {
        label: 50,
        value: 50
      },
      {
        label: 75,
        value: 75
      },
      {
        label: 100,
        value: 100
      }
    ],

    lastra:
    [
      {
        label: 'Cartongesso',
        value: 'cartongesso'
      },
      {
        label: 'Idrolastra',
        value: 'idrolastra'
      },
      {
        label: 'Ignilastra',
        value: 'ignilastra'
      }
    ],

    parete:
    [
      {
        label: '1',
        value: 1
      },
      {
        label: '1+1',
        value: 2
      },
      {
        label: '1+2',
        value: 3
      },
      {
        label: '2+2',
        value: 4
      }
    ],

    montanteSetting:
    [
      {
        label: '30',
        modelName: 'm30price'
      },
      {
        label: '50',
        modelName: 'm50price'
      },
      {
        label: '75',
        modelName: 'm75price'
      },
      {
        label: '100',
        modelName: 'm100price'
      }
    ],

    guidaSetting:
    [
      {
        label: '30',
        modelName: 'g30price'
      },
      {
        label: '50',
        modelName: 'g50price'
      },
      {
        label: '75',
        modelName: 'g75price'
      },
      {
        label: '100',
        modelName: 'g100price'
      }
    ],

    lastraSetting:
    [
      {
        label: 'cartongesso',
        modelName: 'lcrtprice'
      },
      {
        label: 'idrolastra',
        modelName: 'lidrprice'
      },
      {
        label: 'ignilastra',
        modelName: 'lignprice'
      }
    ]
  }
);

})();
