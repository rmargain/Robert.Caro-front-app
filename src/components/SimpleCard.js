import React from "react";
import Slider from "./Slider";
import Confirmation from "./Confirmation";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import CartModal from "./CartModal";

const SimpleCard = ({
  _id,
  images,
  title,
  price,
  inventory,
  deleteItem,
  isCart,
  user,
  _product,
}) => (
  <div className="uk-margin-medium-bottom uk-card uk-card-default">
    <CartModal isEditing cart={_id} />
    <Confirmation
      handleClick={deleteItem}
      id={_id}
      message={
        isCart
          ? `Delete product in ${_product.title}`
          : `Delete ${title}?`
      }
    />
    <div className="uk-grid">
      <div className="uk-width-1-3">
        <Slider images={isCart ? _product.images : images} />
      </div>
      <div className="uk-width-expand uk-padding uk-padding-remove-top uk-padding-remove-bottom uk-flex uk-flex-column uk-flex-around">
        <div className="simple-card-title uk-text-lead uk-margin-small-top uk-margin-small-bottom">
          {isCart ? _product.title : title}
        </div>
        {isCart? (
          <div>
            <div>Usuario: {user}</div>
          </div>
        ) : (
          <div>
            <div>Precio: {price}</div>
            <div>Cantidad: {inventory}</div>
          </div>
        )}
        <div className="uk-flex uk-flex-around">
          {isCart ? (
            <Link
              className="uk-button uk-button-default"
              to={`/cart/${_id}/edit`}
            >
              <span uk-icon="icon:pencil"></span> Editar
            </Link>
          ) : (
            <Link
              to={`/product/${_id}`}
              className="uk-button uk-button-default"
            >
              <span uk-icon="icon:pencil"></span> Editar
            </Link>
          )}
          <button
            className="uk-button uk-button-danger"
            uk-toggle={`target: #remove-${_id}`}
          >
            <span uk-icon="icon:trash"></span> Borrar
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default SimpleCard;