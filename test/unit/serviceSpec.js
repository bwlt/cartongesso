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
    expect(currencyAdapter.getCurrencyValue('cartongesso')).toBeNaN();
  });

});

})();
