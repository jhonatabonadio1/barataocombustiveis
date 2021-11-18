document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) {
    event.preventDefault();
  }
}, {
  passive: false
});

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


$(".toggle").click(function () {
  $("nav ul").toggleClass("active");
  $(".toggleTimes").removeClass("hidden")
});

$(".toggleTimes").click(function () {
  $("nav ul").removeClass("active")
  $(".toggleTimes").addClass("hidden")
})

$('#openCheckoutModal').click(function () {
  $('.checkoutModal').addClass('active');
  $('.modalMask').addClass('active');
  $('body').addClass('overflow-hidden');
})

$('#closeCheckoutModal').click(function () {
  $('.checkoutModal').removeClass('active');
  $('.modalMask').removeClass('active');
  $('body').removeClass('overflow-hidden');
})

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

$(document).click(function (e) {
  var target = e.target;
  $('.dropdown-menu').each(function () {
    var $this = $(this);
    var dropdown = $this.prev('.dropdown');

    if (dropdown[0] == target) $(this).toggle();
    else $(this).hide();
  });
});


$('#checkoutButton').click(function () {
  $('#checkout').slideToggle()
  $('.modalMask').addClass("active")
  $('html, body').addClass("noScroll")
})

$('#hiddenCheckout').click(function () {
  $("#checkout").slideToggle()
  $('.modalMask').removeClass("active")
  $('html, body').removeClass("noScroll")
})

/* REMOVIDO */
/** 
function emptyStation(){
  Swal.fire({
    title: 'Atenção',
    text: "No momento, não existem postos credênciados em região, deseja continuar?",
    icon: 'warning',
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonColor: '#00894b',
    confirmButtonText: 'Sim, quero continuar!',
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "./passo-1.html"
    }
  })
}


$("[data-target=regionModal]").click(function() {
  if($(this).parents("form").find("#regionInput").val()){
    $("#regionModal").fadeIn() 
  }
})

$("#regionModal #closeModal").click(function() {
  $("#regionModal").fadeOut()
})


**/
/* REMOVIDO */


/** NOVO BLOCO **/

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
/* */
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

function openModal() {
  $("#openLoginModal").addClass("active")
}

$("#signupButton").click(function () {
  $("#login").addClass("disabled")
  $("#signup").removeClass("disabled")
})

$("#loginButton").click(function () {
  $("#signup").addClass("disabled")
  $("#login").removeClass("disabled")
})

$("#modalMask").click(function () {
  $("#openLoginModal").removeClass("active")
  $("#signup").addClass("disabled")
  $("#login").removeClass("disabled")
})

$("#closeDialog").click(function () {
  $("#openLoginModal").removeClass("active")
  $("#signup").addClass("disabled")
  $("#login").removeClass("disabled")
})
/** NOVO BLOCO **/