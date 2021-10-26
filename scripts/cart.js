
let params = (new URL(document.location)).searchParams;
let error = params.get("error")

if(error == "emptycart"){
  Swal.fire({
    icon: 'warning',
    title: 'Carrinho de compras vazio',
    text: 'Por favor, selecione pelo menos um item antes de prosseguir para o checkout.',
  }).then(function() {
    window.location.href = "./passo-1.html"
  })
  
}


const cartStorage = JSON.parse(localStorage.getItem("cart"))

if(!cartStorage){
  var res = 0.00;
  const cart = []
  localStorage.setItem("cart", JSON.stringify(cart))
  localStorage.setItem("total", res)
}else{
  cartStorage.map((e) => {

    var sum = e.price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    $('[name=cart]').prepend(`
    <div class="cartItem" name="${e.id}">
      <div class="cartFlex">
        <div class="cartInfo">
          <strong>x${e.qnt}</strong>
          <div>
            <h4>${e.name}</h4>
            <small>${e.desc}</small>
          </div>
        </div>
        <div class="cartPriceFlex">
        <div class="cartPrice">
          <div class="badge">${e.lts} Lts</div>
          <input type="hidden" id="fuelCartPrice" value="${e.price}" />
          <span>${sum}</span> 
        </div>
        <a href="#" name="remove" id="cartRemove"><i class="fas fa-times"></i></a>
        </div>
      </div>
    </div>
    `)
  })
}

var res = parseFloat(localStorage.getItem("total"));
const cart = [...JSON.parse(localStorage.getItem("cart"))]

if(res <= 0){
  res = 0.00
}else{
  var sum = res.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  $("[name=result]").val(res);
  $("[name=resultText]").text(sum)
}

function verifyCart() {
  if (cart.length <= 0) {
    $("[name=empty]").addClass("active")
    $("[name=sideBody]").removeClass("active")
    $("[name=pay]").attr("disabled", true)
  } else {
    $("[name=empty]").removeClass("active")
    $("[name=sideBody]").addClass("active")
    $("[name=pay]").removeAttr("disabled")
  }
}

verifyCart()

$('.cardAccordion').find('#addToCart').click(function () {
var val = $(this).parents('.cardAccordion').find('#ltsValueReal').val();

if (val == 0) {
  $(this).parents('.cardAccordion').find("#lts").css({
    borderColor: "#f27474"
  })
} else {

  $(this).parents('.cardAccordion').find('#ltsValueReal').each(function () {
    res += (parseFloat($(this).val()))
  });

  var to = res.toFixed(2)

  var sum = res.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  var id = uuidv4()
  var fuelName = $(this).parents('.fuelCard').find('[name=fuelName]').text();
  var fuelDesc = $(this).parents('.fuelCard').find('[name=fuelDesc]').text();
  var fuelLts = $(this).parents('.fuelCard').find("#lts").val();
  var fuelQnt = $(this).parents('.fuelCard').find('[name=quantity]').val();
  var fuelPrice = parseFloat($(this).parents('.fuelCard').find('[name=fuelTotalPrice]').val());

  const item = {
    id,
    name: fuelName,
    desc: fuelDesc,
    lts: fuelLts,
    qnt: fuelQnt,
    price: fuelPrice
  }

  cart.push(item)

  /** GUARDAR NO LOCALSTORAGE */
  localStorage.setItem("cart", JSON.stringify(cart))
  localStorage.setItem("total", to)
  /* GUARDAR NO LOCALSTORAGE */


  var cartItem = cart.findIndex((item) => item.id === id)
  var cartPos = cart[cartItem]

  var soma = cartPos.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  $('[name=cart]').prepend(`
    <div class="cartItem" name="${cartPos.id}">
      <div class="cartFlex">
        <div class="cartInfo">
          <strong>x${cartPos.qnt}</strong>
          <div>
            <h4>${cartPos.name}</h4>
            <small>${cartPos.desc}</small>
          </div>
        </div>
        <div class="cartPriceFlex">
        <div class="cartPrice">
          <div class="badge">${cartPos.lts} Lts</div>
          <input type="hidden" id="fuelCartPrice" value="${cartPos.price}" />
          <span>${soma}</span> 
        </div>
        <a href="#" name="remove" id="cartRemove"><i class="fas fa-times"></i></a>
        </div>
      </div>
    </div>
    `)

  verifyCart()

  
   $("[name=result]").val(to);
  $("[name=resultText]").text(sum)

}
})

$(document).on('click', "[name=remove]", function (e) {
  e.preventDefault();

  var fuelId = $(this).parents('.cartItem').attr("name");

  cart.splice(fuelId, 1)
  localStorage.setItem("cart", JSON.stringify(cart))
  $(`[name=${fuelId}]`).remove();
  $(this).parents('.cartItem').find("#fuelCartPrice").each(function () {
    res += parseFloat($(this).val()) * -1;
  });

  var sum = res.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  var to = res.toFixed(2)

  if (to <= 0) {
    res = 0.00
  }
  if (sum <= "R$ 0,00") {
    sum = "R$ 0,00"
  }

  /* SALVA NO LOCALSTORAGE */
  localStorage.setItem("total", to)
  /* SALVA NO LOCALSTORAGE */

  $("[name=result]").val(to);
  $("[name=resultText]").text(sum)

  verifyCart()

});