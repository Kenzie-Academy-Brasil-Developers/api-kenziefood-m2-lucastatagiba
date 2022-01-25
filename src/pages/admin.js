import { Fetch } from "../script/models/Fetch.js";

const formProduct = document.querySelector('form')
const datalistProducts = document.querySelector('#listProducts')

const nameProduct = document.querySelector('#productName')
const categoryProduct = document.querySelector('#productCategory')
const descriptionProduct = document.querySelector('#productDescription')
const URLImageProduct = document.querySelector('#productImageURL')
const priceProduct = document.querySelector('#productPrice')

async function populateDatalistProducts() {
  const data = await Fetch.get('/my/product')
  
  data.forEach((product) => {
    const option = document.createElement('option')
    option.value = product.name

    datalistProducts.appendChild(option)
  })
}

formProduct.addEventListener('submit', submitForm)

function submitForm(event){
  event.preventDefault()
  buttonName = event.submitter.innerText
  
  switch(buttonName){
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

async function createNewProduct(){
  const newProduct = {
    // nameProduct
    // categoryProduct
    // descriptionProduct
    // URLImageProduct
    // priceProduct
  }
  Fetch.post('/my/product', newProduct)
}

async function updateProduct(){
  const toUpdate = {
  // nameProduct
  // categoryProduct
  // descriptionProduct
  // URLImageProduct
  // priceProduct
  }
  Fetch.patch(`/my/product/${id}`, toUpdate)
}

async function deleteProduct(){
  Fetch.delete(`/my/product/${id}`)
}

populateDatalistProducts()


