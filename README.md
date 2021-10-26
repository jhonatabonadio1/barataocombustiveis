# Atualizações

- Foi criado uma nova página inicial, com estilos diferentes e algumas mudanças
- Foi removido o bootstrap
- Foi adicionado um novo estilo para o footer, tanto no html quanto no css.
- Foi criado um novo arquivo "scripts.js" com novas interações, já que removi o bootstrap.

# Novas páginas

- Passo-1: Essa é a página no qual o usuário vai escolher os combustíveis, aplicar cupons e ir para o checkout. 
- No momento eu estou fazendo os calculos por javascript mesmo, você pode encontrar no arquivo mathFuel.js
- Estou armazenando os itens do carrinho em um array chamado "cart". Esse array armazena todos os itens e armazena no localstorage para que quando o usuário atualizar a página, o carrinho não sumir. 
- Também estou fazendo verificações, como, por exemplo, verificar se o usuário foi para o checkout com carrinho vazio, se ele digitou um cupom válido ou se ele tentou adicionar algo no carrinho sem selecionar os valores.
- Na parte de checkout, eu adicionei o mesmo script de cartão de crédito da kitey. Eu lembro que isso gerou alguns problemas para o Reno, pois esse script eu peguei pronto na internet, apenas implementei no layout. (Não sabia da gravidade kkkk)
- Ainda não finalizei todas as páginas, ainda falta a de finalização (mostrando os qrcode)

# CSS

Cada sessão do site tem seu próprio css, como por exemplo o header. O header tem seu próprio css, o footer tem seu próprio css e as steps (Passo-1, Passo-2 e Passo-3) tem seu próprio css.

# Pastas
- Os arquivos de estilo foram salvos em ./css
- Os scripts foram salvos em ./scripts
- As imagens foram salvas em ./assets

# Scripts

- Card.js: Cartão de crédito no checkout
- Cart.js: Carrinho de compras
- Checkout: Verificações e recuperação de dados no checkout (passo-2)
- mathFuel: Cálculo de combustíveis (passo-1)
- owl.carousel.min.js: Carrosel na página inicial
- scripts.js: Scripts globais da aplicação (dropdowns, faq, etc)

## Caso tenha alguma dúvida ou se você ver que o código pode dar algum problema com o backend, não hesite em me chamar no Whatsapp
<br>
Essa é a versão 1.1 do layout
