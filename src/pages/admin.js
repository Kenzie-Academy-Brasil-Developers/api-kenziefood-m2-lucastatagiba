import { Fetch } from "../script/models/Fetch.js";
import FormControllers from "./FormControllers.js";

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

formProduct.addEventListener('submit', async (event) => {

  const product = {
    id: productSelect.value,
    nome: nameProduct.value,
    categoria: categoryProduct.value,
    descricao: descriptionProduct.value,
    imagem: URLImageProduct.value,
    preco: Number(priceProduct.value)
  }

 await FormControllers.submitForm(event, product)
 populateProducts()
})


populateProducts()