/****************/
/**** TABS ******/
/****************/

function tabLink(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("flextab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/****************/
/**** TABS ******/
/****************/


/***************/
/**** FAQ ******/
/***************/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/***************/
/**** FAQ ******/
/***************/

/***************************/
/**** NAVBAR DROPDOWN ******/
/***************************/

$(document).click(function (e) {
  var target = e.target;
  $('.dropdown-menu').each(function () {
    var $this = $(this);
    var dropdown = $this.prev('.dropdown');

    if (dropdown[0] == target) $(this).toggle();
    else $(this).hide();
  });
});

/*******************************/
/**** END NAVBAR DROPDOWN ******/
/*******************************/

/***************************/
/**** OPEN FILTER MENU *****/
/***************************/

$("#toggleFilters").click(function () {
  $("#filters").slideToggle()
  if ($("#toggleFilters").find("i").hasClass("fa-chevron-down")) {
    $("#toggleFilters").find("i").removeClass("fa-chevron-down")
    $("#toggleFilters").find("i").addClass("fa-chevron-up")
  } else {
    $("#toggleFilters").find("i").removeClass("fa-chevron-up")
    $("#toggleFilters").find("i").addClass("fa-chevron-down")
  }

})

/******************************/
/**** END OPEN FILTER MENU ****/
/******************************/

/*****************************/
/***** OPEN ASIDE BUTTON ****/
/****************************/

$("#toggleNav").click(function () {

  $("#asideNav").toggleClass("active")
  $("#asideNav.active").animate({
    left: '-325px'
  }, 0);
  $("#asideNav.active").animate({
    left: '0px'
  }, 350);
  $("#asideMask").toggleClass("active")
  $("body").css("overflowY", "hidden")
})
$("#asideMask").click(function () {
  $("#asideNav.active").animate({
    left: '-325px'
  }, 350, function () {
    $("#asideNav").removeClass("active")
    $("#asideNav").css("left", "")
    $("#asideMask").removeClass("active")
  })
})
$(window).resize(function () {
  if ($(window).width() > 980) {
    $("#asideNav").removeClass("active")
    $("#asideMask").removeClass("active")
  }
})

/*********************************/
/***** END OPEN ASIDE BUTTON *****/
/*********************************/

/******************************/
/****** OPEN CART BUTTON ******/
/******************************/

$("#showCart").click(function () {

  $("#cart").toggleClass("active")
  $("#cart").find(".cartBody").animate({
    right: '-325px'
  }, 0);
  $("#cart").find(".cartBody").animate({
    right: '0px'
  }, 350);
  $("body").css("overflowY", "hidden")
})

$("#cart").find("#cartMask").click(function () {
  $("#cart").find(".cartBody").animate({
    right: '-325px'
  }, 350, function () {
    $("#cart").removeClass("active")
    $("#cart").find(".cartBody").css("right", "")
  })
})

$("#cart").find("#closeCart").click(function () {
  $("#cart").find(".cartBody").animate({
    right: '-350px'
  }, 350, function () {
    $("#cart").removeClass("active")
    $("#cart").find(".cartBody").css("right", "")
  })
})


/******************************/
/**** END OPEN CART BUTTON ****/
/******************************/

/*************************/
/****** LOGIN MODAL ******/
/*************************/

function openModal() {
  /* ADICIONA CLASSE ACTIVE NO MODAL */
  $("#openLoginModal").addClass("active")

  /* AO CLICAR NO BOTÃO DE SIGNUP */
  $("#signupButton").click(function () {
    $("#login").addClass("disabled")
    $("#signup").removeClass("disabled")
  })

  /* AO CLICAR NO BOTÃO DE LOGIN */
  $("#loginButton").click(function () {
    $("#signup").addClass("disabled")
    $("#login").removeClass("disabled")
  })

  /* AO CLICAR EM QUALQUER ÁREA FORA DO MODAL */
  $("#modalMask").click(function () {
    $("#openLoginModal").removeClass("active")
    $("#signup").addClass("disabled")
    $("#login").removeClass("disabled")
  })

  /* AO CLICAR NO BOTÃO DE FECHAR */

  $("button[id='closeDialog']").click(function () {
    $("#openLoginModal").removeClass("active")
    $("#signup").addClass("disabled")
    $("#login").removeClass("disabled")
  })

}

/*****************************/
/****** END LOGIN MODAL ******/
/*****************************/