class Card {
    constructor({ id, imagem, categoria, nome, descricao, preco }) {
        this.id = id
        this.img = imagem
        this.category = categoria
        this.name = nome
        this.description = descricao
        this.price = preco
    }


    // /**
    // * @param {string} url
    // */

    // cria cada card
    createElement() {
        const articleCard = document.createElement('article')
        articleCard.classList.add = 'articleCard'

        const imgCard = document.createElement('img')
        imgCard.classList.add = 'productImg'
        imgCard.src = this.img

        const category = document.createElement('span')
        category.classList.add = 'category'
        category.classList.add = this.category
        category.innerText = this.category

        const name = document.createElement('span')
        name.classList.add = 'name'
        name.innerText = this.name


        const description = document.createElement('p')
        description.classList.add = 'description'
        description.innerText = this.description

        const price = document.createElement('span')
        price.classList.add = 'price'
        price.innerText = this.price

        const iconAddCart = document.createElement('img')
        iconAddCart.classList.add = 'iconAddCart'
        iconAddCart.addEventListener('click', this)

       
        articleCard.append(imgCard, category, name, description, price, iconAddCart)   
        return articleCard
    }

    // evento para chamar outros eventos
    handleEvent(event) {
        switch (event.type) {
            case 'click':
                this.handleClick(event)
                break;
            default:
                break;
        }
    }

    handleClick() {

    }

}

class ShopCard extends Card {
    constructor(product, cart) {
        super(product)
        this.cart = cart
    }

    createElement() {
        const card = document.createElement('article')
        card.classList.add('cartItem')

        const image = document.createElement('img')
        image.classList.add('cartItem__image')
        image.src = this.img
        image.alt = this.name

        const infoProduct = document.createElement('div')
        infoProduct.classList.add('cartItem__infoProduct')

        const title = document.createElement('h3')
        title.innerText = this.name 
        title.classList.add('cartItem__title')

        const category = document.createElement('span')
        category.innerText = this.category
        category.classList.add('cartItem__category')

        const price = document.createElement('span')
        price.classList.add('cartItem__price')
        price.innerText = `R$ ${this.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

        infoProduct.append(title, category, price)

        const removeButton = document.createElement('button')
        removeButton.classList.add('cartItem__deleteButton')
        removeButton.addEventListener('click', this)

        const deleteIcon = document.createElement('img')
        deleteIcon.src = './src/images/icons/trash.svg'
        deleteIcon.alt = 'delete'

        removeButton.appendChild(deleteIcon)

        card.append(image, infoProduct, removeButton)

        return card
    }

    handleClick() {
        this.cart.removeProduct(this.id)
    }
}

export { Card, ShopCard }