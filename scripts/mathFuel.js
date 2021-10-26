
document.getElementById("qntField").addEventListener("change", function () {
  let v = parseInt(this.value);
  if (v < 1) this.value = 1;
  if (v > 5) this.value = 5;
  if (!v) {
    this.value = 1;
  }
});

$('.cardAccordion').on("change", function () {
  var lts = $(this).find("#lts").val();
  var fuelPrice = $(this).find("#fuelPrice").val();

  var qnt = $(this).parents('.fuelCard').find('#qntField').val();

  let calc = (lts * fuelPrice) * qnt;
  let sum = calc.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  $(this).find("#lts").css({
    borderColor: "#dcdcdc"
  })

  $(this).find("#ltsValueReal").val(calc)
  $(this).find("#ltsValue").val(sum)
})

$('.fuelCard').find('.addQuantity').click(function () {
  var qnt = $(this).parents('.fuelCard').find('#qntField').val();

  var lts = $(this).parents('.fuelCard').find("#lts").val();
  var fuelPrice = $(this).parents('.fuelCard').find("#fuelPrice").val();

  let calc = (lts * fuelPrice) * qnt;
  let sum = calc.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  $(this).parents('.fuelCard').find("#ltsValueReal").val(calc)
  $(this).parents('.fuelCard').find("#ltsValue").val(sum)

})

function incrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal) && currentVal < 5) {
    parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
  }
}

function decrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal) && currentVal > 1) {
    parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(1);
  }
}

$('.addQuantity').on('click', '.plusButton', function (e) {
  incrementValue(e);
});

$('.addQuantity').on('click', '.minusButton', function (e) {
  decrementValue(e);
});
