import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
const ProductCard = ({
  _id,
  images = [],
  title,
  description,
  price,
  _owner,
  userId,
}) => {

  const isOwner = userId === _owner?._id;
  console.log(_owner)
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
                  src={_owner?.profile_picture}
                />
              </div>
              <div className="uk-width-expand">
                <h3 className="uk-card-title uk-margin-remove-bottom">
                  {_owner?.name}
                </h3>
                <p className="uk-text-meta uk-margin-remove-top">Vendedor</p>
              </div>
                <div>
                  <Link
                    to={`/product/${_id}`}
                    className="uk-button uk-button-text"
                  >
                    Editar
                  </Link>
                  <button
            className="uk-button uk-button-danger"
            uk-toggle={`target: #remove-${_id}`}
          >
            <span uk-icon="icon:trash"></span> Borrar
          </button>
                </div>

            </div>
          </div>
        <div className="uk-card-media-top">
          <Slider images={images} />
        </div>
        <div className="uk-card-body uk-padding-small">
          <h3 className="uk-card-title uk-text-center">
            <Link
              to={`/product/${_id}`}
              className="uk-button uk-button-text uk-text-lead"
            >
              {title}
            </Link>
          </h3>
          <div>Precio: {price}</div>
          <p className="uk-text-break">{description}</p>
          <div className="uk-text-center">
            {!isOwner ? (
              <Link
                to={`/cart`}
                className="uk-button uk-button-primary"
              >
                Agregar
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;