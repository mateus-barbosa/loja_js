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

  static mostraCarrinho = () => {
    const conteudoCarrinho = document.querySelector('.conteudoModal-carrinho')
    const pedido = LocalStorage.loadingLocalStorage('Cart')
    conteudoCarrinho.innerHTML = '' 
    for (let i = 0; i < pedido.length; i++) {
      const produto = listaProdutos.find(e => e.id == pedido[i].id)
      console.log(produto)
      conteudoCarrinho.innerHTML += 
      `
      <ul id="${produto.id}" class="item">
        <li>${produto.description}</li>
        <ul>
          <li>Quantidade: ${pedido[i].qtd}</li>
          <li><input class='add' type='button' value='+'></li>
          <li><input class='sub' type='button' value='-'></li>
          <li>Valor total: ${this.ajustarMoeda(produto.value*pedido[i].qtd)}</li>
        </ul>
      </ul>
      `

      document.querySelectorAll('.item').forEach(item => {
        item.querySelector('.add').addEventListener('click', () => {
          this.addItemCarrinho(item.id)
        }) 
        item.querySelector('.sub').addEventListener('click', () => {
          this.subItemCarrinho(item.id)
        })
      })
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
    this.mostraCarrinho()
  }
  
  static subItemCarrinho = (id) => {
    const carrinho = LocalStorage.loadingLocalStorage('Cart')
    carrinho.find(e => e.id == id).qtd -= 1
    let indexElement
    if (carrinho.find(e => e.id == id).qtd == 0) {
      indexElement = carrinho.filter(e => e.id != id)

      LocalStorage.savingLocalStorage('Cart', indexElement)
      this.mostraCarrinho()
      return
    }
    LocalStorage.savingLocalStorage('Cart', carrinho)
    this.mostraCarrinho()
  }

  static ajustarMoeda = (numero) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(numero)
  }
}