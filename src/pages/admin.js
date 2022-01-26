import { Fetch } from "../script/models/Fetch.js";

const formProduct = document.querySelector('form')
const productSelect = document.querySelector('#productsAvailable')

const nameProduct = document.querySelector('#productName')
const categoryProduct = document.querySelector('#productCategory')
const descriptionProduct = document.querySelector('#productDescription')
const URLImageProduct = document.querySelector('#productImageURL')
const priceProduct = document.querySelector('#productPrice')

let savedProducts = []

async function getDataFromAPI() {
  const data = await Fetch.get('/my/product')
  savedProducts = data
}

async function populateProducts() {

  await getDataFromAPI()

  productSelect.innerHTML = '<option>Selecione um produto para alterar</option>'

  savedProducts.forEach((product) => {
    const option = document.createElement('option')
    option.value = product.id
    option.innerText = product.nome

    productSelect.appendChild(option)
  })
}


function autoFillInputs() {
  const productId = Number(productSelect.value)

  const product = savedProducts.find(({ id }) => id === productId)

  nameProduct.value = product.nome
  categoryProduct.value = product.categoria
  descriptionProduct.value = product.descricao
  URLImageProduct.value = product.imagem
  priceProduct.value = Number(product.preco)
}


productSelect.addEventListener('change', autoFillInputs)

formProduct.addEventListener('submit', submitForm)

function submitForm(event) {
  event.preventDefault()
  const buttonName = event.submitter.innerText

  switch (buttonName) {
    case 'Novo produto':
      createNewProduct()
      break
    case 'Atualizar produto':
      updateProduct()
      break
    case 'Excluir produto':
      deleteProduct()
      break
    default:
  }
}

async function createNewProduct() {

  const newProduct = {
    nome: nameProduct.value,
    preco: Number(priceProduct.value),
    categoria: categoryProduct.value,
    imagem: URLImageProduct.value,
    descricao: descriptionProduct.value
  }

  const { error, ...product } = await Fetch.post('/my/product', newProduct)
  
  if(error){
    alert(error)
  } else {
    alert(`Produto ${product.nome.toUpperCase()} foi criado com sucesso`)
  }
}

async function updateProduct() {
  console.log(document.querySelector('#products'))

  const toUpdate = {
    nome: nameProduct,
    preco: priceProduct,
    categoria: categoryProduct,
    imagem: URLImageProduct,
    descricao: descriptionProduct
  }

  Fetch.patch(`/my/product/${id}`, toUpdate)
}


async function deleteProduct() {
  const idProduct = productSelect.value
  if (idProduct) {
    const deletedProduct = await Fetch.delete(`/my/product/${idProduct}`)
    if (deletedProduct === 204) {
      alert('O produto selecionado foi excluido com sucesso !')
      populateProducts()
    } else {
      alert('Verifique os campos e tente novamente !')
    }
  }else{
    alert('Selecione um produto a ser deletado.')
  }

}

populateProducts()
// createNewProduct()

