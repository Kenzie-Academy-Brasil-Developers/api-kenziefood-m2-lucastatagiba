import { Card } from "./Card.js"

class Panel {
    constructor(parentElement, productList, cart) {
        this.parentElement = parentElement
        this.productList = productList
        this.cart = cart
    }

    listProduct(products = this.productList) {   
        this.parentElement.innerHTML = ''     
        products.forEach(product => {
            const card = new Card(product, this.cart).createElement()            
            this.parentElement.appendChild(card)
        });
    }

    filterByCategory(categoria) {
        if(categoria){
            const validCategoria = categoria.toLowerCase().trim()
            const productsFilter = this.productList.filter(({categoria}) => categoria.toLowerCase() === validCategoria)
            this.listProduct(productsFilter)
        } else{
            this.listProduct()
        }
    }

    filterByName(inputValue) {
        const validName = inputValue.toLowerCase().trim()
        const productsFilter = this.productList.filter(({nome}) => nome.toLowerCase().includes(validName))
        this.listProduct(productsFilter)
    }
}

export {Panel}

