import { Fetch } from "../script/models/Fetch.js";

const formProduct = document.querySelector('form')
const productSelect = document.querySelector('#productsAvailable')

const nameProduct = document.querySelector('#productName')
const categoryProduct = document.querySelector('#productCategory')
const descriptionProduct = document.querySelector('#productDescription')
const URLImageProduct = document.querySelector('#productImageURL')
const priceProduct = document.querySelector('#productPrice')

async function populateProducts() {
  const data = await Fetch.get('/my/product')

  data.forEach((product) => {
    const option = document.createElement('option')
    option.value = product.id
    option.innerText = product.nome

    productSelect.appendChild(option)
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
  Fetch.delete(`/my/product/${id}`)
}

populateDatalistProducts()
//  createNewProduct()

