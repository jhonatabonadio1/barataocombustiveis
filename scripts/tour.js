// and check for it when deciding whether to start. 

var introguide = introJs();

var options = {
  nextLabel: "Próximo",
  prevLabel: "Anterior",
  doneLabel: "Finalizar",
  scrollToElement: false,
  steps: [
    {
      title: "Bem-vindo(a)!",
      intro: "Este é um guia rápido para te ajudar a usar nossa plataforma de um jeito simples e fácil!"
    },
    {
      element: document.querySelector('.fuelCard'),
      title: "Combustível",
      intro: 'Todos os combustíveis disponíveis estarão agrupados em uma lista em forma de cartões.'
    },
    {
      element: document.querySelector('.promo'),
      title: "Nota fiscal",
      intro: 'Ao clicar neste botão, você poderá ver e comprovar o preço da nota fiscal da distribuidora.'
    },
    {
      element: document.querySelector('.form'),
      title: "Cupons",
      intro: 'Neste campo, você pode adicionar a quantidade de cupons que você deseja comprar.'
    },
    {
      element: document.querySelector('.liters'),
      title: "Litros",
      intro: 'Já neste campo, você pode selecionar a quantidade de litros que deseja comprar.'
    },
    {
      element: document.querySelector('.totalValueLiters'),
      title: "Valor total",
      intro: 'Selecionou a qualidade de litros e cupons? Agora é só conferir o valor total da sua seleção e ir para o pagamento!'
    },
    {
      element: document.querySelector('.totalPrice'),
      title: "Pagamento",
      intro: 'Basta clicar em "Pagar Agora" e ir para a etapa de pagamento. Facil, não é?'
    },
  ]
}

window.addEventListener('load', function () {
  var doneTour = localStorage.getItem('EventTour') === 'Completed';
  if (doneTour) {
    return;
  } else {
    introguide.setOptions(
      options).start();
    introguide.oncomplete(function () {
      localStorage.setItem('EventTour', 'Completed');
    });

    introguide.onexit(function () {
      localStorage.setItem('EventTour', 'Completed');
    });
  }

})

// add a flag when we're done
introJs().oncomplete(function () {
  localStorage.setItem('doneTour', 'yeah!');
})

// add a flag when we exit
introJs().onexit(function () {
  localStorage.setItem('doneTour', 'yeah!');
});