import LocalStorage from "./localStorage.js";
import Login from "./loginFuncoes.js";

if (LocalStorage.loadingLocalStorage('Login').length == 0){
  LocalStorage.savingLocalStorage('Login', [])
}

document.querySelector('.logar').addEventListener('click', (e) => {
  e.preventDefault()
  Login.Logar()
})