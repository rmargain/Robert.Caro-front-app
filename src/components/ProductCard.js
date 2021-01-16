import React, { Component } from 'react'
import Slider from "./Slider";
import { Link } from "react-router-dom";
import AppContext from "../Contexts/AppContext"
import { buildNotification } from "../utils/notification";

class ProductCard extends Component {
    static contextType = AppContext;  

      handleAdd = (e)=>{
        e.preventDefault();
        const {_id, images, title, description, price, _owner, userId} = this.props
        const isOwner = userId === _owner?._id;
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
// function ProductCard  ({
//    _id,
//    images = [],
//    title,
//    description,
//    price,
//    _owner,
//   userId,
// })  {
  
  
  render(){
  const {_id, images, title, description, price, _owner, userId, index, _store, onDelete=()=>{}} = this.props
  const isOwner = userId === _owner?._id
  console.log(this.props)
  return (
    <div className="uk-margin-small-bottom">
       <div className="uk-card uk-card-default">
          <div className="uk-card-header uk-padding-small">
            <div className="uk-grid-small uk-flex-middle" uk-grid="true">
              <div className="uk-width-auto">
                <img
                  className="uk-border-circle"
                  width="40"
                  height="40"
                  alt={_owner?.name}
                  src={_store?.store_picture}
                />
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-top"></p>
                <p className="uk-title">
                </p>
              </div>
                <div>
                  {isOwner ? (
                  <>
                  <Link
                    uk-icon="pencil"
                    to={`/product/${_id}`}
                  >
                    Editar
                  </Link>
                  
                  <Link
                    uk-icon="trash"
                    onClick={()=>onDelete(_id, index)}
                  >
                    Eliminar
                  </Link>
                  </>
                  ): null}
                </div>
            </div>
          </div>
        <div className="uk-card-media-top">
          <Slider images={images} />
        </div>
        <div className="uk-card-body uk-padding-small">
          <h3 className="uk-card-title uk-text-center">
            <span
              className="uk-text-lead">
              {title}
            </span>
          </h3>
          <div>Precio: {price}</div>
          <p className="uk-text-break">{description}</p>
          <p className="uk-text-break">Vendedor:{_owner?.name}</p>
          <div className="uk-text-center">
            {!isOwner ? (
              <Link
                to={`/cart`}
                className="uk-button uk-button-primary"
              >
              <span>
                {
                    <span 
                    onClick={this.handleAdd}
                    className="btn btn-outline-primary btn-sm"></span>
                }
              </span> 
                Agregar
              </Link>
              
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
}
export default ProductCard;