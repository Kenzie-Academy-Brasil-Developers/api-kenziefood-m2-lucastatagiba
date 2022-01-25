import { Card } from "./models/Card.js";
import { Panel } from "./models/Panel.js";
import { Fetch } from "./models/Fetch.js"
import { Cart } from "./models/Cart.js";

const panel__showCase = document.querySelector('#panel__showCase')
const cartProducts = document.querySelector('.cart__products')
const button = document.querySelector('button')



const startPanel = async () =>{
    const data = await Fetch.get('/product')
    const listProductCart = new Cart(cartProducts)
    const listProduct =  new Panel(panel__showCase, data, listProductCart)
    listProduct.listProduct()
    button.addEventListener('click', ()=>{
        listProduct.filterByName()
    })
}

const startCart = async () => {
    const listProduct = new Cart(cartProducts)
    
}


startCart()
startPanel()


 

