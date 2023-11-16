import LocalStorage from "./localStorage.js";

export default class Pedido {
  
  static carregarPedido = () => {
    const carrinho = LocalStorage.loadingLocalStorage('Carrinho')
    const pedido = LocalStorage.loadingLocalStorage('Pedido')

    const conteudoPedido = {
      numero: Math.random(),
      carrinho: carrinho
    }
    
    if (conteudoPedido.carrinho.length != 0) {
      pedido.push(conteudoPedido)
      LocalStorage.savingLocalStorage('Pedido', pedido)
    }
    
    this.limpaCarrinho()
    this.mostrarListaPedido()
  }

  static mostrarListaPedido = () => {
    const contador = LocalStorage.loadingLocalStorage('Pedido')
    const teste = document.querySelector('.listaPedido')
    
    for (let i = 0; i < contador.length; i++) {
      teste.innerHTML +=
      `<li><a id="${i+1}" style="cursor: pointer">Pedido n${i+1}</a></li>
      `
    }
  }

  static limpaCarrinho = () => {
    localStorage.setItem('Carrinho', '[]')
  }
}