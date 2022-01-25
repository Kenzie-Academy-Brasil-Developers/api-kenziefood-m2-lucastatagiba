import { Card } from "./models/Card.js";
import { Panel } from "./models/Panel.js";
import { Fetch } from "./models/Fetch.js"

const panel__showCase = document.querySelector('#panel__showCase')
const button = document.querySelector('button')

const startPanel = async () =>{
    const data = await Fetch.get('/product')
    const listProduct =  new Panel(panel__showCase, data)
    listProduct.listProduct()
    button.addEventListener('click', ()=>{
        listProduct.filterByName()
    })
}
startPanel()


 

