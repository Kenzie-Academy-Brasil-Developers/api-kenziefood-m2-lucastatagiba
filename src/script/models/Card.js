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
        switch (event){
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

    handleClick() {

    }
}

export { Card, ShopCard }