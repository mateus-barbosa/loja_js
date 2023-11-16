import LocalStorage from "./localStorage.js";
import Pedido from "./pedidoFuncoes.js";

if (LocalStorage.loadingLocalStorage('Pedido').length == 0) {
    LocalStorage.savingLocalStorage('Pedido', [])
}

Pedido.carregarPedido()