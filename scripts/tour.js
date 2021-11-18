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
      intro: "Este é um guia rápido para te ensinarmos a usar nossa plataforma de um jeito simples e rápido!"
    },
    {
      element: document.querySelector('.fuelCard'),
      title: "Combustível",
      intro: 'Cada item desse é um combustível, todos os combustíveis disponíveis estarão agrupados um abaixo do outro.'
    },
    {
      element: document.querySelector('.promo'),
      title: "Nota fiscal",
      intro: 'Ao clicar neste botão, você poderá ver e comprovar o preço da nota fiscal da distribuidora.'
    },
    {
      element: document.querySelector('.form'),
      title: "Cupons",
      intro: 'Aqui você pode adicionar a quantidade de cupons que você deseja comprar.'
    },
    {
      element: document.querySelector('.liters'),
      title: "Litros",
      intro: 'Aqui você pode selecionar a quantidade de litros que deseja comprar.'
    },
    {
      element: document.querySelector('.totalValueLiters'),
      title: "Valor total",
      intro: 'Selecionou a qualidade de litros e cupons? Agora é só conferir o valor total da sua seleção!'
    },
    {
      element: document.querySelector('.totalPrice'),
      title: "Pagamento",
      intro: 'Após selecionar os combustíveis que você deseja comprar abaixo, basta clicar em "Pagar Agora" e ir para a próxima etapa.'
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