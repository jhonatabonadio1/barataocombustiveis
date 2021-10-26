const checkCartExists =  JSON.parse(localStorage.getItem("cart"))
const checkTotal =  parseFloat(localStorage.getItem("total"))
if(!checkCartExists || checkCartExists.length <= 0){
    window.location.href = "./passo-1.html?error=emptycart"
}else{
    checkCartExists.map((e) => {

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
            </div>
          </div>
        </div>
        `)
      })

      var sum = checkTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        });
    

      $("[name=empty]").removeClass("active")
      $("[name=sideBody]").addClass("active")
      $("[name=pay]").removeAttr("disabled")

      $("[name=result]").val(checkTotal);
      $("[name=resultText]").text(sum)
}
