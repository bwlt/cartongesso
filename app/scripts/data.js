(function(){
'use strict';

angular.module('cartongessoData', [])


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
        value: 30,
        price: 'm30price'
      },
      {
        label: 50,
        value: 50,
        price: 'm50price'
      },
      {
        label: 75,
        value: 75,
        price: 'm75price'
      },
      {
        label: 100,
        value: 100,
        price: 'm100price'
      }
    ],

    guida:
    [
      {
        label: 30,
        value: 30,
        price: 'g30price'
      },
      {
        label: 50,
        value: 50,
        price: 'g50price'
      },
      {
        label: 75,
        value: 75,
        price: 'g75price'
      },
      {
        label: 100,
        value: 100,
        price: 'g100price'
      }
    ],

    lastra:
    [
      {
        label: 'Cartongesso',
        value: 'cartongesso',
        price: 'lcrtprice'
      },
      {
        label: 'Idrolastra',
        value: 'idrolastra',
        price: 'lidrprice'
      },
      {
        label: 'Ignilastra',
        value: 'ignilastra',
        price: 'lignprice'
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
