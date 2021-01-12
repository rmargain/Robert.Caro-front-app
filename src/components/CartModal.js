import React, { Component } from "react";
import InputField from "./InputField";
import { createCart } from "../services/cartWs";
import { buildNotification } from "../utils/notification";
import AppContext from "../AppContext";
import UIkit from "uikit";

class CartModal extends Component {
  static contextType = AppContext;
  state = {
    cart: {},
  };

  handleChange = (e) => {
    let { cart } = this.state; // Valores
    cart = { ...cart, [e.target.name]: e.target.value };
    this.setState({ cart });
  };

  handleSubmit = () => {
    const { cart } = this.state;
    const { product } = this.props;
    createCart({ ...cart, product })
      .then(() => {
        buildNotification("Cart confirmed!", "success");
        UIkit.modal(`#reservate-${product}`).hide();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { title, product, isEditing } = this.props;
    const { cart } = this.state;
    const {handleChange,handleSubmit} = this
    return (
      <div
        id={`reservate-${isEditing ? this.props.cart : product}`}
        uk-modal="true"
      >
        <div className="uk-modal-dialog uk-modal-body">
          <h2 className="uk-modal-title"> Comprar {title}</h2>
          <form>
            <InputField
              name="guest_number"
              type="number"
              min="1"
              value={cart._user}
              handleChange={handleChange}
              placeholder="Guest number"
            />
            <InputField
              name="checkin"
              handleChange={handleChange}
              type="date"
              value={cart.checkin}
              placeholder="Checkin Date"
            />
            <InputField
              name="checkout"
              type="date"
              value={cart.checkout}
              handleChange={handleChange}
              placeholder="Checkout Date"
            />
          </form>
          <p className="uk-text-right">
            <button
              className="uk-button uk-button-default uk-modal-close"
              type="button"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              className="uk-button uk-button-primary"
              type="button"
            >
              Guardar
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default CartModal;