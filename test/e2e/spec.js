describe('cartongesso application', function() {

  beforeEach(function(){
    browser.get('index.html');
  });

  describe('should have all ng-model attached to dataController.$storage var', function(){

    describe('check the existence of model data in main screen form', function(){
      it('check the existence of dataController.$storage.montante', function(){

        expect(
          element.all(by.model('dataController.$storage.montante'))
          .count()
        ).toBe(4);

        expect(
          element.all(by.model('dataController.$storage.guida'))
          .count()
        ).toBe(4);

        expect(
          element.all(by.model('dataController.$storage.lastra'))
          .count()
        ).toBe(3);

        expect(
          element.all(by.model('dataController.$storage.parete'))
          .count()
        ).toBe(4);

        expect(
          element.all(by.model('dataController.$storage.base'))
          .count()
        ).toBe(1);

        expect(
          element.all(by.model('dataController.$storage.altezza'))
          .count()
        ).toBe(1);
      });
    });

    describe('check the existence of model data in settings form', function(){
      it('check the existence', function(){
        var settingBtn = element.all(by.buttonText('Impostazioni'));
        expect(settingBtn.count()).toBe(1);

        settingBtn.click();

        expect(
          element.all(by.repeater('el in dataController.data.montanteSetting'))
          .all(by.model('dataController.$storage[el.modelName]'))
          .count()
        ).toBe(4);

        expect(
          element.all(by.repeater('el in dataController.data.lastraSetting'))
          .all(by.model('dataController.$storage[el.modelName]'))
          .count()
        ).toBe(3);

        expect(
          element.all(by.model('dataController.$storage.vitprice'))
          .count()
        ).toBe(1);

        expect(
          element.all(by.model('dataController.$storage.vitdistance'))
          .count()
        ).toBe(1);

        expect(
          element.all(by.model('dataController.$storage.stcprice'))
          .count()
        ).toBe(1);

        expect(
          element.all(by.model('dataController.$storage.interasse'))
          .count()
        ).toBe(1);

        expect(
          element.all(by.model('dataController.$storage.tasprice'))
          .count()
        ).toBe(1);

        expect(
          element.all(by.model('dataController.$storage.tasdistance'))
          .count()
        ).toBe(1);

      });
    });
  });

});
