(function(){
'use strict';


describe('currencyAdapter service', function() {
  var currencyAdapter;

  beforeEach(function(){
    module('cartongessoServices');

    inject(function (_currencyAdapter_) {
      currencyAdapter = _currencyAdapter_;
    });
  });


  it('check the existence of currencyAdapter service', function() {
    expect(currencyAdapter).toBeDefined();
  });


  it('check the currencyAdapter interface', function() {
    expect(currencyAdapter.getCurrencyValue).toBeDefined();
  });


  it('test the currencyAdapter logic', function() {
    expect(currencyAdapter.getCurrencyValue(1.23)).toBe(1.23);
    expect(currencyAdapter.getCurrencyValue(1.234)).toBe(1.23);
    expect(currencyAdapter.getCurrencyValue(1.235)).toBe(1.24);
    expect(currencyAdapter.getCurrencyValue('1.23')).toBe(1.23);
    expect(currencyAdapter.getCurrencyValue('cartongesso')).toBe(0);
  });

});


describe('cartongessoCalculator service', function() {
  var cartongessoCalculator;

  beforeEach(function(){
    module('cartongessoServices');

    inject(function (_cartongessoCalculator_) {
      cartongessoCalculator = _cartongessoCalculator_;
    });
  });


  it('check the existence of cartongessoCalculator service', function() {
    expect(cartongessoCalculator).toBeDefined();
  });


  it('test the cartongessoCalculator calcMontanti', function() {
    expect(cartongessoCalculator.calcMontanti).toBeDefined();

    var price = 3,
        i = 7;
    // the result should be:
    // price / i
    expect(cartongessoCalculator.calcMontanti(i, price)).toBe(0.43);

    price = 1; i = 0;
    expect(cartongessoCalculator.calcMontanti(i, price)).toBe(0.00);
  });


  it('test the cartongessoCalculator calcGuide', function() {
    expect(cartongessoCalculator.calcGuide).toBeDefined();

    var b = 3,
        h = 1,
        price = 1;
    // the result should be:
    // (2 * (b + h) * price) / (b * h)
    expect(cartongessoCalculator.calcGuide(b, h, price)).toBe(2.67);

    b = 0;
    expect(cartongessoCalculator.calcGuide(b, h, price)).toBe(0.00);

    b = 3; h = 0;
    expect(cartongessoCalculator.calcGuide(b, h, price)).toBe(0.00);
  });


  it('test the cartongessoCalculator calcLastre', function() {
    expect(cartongessoCalculator.calcLastre).toBeDefined();

    var num = 2,
        price = 1;
    // the result should be:
    // num * price
    expect(cartongessoCalculator.calcLastre(num, price)).toBe(2.00);
  });


  it('test the cartongessoCalculator calcViti', function() {
    expect(cartongessoCalculator.calcViti).toBeDefined();

    var i = 0.3,
        d = 0.4,
        price = 0.1;
    // the result should be:
    // price / (i * d)
    expect(cartongessoCalculator.calcViti(i, d, price)).toBe(0.83);

    i = 0;
    expect(cartongessoCalculator.calcViti(i, d, price)).toBe(0.00);

    i = 1; d = 0;
    expect(cartongessoCalculator.calcViti(i, d, price)).toBe(0.00);
  });


  it('test the cartongessoCalculator calcStucco', function() {
    expect(cartongessoCalculator.calcStucco).toBeDefined();

    var price = 3.45;
    // the result should be:
    // 2 * price
    expect(cartongessoCalculator.calcStucco(price)).toBe(6.90);
  });


  it('test the cartongessoCalculator calcRoccia', function() {
    expect(cartongessoCalculator.calcRoccia).toBeDefined();

    var price = 3.45;
    // the result should be:
    // price
    expect(cartongessoCalculator.calcRoccia(price)).toBe(3.45);
  });


  it('test the cartongessoCalculator calcTasselli', function() {
    expect(cartongessoCalculator.calcTasselli).toBeDefined();

    var b = 1,
        h = 1,
        price = 1,
        d = 1;
    // the result should be:
    // (2 * (b + h) * price) / (d * b * h)
    expect(cartongessoCalculator.calcTasselli(b, h, d, price)).toBe(4.00);

    b = 0;
    expect(cartongessoCalculator.calcTasselli(b, h, d, price)).toBe(0.00);

    b = 1; h = 0;
    expect(cartongessoCalculator.calcTasselli(b, h, d, price)).toBe(0.00);

    h = 1; d = 0;
    expect(cartongessoCalculator.calcTasselli(b, h, d, price)).toBe(0.00);
  });


  it('test the cartongessoCalculator calcTotale', function() {
    expect(cartongessoCalculator.calcTotale).toBeDefined();
  });

});


})();
