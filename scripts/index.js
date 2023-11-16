import Carrinho from "./carrinho.js";
import { setProdutos } from "./listaProdutos.js";
import LocalStorage from "./localStorage.js";
import Pedido from "./pedidoFuncoes.js";

const tableBody = document.querySelector('tbody')

if(LocalStorage.loadingLocalStorage('Carrinho').length == 0) {
  LocalStorage.savingLocalStorage('Carrinho', [])
}

const listaProdutos = setProdutos();
for (const element of listaProdutos) {
  tableBody.innerHTML += 
  `
  <tr>
      <td><img src="${element.url}" class="image" width="180px"></td>
      <td class="desc">${element.description}</td>
      <td class="valor">${Carrinho.ajustarMoeda(element.value)}</td>
      <td><input id="${element.id}" class="add" type="button" value="+"></td>
  </tr>
  `
  Carrinho.testaCarrinho(element.id)
}

const adicionarItem = document.querySelectorAll('.add')

for(const element of adicionarItem) {
  element.addEventListener('click', () => {
    Carrinho.addItemCarrinho(element.id)
  })
}

Carrinho.mostraCarrinho()

const finalizar = document.querySelector('#finalizaPedido')

if (finalizar) {
    finalizar.addEventListener('click', () => {
        window.location.href = '../pedido.html'
        Pedido.carregarPedido()
    })
}