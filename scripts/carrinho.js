import LocalStorage from "./localStorage.js";
import { setProdutos } from "./listaProdutos.js";

let listaProdutos = setProdutos();

export default class Carrinho {

  static testaCarrinho() {
    const conteudoCarrinho = LocalStorage.loadingLocalStorage('Cart');
    for(let i = 0; i < setProdutos.length; i++) {
      if(conteudoCarrinho.find(e => e.id == setProdutos[i].id)
        && conteudoCarrinho.find(e => e.id == setProdutos[i].id).qtd >= setProdutos[i].qtd-1){
        add[i].disabled = true;
      }
    }
  }

  static mostraCarrinho = (result) => {
    for (const campo in result) {
      if(document.querySelector('#' + campo)) {
        document.querySelector('#' + campo).value = result[campo]
      }
    }
  }

  static addItemCarrinho = (id) => {
    const carrinho = LocalStorage.loadingLocalStorage('Cart')
    console.log(id)
    if (carrinho.find(e => e.id == id) === undefined) {
      carrinho.push({id: id, qtd: 1})
    } else {
      carrinho.find(e => e.id == id).qtd += 1
      this.testaCarrinho
    }
    LocalStorage.savingLocalStorage('Cart', carrinho)
  }
}