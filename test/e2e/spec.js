describe('cartongesso application', function() {

  beforeEach(function(){
    browser.get('index.html');
  });

  describe('should have all ng-model attached to dataController.storage var', function(){

    describe('check the existence of model data in main screen form', function(){
      it('check the existence of dataController.storage.montante', function(){

        expect(
          element.all(by.model('dataController.storage.montante'))
          .count()
        ).toBe(4);

        expect(
          element.all(by.model('dataController.storage.guida'))
          .count()
        ).toBe(4);

        expect(
          element.all(by.model('dataController.storage.lastra'))
          .count()
        ).toBe(3);

        expect(
          element.all(by.model('dataController.storage.parete'))
          .count()
        ).toBe(4);

        expect(
          element.all(by.model('dataController.storage.base'))
          .count()
        ).toBe(1);

        expect(
          element.all(by.model('dataController.storage.altezza'))
          .count()
        ).toBe(1);
      });
    });

    describe('check the existence of model data in settings form', function(){
      it('check the existence', function(){
        var settingBtn = element.all(by.linkText('Impostazioni'));
        expect(settingBtn.count()).toBe(1);

        settingBtn.click();

        expect(
          element.all(by.repeater('el in dataController.data.montanteSetting'))
          .all(by.model('dataController.storage[el.modelName]'))
          .count()
        ).toBe(4);

        expect(
          element.all(by.repeater('el in dataController.data.lastraSetting'))
          .all(by.model('dataController.storage[el.modelName]'))
          .count()
        ).toBe(3);

        expect(
          element.all(by.model('dataController.storage.vitprice'))
          .count()
        ).toBe(1);

        expect(
          element.all(by.model('dataController.storage.vitdistance'))
          .count()
        ).toBe(1);

        expect(
          element.all(by.model('dataController.storage.stcprice'))
          .count()
        ).toBe(1);

        expect(
          element.all(by.model('dataController.storage.interasse'))
          .count()
        ).toBe(1);

        expect(
          element.all(by.model('dataController.storage.tasprice'))
          .count()
        ).toBe(1);

        expect(
          element.all(by.model('dataController.storage.tasdistance'))
          .count()
        ).toBe(1);

      });
    });
  });

  xdescribe('check the calculation', function(){
    // by the fact that the total is a sum, calculate partials one by one short
    // circuiting the other terms (i.e. setting prices at zero)

    beforeEach(function(){
      // set prices to zero
      element.all(by.buttonText('Impostazioni')).click();

      element
        .all(by.repeater('el in dataController.data.montanteSetting'))
        .all(by.model('dataController.storage[el.modelName]')).clear().sendKeys('0');

      element.all(by.buttonText('Chiudi')).click();

      protractor.getInstance().sleep(1000); // sleep for the close animation
    });


    describe('check montante calculation', function(){

      beforeEach(function(){
        element.all(by.buttonText('Impostazioni')).click();

        element
          .all(by.repeater('el in dataController.data.montanteSetting'))
          .each(function(el){
            var repeater = el;
            el.all(by.tagName('span')).first().getText().then(function(text){
              var value;
              if (text === '30') {
                value = '1';
              }
              else if (text === '50') {
                value = '2';
              }
              else if (text === '75') {
                value = '3';
              }
              else if (text === '100') {
                value = '4';
              }
              repeater
                .element(by.model('dataController.storage[el.modelName]'))
                .clear()
                .sendKeys(value);
            });
          });

        element.all(by.buttonText('Chiudi')).click();
      });

      it('calculate montante', function(){
        element
          .all(by.model('dataController.storage.montante'))
          .filter(function(elem, index){
            return elem.getAttribute('value').then(function(val){
              return val === '50';
            });
          });
      });

    });

  });

});
