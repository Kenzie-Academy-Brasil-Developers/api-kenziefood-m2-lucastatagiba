import { ShopCard } from "./Card.js"

class Cart {
    constructor(parentElement, amountDisplay, totalPriceDisplay) {
        this.parentElement = parentElement
        this.products = []
        this.totalPrice = 0
        this.totalAmount = 0
        this.totalamountDisplay = amountDisplay
        this.totalPriceDisplay = totalPriceDisplay

        this.#checkLocalStorage()
    }

    listProductOnScreen() {
        this.parentElement.innerHTML = ''
        
        this.products.forEach(product => {
            const newCard = new ShopCard(product, this).createElement()

            this.parentElement.appendChild(newCard)
        })

        if(this.products.length > 0){
            this.parentElement.parentElement.classList.remove('cart__productsArea--empty')
        } else {
            this.parentElement.parentElement.classList.add('cart__productsArea--empty')
        }
    }

    #checkLocalStorage() {
        const data = JSON.parse(localStorage.getItem('cart'))

        if (data) {
            this.products = data.map((product, i) => ({...product, id: i}))

            this.updateProductsStates()

            this.listProductOnScreen()

        } else {
            this.products = []
        }
    }

    #updateLocalStorage() {        
        const productsStringfied = JSON.stringify(this.products)

        localStorage.setItem('cart', productsStringfied)
    }

    addProduct(product) {
        product.id = this.products.length
        this.products.push(product)

        this.updateProductsStates()
        this.listProductOnScreen()
    }

    removeProduct(productId) {
        this.products = this.products.filter(({id}) => id !== productId)

        this.updateProductsStates()
        this.listProductOnScreen()
    }

    updateProductsStates() {
        this.totalPrice = this.products.reduce((acc, { preco }) => acc + Number(preco), 0)
        this.totalAmount = this.products.length
        this.totalamountDisplay.innerText = this.totalAmount
        this.totalPriceDisplay.innerText = `R$ ${this.totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

        this.#updateLocalStorage()
    }
}

export { Cart }