# Novos arquivos:

./scripts/map.js

./css/postos.css
./css/account.css
./css/qrcode.css

./postos.html
./addcard.html
./orders.html
./payments.html
./qrcode.html
./settings.html
./wallet.html

# Arquivos alterados:

index.html (Removido modal e redirecionando links para postos.html)
scripts.js (Removido scritps do modal e adicionado alguns scripts do dashboard)
global.css (Troca do line-height do h1 dentro de @media(min-width: 700) de 38px para 48px)

# Mapa

- Para os scripts funcionarem, deverá ser injetado um array de objetos denominado "locations" no começo da página com as informações dos postos. Coloquei um exemplo na página. 
- Eu gerei uma API do Google Maps pela minha conta.

# Dashboard

## Pedidos

- Todos os pedidos feitos ficarão nesta página
- Ao clicar em cima de um pedido, caso o cupom esteja disponível, o usuário é redirecionado para: qrcode.html
- Caso o cupom esteja indisponível, cancelado ou pendente, deve ser mostrado um alerta (Coloquei as funções dos alertas no final da página de orders.js, basta chamar a função ao clicar)
- Na página possui 2 formulários de filtros, uma para desktop e outro para mobile

## Pagamentos

- Todos os pagamentos feitos ficarão nesta página
- Ao clicar em cima de um pagamento, caso o pagamento foi concluído com sucesso, o usuário é redirecionado para uma aba com a nota fiscal em pdf.
- Caso o pagamento esteja recusado, cancelado ou pendente, deve ser mostrado um alerta. (Coloquei as funções dos alertas no final da página de payments.js, basta chamar a função ao clicar)
- Na página possui 2 formulários de filtros, uma para desktop e outro para mobile

## Wallet

- Todos os cartões salvos ficarão salvos nesta página

## Settings

- Aqui fica as configurações do usuário.

## QRCode

- Página do cupom

# Index.html

- Foi retirado a janela modal de postos credênciados
- Coloquei os links nos botões da página 

# Scripts.js

- Foi removido o script da janela modal
- Foi adicionado scripts do dashboard
