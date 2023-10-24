import LocalStorage from "./localStorage.js";
import { setProdutos } from "./listaProdutos.js";
import Carrinho from "./carrinho.js";

const tableBody = document.querySelector('tbody')

const listaProdutos = setProdutos();
for (let i = 0; i < listaProdutos.length; i++) {
  tableBody.innerHTML += 
  `
  <tr id="a${listaProdutos[i].id}">
      <td><img src="${listaProdutos[i].url}" class="image" width="180px"></td>
      <td class="desc">${listaProdutos[i].description}</td>
      <td class="valor">${listaProdutos[i].value}</td>
      <td><input class="somar" type="button" value="+"></td>
  </tr>
  `
}

const adicionarItem = document.querySelectorAll('.somar')

for(let i = 0; i < adicionarItem.length; i++) {
  adicionarItem[i].addEventListener('click', () => {
    Carrinho.addItemCarrinho(i)
  })
}