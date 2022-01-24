import { ShopCard } from "./Card"

class Cart {
    constructor(parentElement) {
        this.products = []
    }

    listProductOnCart() {

    }

    #checkLocalStorage() {
        const data = JSON.parse(localStorage.getItem('cart'))
        if (data) {
            return data 
        } else {
            return []
        }
    }

    #updateLocalStorage() {
        const productsStringfied = JSON.stringify(this.products)
        localStorage.setItem('products', productsStringfied)
    }

    updateTotalAmount() {

    }

    updateTotalPrice() {

    }

    updateProducts() {

    }
}

export { Cart }