export const setProdutos = () => {
  let produtoList = [];
  let produto = {
    id: 1,
    description: "lorem",
    value: 33,
    qtd: 10,
    url: '',
  }
  produtoList.push(produto)

  produto = {
    id: 2,
    description: "lorem2",
    value: 66,
    qtd: 20,
    url: '',
  }
  produtoList.push(produto)

  produto = {
    id: 3,
    description: "lorem3",
    value: 99,
    qtd: 30,
    url: '',
  }
  produtoList.push(produto)

  produto = {
    id: 4,
    description: "lorem4",
    value: 109,
    qtd: 40,
    url: '',
  }
  produtoList.push(produto)

  return produtoList
}