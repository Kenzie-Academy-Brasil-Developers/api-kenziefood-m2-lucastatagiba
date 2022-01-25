import { Card } from "./Card.js"

class Panel {
    constructor(parentElement, productList) {
        this.parentElement = parentElement
        this.productList = productList
    }

    listProduct(products = this.productList) {   
        this.parentElement.innerHTML = ''     
        products.forEach(product => {
            const card = new Card(product).createElement()            
            this.parentElement.appendChild(card)
        });
    }

    filterByCategory(categoria) {
        const validCategoria = categoria.toLowerCase().trim()
        const productsFilter = this.productList.filter(({categoria}) => categoria.toLowerCase() === validCategoria)
        this.listProduct(productsFilter)
    }

    filterByName(inputValue) {
        const validName = inputValue.toLowerCase().trim()
        const productsFilter = this.productList.filter(({nome}) => nome.includes(validName))
        this.listProduct(productsFilter)
    }
}

export {Panel}

