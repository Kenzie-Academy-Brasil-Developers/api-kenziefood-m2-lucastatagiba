import { Fetch } from "../script/models/Fetch.js";

const formProduct = document.querySelector('form')
const productSelect = document.querySelector('#productsAvailable')

const nameProduct = document.querySelector('#productName')
const categoryProduct = document.querySelector('#productCategory')
const descriptionProduct = document.querySelector('#productDescription')
const URLImageProduct = document.querySelector('#productImageURL')
const priceProduct = document.querySelector('#productPrice')

async function populateDatalistProducts() {
  const data = await Fetch.get('/my/product')

  console.log(data)

  data.forEach((product) => {
    const option = document.createElement('option')
    option.value = product.nome
    option.innerText = product.nome

    datalistProducts.appendChild(option)
  })
}

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
    case 'Exculir produto':
      deleteProduct()
      break
    default:
  }
}

async function createNewProduct() {

  const newProduct = {
    nome: 'nameProduct',
    preco: 123,
    categoria: 'categoryProduct',
    imagem: 'afaddfafafafafafda',
    descricao: 'descriptionProduct'
  }

  const data = await Fetch.post('/my/product', newProduct)
  console.log(data)
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
  Fetch.delete(`/my/product/${id}`)
}

populateDatalistProducts()
//  createNewProduct()

