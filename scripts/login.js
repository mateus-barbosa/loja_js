import LocalStorage from "./localStorage.js";

if (LocalStorage.loadingLocalStorage('Login').length == 0){
  LocalStorage.savingLocalStorage('Login', [])
}

document.querySelector('.logar').addEventListener('click', (e) => {
  e.preventDefault()
  Logar()
})

function Logar() {
  const usuariosRegistrados = LocalStorage.loadingLocalStorage('Clientes');
  
  const formInput = document.querySelectorAll('.inputLogin')
  const email = formInput[0].value
  const senha = formInput[1].value
  
  let Login = usuariosRegistrados.find(e => e.email == email) 
  
  if (Login != undefined) {
    if (Login.senha == senha) {
      LocalStorage.savingLocalStorage('Login', Login.email)
    } else {
      alert('Senha incorreta')
    }
  } else {
    alert('Email não registrado')
  }
}