import { Panel } from "./models/Panel.js";
import { Fetch } from "./models/Fetch.js"
import { Cart } from "./models/Cart.js";

const panel__showCase = document.querySelector('#panel__showCase')

const buttonShowModalLogin = document.querySelector('.buttonLogin')
const buttonHiddenModalLogin = document.querySelector('#fecharModal')

const buttonLogin = document.querySelector('#botaoEntrarModal')

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

const addEventFilterByName = (mainProductsPanel) => {
    input.addEventListener('keyup', () => mainProductsPanel.filterByName(input.value))
}

const removeAticveClass = () => {
    const classActive = document.querySelector('.panel__buttonCategory--active')

    if (classActive) {
        classActive.classList.remove('panel__buttonCategory--active')
    }
}

const filterByCategory = (event, mainProductsPanel) => {
    const element = event.target
    if (element.tagName === 'BUTTON') {
        const buttonContent = element.querySelector('span').innerText
        removeAticveClass()

        element.classList.add('panel__buttonCategory--active')

        const category = buttonContent === 'Todos' ? '' : buttonContent

        mainProductsPanel.filterByCategory(category)
    }
}

const addEventFilterByCategory = (mainProductsPanel) => {
    buttonsFilter.addEventListener('click', (event) => filterByCategory(event, mainProductsPanel))
}

const startPanel = async () => {
    const data1 = await Fetch.get('/product')
    const data2 = await Fetch.get('/my/product')
    
    const allProducts = [...data1, ...data2]

    const mainCart = new Cart(cartProducts, totalAmount, totalPrice)
    const mainProductsPanel = new Panel(panel__showCase, allProducts, mainCart)

    mainProductsPanel.listProduct()

    addEventFilterByCategory(mainProductsPanel)
    addEventFilterByName(mainProductsPanel)
}

const authenticateUser = () => {
    const superUser = {
        username: 'admin',
        password: 'admin'
    }
    const usernameInput = document.querySelector('#modalLoginUsername').value
    const passwordInput = document.querySelector('#modalLoginPassword').value
    
    if(superUser.username === usernameInput && superUser.password === passwordInput){
        window.location.href = './src/pages/admin.html'
    } else {
        alert('Username ou senha incorretos')
    }
}

const toggleLoginModal = () => {
    const modal = document.querySelector('.modalLogin')

    modal.classList.toggle('modalLogin--hidden')
}

buttonShowModalLogin.addEventListener('click', toggleLoginModal)

buttonHiddenModalLogin.addEventListener('click', toggleLoginModal)

buttonLogin.addEventListener('click', authenticateUser)

window.addEventListener('resize', cartPositionAdjust)
cartPositionAdjust()

startPanel()