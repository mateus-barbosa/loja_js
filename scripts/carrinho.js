import LocalStorage from "./localStorage.js";
import { setProdutos } from "./listaProdutos.js";

let listaProdutos = setProdutos();

export default class Carrinho {

  static testaCarrinho(id) {
    const conteudoCarrinho = LocalStorage.loadingLocalStorage('Carrinho');
    if(conteudoCarrinho.find(e => e.id == id)
      && conteudoCarrinho.find(e => e.id == id).qtd >= listaProdutos.find(e => e.id == id).qtd){
      document.querySelectorAll(`.add[id="${id}"]`).forEach(item => {
        item.disabled = true
      }) 
    } else {
      document.querySelectorAll(`.add[id="${id}"]`).forEach(item => {
        item.disabled = false
      }) 
    }
  }

  static mostraCarrinho = () => {
    const conteudoCarrinho = document.querySelector('.conteudoModal-carrinho')
    const pedido = LocalStorage.loadingLocalStorage('Carrinho')
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
          <li><input id="${produto.id}" class='add' type='button' value='+'></li>
          <li><input class='sub' type='button' value='-'></li>
          <li>Valor total: ${this.ajustarMoeda(produto.value*pedido[i].qtd)}</li>
        </ul>
      </ul>
      `
      this.testaCarrinho(produto.id)

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
    const carrinho = LocalStorage.loadingLocalStorage('Carrinho')
    console.log(id)
    if (carrinho.find(e => e.id == id) === undefined) {
      carrinho.push({id: id, qtd: 1})
    } else {
      carrinho.find(e => e.id == id).qtd += 1
      this.testaCarrinho(id)
    }
    LocalStorage.savingLocalStorage('Carrinho', carrinho)
    this.mostraCarrinho()
  }
  
  static subItemCarrinho = (id) => {
    const carrinho = LocalStorage.loadingLocalStorage('Carrinho')
    carrinho.find(e => e.id == id).qtd -= 1
    let indexElement
    if (carrinho.find(e => e.id == id).qtd == 0) {
      indexElement = carrinho.filter(e => e.id != id)

      LocalStorage.savingLocalStorage('Carrinho', indexElement)
      this.mostraCarrinho()
      return
    }
    LocalStorage.savingLocalStorage('Carrinho', carrinho)
    this.mostraCarrinho()
  }

  static ajustarMoeda = (numero) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(numero)
  }
}