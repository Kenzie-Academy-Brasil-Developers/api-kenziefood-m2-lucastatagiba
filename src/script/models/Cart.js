import { ShopCard } from "./Card.js"

class Cart {
    constructor(parentElement, amountDisplay) {
        this.parentElement = parentElement
        this.products = []
        this.totalPrice = 0
        this.totalAmount = 0
        this.amountDisplay = amountDisplay

        this.#checkLocalStorage()
    }

    listProductOnScreen() {
        this.parentElement.innerHTML = ''
        
        this.products.forEach(product => {
            const newCard = new ShopCard(product, this).createElement()

            this.parentElement.appendChild(newCard)
        })
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
        this.totalPrice = this.products.reduce((acc, { price }) => acc + price, 0)
        this.totalAmount = this.products.length
        this.amountDisplay.innerText = this.totalAmount

        this.#updateLocalStorage()
    }
}

export { Cart }