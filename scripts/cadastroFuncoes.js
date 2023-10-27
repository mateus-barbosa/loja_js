import LocalStorage from "./localStorage.js"

export default class Cadastro {

  static CadastrarUsuario = () => {
    const usuarios = LocalStorage.loadingLocalStorage('Clientes')
    
    const formInput = document.querySelectorAll('.formInput')
    const nome = formInput[0].value
    const email = formInput[1].value
    const senha = formInput[2].value
    
    const usuario = {
      nome, 
      email,
      senha
    }
    
    if (nome === "" || email === "" || senha === "") {
      alert('Todos os campos devem estar preenchidos')
      return
    }

    if (!this.validaCadastro(usuario.email)) {
      return
    }
    
    usuarios.push(usuario)
    LocalStorage.savingLocalStorage('Clientes', usuarios)
    
    alert('Usuário criado com sucesso')
    window.location.href = '../index.html'

  }

  static validaCadastro = (email) => {
    const usuarios = LocalStorage.loadingLocalStorage('Clientes')
    for (const usuario of usuarios) {
      if (usuario.email == email) {
        alert('Usuário já cadastrado')
        return false
      }
    }
    return true
  }
}
