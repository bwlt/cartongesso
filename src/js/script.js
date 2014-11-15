function getCurrencyValue(value) {
  return Math.round(Number(value) * 100) / 100;
}

function getFormsValues() {
  return {
    inputs: $(inputs).serializeArray(),
    settings: $(settings).serializeArray()
  }
}

function setFormsValues(forms) {
  for (var i = 0, len = forms.inputs.length; i < len; i++) {
    inputs[forms.inputs[i].name].value = forms.inputs[i].value;
  }
  for (var i = 0, len = forms.settings.length; i < len; i++) {
    settings[forms.settings[i].name].value = forms.settings[i].value;
  }
}

function getInputValues() {
  return {
    montante : inputs.montante.value,
    guida    : inputs.guida.value,
    lastra   : inputs.lastra.value,
    npareti  : inputs.parete.value,
    base     : Number(inputs.base.value),
    altezza  : Number(inputs.altezza.value),

    mprice : {
      30  : getCurrencyValue(settings.m30price.value),
      50  : getCurrencyValue(settings.m50price.value),
      75  : getCurrencyValue(settings.m75price.value),
      100 : getCurrencyValue(settings.m100price.value)
    },

    gprice : {
      30  : getCurrencyValue(settings.g30price.value),
      50  : getCurrencyValue(settings.g50price.value),
      75  : getCurrencyValue(settings.g75price.value),
      100 : getCurrencyValue(settings.g100price.value)
    },

    lprice : {
      cartongesso : getCurrencyValue(settings.lcrtprice.value),
      idrolastra  : getCurrencyValue(settings.lidrprice.value),
      ignilastra  : getCurrencyValue(settings.lignprice.value)
    },

    vitprice  : getCurrencyValue(settings.vitprice.value),
    vitdistance : Number(settings.vitdistance.value),
    interasse : Number(settings.interasse.value),

    stcprice : getCurrencyValue(settings.stcprice.value)
  }
}

function normalize(inputs) {
  var npareti = inputs.npareti === '1+1' ? 2 :
      inputs.npareti === '1+2' ? 3 :
          inputs.npareti === '2+2' ? 4 : 0;
  inputs.npareti = npareti;

  var mprice = inputs.mprice[inputs.montante];
  inputs.mprice = mprice;

  var gprice = inputs.gprice[inputs.guida];
  inputs.gprice = gprice;

  var lprice = inputs.lprice[inputs.lastra];
  inputs.lprice = lprice;

  return inputs;
}

function calculateTotalPrice(inputs) {
  var area = inputs.base * inputs.altezza;

  // total montanti
  var ptotmontanti = getCurrencyValue(
    area * inputs.mprice / inputs.interasse
  );

  // total guide
  var ptotguide = getCurrencyValue(
    2 * (inputs.base + inputs.altezza) * inputs.gprice
  );

  // total lastra
  var ptotlastra = getCurrencyValue(
    area * inputs.lprice * inputs.npareti
  );

  // total viti
  var ptotviti = getCurrencyValue(
    (area * inputs.vitprice) / (inputs.interasse * inputs.vitdistance)
  );

  // total stucco
  var ptotstucco = getCurrencyValue(
    area * inputs.stcprice
  );

  // console.log("ptotmontanti:"+ptotmontanti,
  //     "ptotguide:"+ptotguide,
  //     "ptotlastra:"+ptotlastra,
  //     "ptotviti:"+ptotviti,
  //     "ptotstucco:"+ptotstucco);

  return ptotmontanti + ptotguide + ptotlastra + ptotviti + ptotstucco;
}

function updateTotal(){
  var inputs = getInputValues(),
      parameters = normalize(inputs);

  var total = calculateTotalPrice(parameters);
  if (isNaN(total)) {
    $('#total').closest('.panel-footer').find('.alert').show();
  }
  else {
    $('#total').closest('.panel-footer').find('.alert').hide();
    $('#total').html(total);
  }
}

function loadLocalStorage(){
  var forms;
  if (forms = window.localStorage.getItem('forms')) {
    setFormsValues(JSON.parse(forms));
    return true;
  }
  return false;
}

$(document).ready(function(){

  loadLocalStorage();
  updateTotal();

  // trigger radio changes
  $('form').find(':radio').change(function(){
    var forms = getFormsValues();
    window.localStorage.setItem('forms', JSON.stringify(forms));
    updateTotal();
  });
  // filter input number chars
  $('form').find('input[type=number]').keyup(function(e){
    var form_group = $(this).closest('.form-group'),
        valid = true;
    form_group.find('input[type=number]').each(function(){
      valid = valid && $(this)[0].validity.valid;
    });
    if (valid) {
      form_group.removeClass('has-error');
    }
    else {
      form_group.addClass('has-error');
    }
  });
  // trigger input number changes
  $('form').find('input[type=number]').keyup(function(e){
    var forms = getFormsValues();
    window.localStorage.setItem('forms', JSON.stringify(forms));
    updateTotal();
  });

});
