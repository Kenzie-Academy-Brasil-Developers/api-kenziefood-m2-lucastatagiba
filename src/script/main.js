import { Panel } from "./models/Panel.js";
import { Fetch } from "./models/Fetch.js"
import { Cart } from "./models/Cart.js";

const panel__showCase = document.querySelector('#panel__showCase')
const cartProducts = document.querySelector('.cart__products')
const buttonsFilter = document.querySelector('.panel__buttonsFilter')
const input = document.querySelector('#inputSearchName')
const totalAmount = document.querySelector('.totalAmount__value')
const totalPrice = document.querySelector('.totalPrice__value')


const cartPositionAdjust = () => {
    if (window.innerWidth > 1000) {

        const panelContainerDisplay = document.querySelector('.panel__container')
        const cartDisplay = document.querySelector('.cart')

        const { left } = panelContainerDisplay.getBoundingClientRect()

        cartDisplay.style.right = `${left}px`
    }
}

const filterByName = (listProduct) => {
    listProduct.filterByName(input.value)
}

const addEventFilterByName = (listProduct) => {
    input.addEventListener('keyup', () => filterByName(listProduct))
}

const removeAticveClass = () => {
    const classActive = document.querySelector('.panel__buttonCategory--active')
    if (classActive) {
        classActive.classList.remove('panel__buttonCategory--active')
    }
}

const filterByCategory = (event, listProduct) => {
    const element = event.target
    if (element.tagName === 'BUTTON') {
        const buttonContent = element.querySelector('span').innerText
        removeAticveClass()
        element.classList.add('panel__buttonCategory--active')
        const category = buttonContent === 'Todos' ? '' : buttonContent
        listProduct.filterByCategory(category)
    }
}

const addEventFilterByCategory = (listProduct) => {
    buttonsFilter.addEventListener('click', (event) => filterByCategory(event, listProduct))
}

const startPanel = async () => {
    const data1 = await Fetch.get('/product')
    const data2 = await Fetch.get('/my/product')
    
    const allProducts = [...data1, ...data2]

    const listProductCart = new Cart(cartProducts, totalAmount, totalPrice)
    const listProduct = new Panel(panel__showCase, allProducts, listProductCart)

    listProduct.listProduct()

    addEventFilterByCategory(listProduct)
    addEventFilterByName(listProduct)
}

window.addEventListener('resize', cartPositionAdjust)

cartPositionAdjust()

startPanel()
