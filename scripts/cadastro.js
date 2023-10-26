import LocalStorage from "./localStorage.js";
import Cadastro from "./cadastroFuncoes.js";

if(LocalStorage.loadingLocalStorage('Clientes').length == 0) {
  LocalStorage.savingLocalStorage('Clientes', [])
}

document.querySelector('#mostrarSenha').addEventListener('click', () => {
  const senha = document.querySelector('#senha')
  if(senha.type == 'password' && senha.value != '') {
    senha.type = 'text'
  } else {
    senha.type = 'password'
  }
})

document.querySelector('.cadastrar').addEventListener('click', (e) => {
  e.preventDefault()
  Cadastro.CadastrarUsuario()
})