import { Card } from "./Card"

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
        const productsFilter = this.productList.filter((product) => product.categoria === categoria)
        this.listProduct(productsFilter)
    }

    filterByName(inputValue) {
        const productsFilter = this.productList.filter((product) => product.nome === inputValue)
        this.listProduct(productsFilter)
    }
}

export {Panel}

