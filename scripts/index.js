import LocalStorage from "./localStorage.js";
import { setProdutos } from "./listaProdutos.js";
import Carrinho from "./carrinho.js";

const tableBody = document.querySelector('tbody')

if(LocalStorage.loadingLocalStorage('Carrinho').length == 0) {
  LocalStorage.savingLocalStorage('Carrinho', [])
}

const listaProdutos = setProdutos();
for (let i = 0; i < listaProdutos.length; i++) {
  tableBody.innerHTML += 
  `
  <tr>
      <td><img src="${listaProdutos[i].url}" class="image" width="180px"></td>
      <td class="desc">${listaProdutos[i].description}</td>
      <td class="valor">${Carrinho.ajustarMoeda(listaProdutos[i].value)}</td>
      <td><input id="${listaProdutos[i].id}" class="add" type="button" value="+"></td>
  </tr>
  `
  Carrinho.testaCarrinho(listaProdutos[i].id)
}

const adicionarItem = document.querySelectorAll('.add')

for(let i = 0; i < adicionarItem.length; i++) {
  adicionarItem[i].addEventListener('click', () => {
    Carrinho.addItemCarrinho(adicionarItem[i].id)
  })
}

Carrinho.mostraCarrinho()