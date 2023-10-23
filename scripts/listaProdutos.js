function setProducts() {
  let productList = [];
  let product = {
    id: 1,
    description: "lorem",
    value: 33,
    qtd: 10,
    url: '',
  }
  productList.push(product)

  product = {
    id: 2,
    description: "lorem",
    value: 66,
    qtd: 20,
    url: '',
  }
  productList.push(product)

  product = {
    id: 3,
    description: "lorem",
    value: 99,
    qtd: 30,
    url: '',
  }
  productList.push(product)

  return productList
}