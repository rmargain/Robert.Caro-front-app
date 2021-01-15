import React, { Component } from 'react'
import AppContext from "../AppContext"
import { buildNotification } from "../utils/notification";



class CartModal extends Component {
    static contextType = AppContext;

      handleAdd = (e)=>{
        e.preventDefault();
        const {_id} = this.props
        const {
          cart
          } = this.context.state
        const isInCart = _id => {
         return !!cart.find(item => item._id === _id);
         }   
         const {handleSaveProduct} = this.context
        if(isInCart){
          handleSaveProduct(_id)
          .then(()=>{
            buildNotification("El producto se agregó al carrito", "success")
          })
          .catch((err)=>{
            buildNotification("Sucedió un error, el producto no se pudo agregar al carrito", "error")
            console.log(err.response)
          })
        } else buildNotification("El producto ya està en el carrito", "error")
      }
  
  
  render(){
    console.log("Hola")
  return (
    <div >
       
      <span onClick={this.handleAdd}></span> 
              
    </div>
  );
};
}
export default CartModal;