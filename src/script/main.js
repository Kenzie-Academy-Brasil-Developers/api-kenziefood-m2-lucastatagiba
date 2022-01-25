import { Panel } from "./models/Panel.js";
import { Fetch } from "./models/Fetch.js"
import { Cart } from "./models/Cart.js";

const panel__showCase = document.querySelector('#panel__showCase')
const cartProducts = document.querySelector('.cart__products')
const buttonsFilter = document.querySelector('.panel__buttonsFilter')
const input = document.querySelector('#inputSearchName')
const totalAmount = document.querySelector('.totalAmount__value')


const filterByName = (listProduct) => {
    listProduct.filterByName(input.value)
}
const addEventFilterByName = (listProduct) => {
input.addEventListener('keyup', () => filterByName(listProduct))
}


const filterByCategory = (event, listProduct) => {
    const element = event.target
    if(element.tagName === 'BUTTON'){ 
        const buttonContent = element.querySelector('span').innerText
        const category = buttonContent === 'Todos' ? '' : buttonContent
        listProduct.filterByCategory(category)
    }   
}
const addEventFilterByCategory = (listProduct) => {
    buttonsFilter.addEventListener('click', (event) => filterByCategory(event, listProduct))
}


const updateTotalAmount = (listProductCart) => {
    
}


const startPanel = async () => {
    const data = await Fetch.get('/product')
    const listProductCart = new Cart(cartProducts, totalAmount)
    const listProduct = new Panel(panel__showCase, data, listProductCart)
    listProduct.listProduct()
    
    addEventFilterByCategory(listProduct)
    addEventFilterByName(listProduct)
  
}

startPanel()




