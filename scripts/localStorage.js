export default class LocalStorage {
  static savingLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static loadingLocalStorage = (key) => {
    let aux = JSON.parse(localStorage.getItem(key))
    let data
    if (aux != null) {
      data = aux
    } else {
      data = []
    }
    return data
  }
}