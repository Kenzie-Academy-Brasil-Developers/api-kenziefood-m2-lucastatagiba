import { Fetch } from "../script/models/Fetch.js";

class FormControllers {

  static async submitForm(event, product) {
    event.preventDefault()
    const buttonName = event.submitter.innerText

    switch (buttonName) {
      case 'Novo produto':
       await FormControllers.createNewProduct(product)
        break
      case 'Atualizar produto':
       await FormControllers.updateProduct(product)
        break
      case 'Excluir produto':
       await FormControllers.deleteProduct(product)
        break
      default:
    }
  }

  static async createNewProduct(product) {
  
    const {id, ...newProduct} = product

    const { error, ...created } = await Fetch.post('/my/product', newProduct)
  
    if (error) {
      alert(error)
    } else {
      alert(`Produto ${created.nome.toUpperCase()} foi criado com sucesso !`)
    }
  }

  static async updateProduct(product) {
    const {id, ...toUpdate} = product

    if (id) {
      const { msg, ...updated } = await Fetch.patch(`/my/product/${id}`, toUpdate)
  
      if (msg) {
        alert(msg)
      } else {
        alert(`Produto ${updated.nome.toUpperCase()} foi atualizado com sucesso !`)
      }

    } else {
      alert('Selecione um produto a ser atualizado.')
    }
  }

  static async deleteProduct(product) {
    const idProduct = product.id
  
    if (idProduct) {
      const deletedProduct = await Fetch.delete(`/my/product/${idProduct}`)
  
      if (deletedProduct === 204) {
        alert('O produto selecionado foi excluido com sucesso !')

      } else {
        alert('Verifique os campos e tente novamente !')
      }
  
    } else {
      alert('Selecione um produto a ser deletado.')
    }
  }
}


export default FormControllers