class Card {
    constructor({ id, imagem, categoria, nome, descricao, preco }, cart) {
        this.id = id
        this.imagem = imagem
        this.categoria = categoria
        this.nome = nome
        this.descricao = descricao
        this.preco = preco
        this.cart = cart
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
        imgCard.src = this.imagem

        const category = document.createElement('span')
        category.classList.add = 'category'
        category.classList.add = this.categoria
        category.innerText = this.categoria

        const name = document.createElement('span')
        name.classList.add = 'name'
        name.innerText = this.nome


        const description = document.createElement('p')
        description.classList.add = 'description'
        description.innerText = this.descricao

        const price = document.createElement('span')
        price.classList.add = 'price'
        price.innerText = this.preco

        const iconAddCart = document.createElement('img')
        iconAddCart.classList.add = 'iconAddCart'
        iconAddCart.src = './src/images/icons/addToCart.svg'
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
        const {cart, ...rest} = this
        this.cart.addProduct(rest)
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
        image.src = this.imagem
        image.alt = this.nome

        const infoProduct = document.createElement('div')
        infoProduct.classList.add('cartItem__infoProduct')

        const title = document.createElement('h3')
        title.innerText = this.nome 
        title.classList.add('cartItem__title')

        const category = document.createElement('span')
        category.innerText = this.categoria
        category.classList.add('cartItem__category')

        const price = document.createElement('span')
        price.classList.add('cartItem__price')
        
        price.innerText = `R$ ${this.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

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