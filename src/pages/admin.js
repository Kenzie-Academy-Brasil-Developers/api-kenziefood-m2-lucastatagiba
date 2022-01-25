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
  productSelect.innerHTML = ''

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
    case 'Excluir produto':
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
    imagem: 'https://storage.googleapis.com/cpt-partners-content-prod/fc761428-4d17-4edf-bcd7-f9632d2695d6.png',
    descricao: 'descriptionProduct'
  }

  const data = await Fetch.post('/my/product', newProduct)

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
  const deletedProduct = await Fetch.delete(`/my/product/${idProduct}`)
  if (deletedProduct === 204) {
    alert('O produto selecionado foi excluido com sucesso !')
    populateProducts()
  } else {
    alert('Verifique os campos e tente novamente !')
  }
}

populateProducts()
// createNewProduct()

