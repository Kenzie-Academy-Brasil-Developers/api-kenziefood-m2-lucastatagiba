import { Card } from "./models/Card.js";
import { Panel } from "./models/Panel.js";
import { Fetch } from "./models/Fetch.js"

const panel__showCase = document.querySelector('#panel__showCase')
console.log(panel__showCase)

const startPanel = async () =>{
    const data = await Fetch.get()
    return new Panel(panel__showCase, data)
}
startPanel()


 

