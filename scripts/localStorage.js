export default class LocalStorage {
  static savingLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static loadingLocalStorage = (key) => {
    let data = JSON.parse(localStorage.getItem(key))
    if (data == null) {
      data = []
    }
    return data
  }
}