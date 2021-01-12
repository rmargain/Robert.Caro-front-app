/*import React, { Component } from "react";
import InputField from "./InputField";
import { createCart } from "../services/cartWs";
import { buildNotification } from "../utils/notification";
import AppContext from "../AppContext";
import UIkit from "uikit";

class CartModal extends Component {
  static contextType = AppContext;
  state = {
    products: {},
  };

  handleChange = (e) => {
    let {products} = this.state; // Valores
   products = { ...products, [e.target.name]: e.target.value };
    this.setState({products});
  };

  handleSubmit = () => {
    const {cart} = this.state;
    const { products } = this.props;
    createCart({ ...products, products }) // Crear orden Roberto
      .then(() => {
        buildNotification("Orden confirmada!", "Éxito");
        UIkit.modal(`#reservate-${product}`).hide(); // Alerta ? Dylan
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
      <div id={`reservate-${isEditing ? this.props.cart : product}`} uk-modal="true">
        <Link
              to={`/checkout`}
              className="uk-button uk-button-default"
            >
         Continuar
        </Link>
      </div>
    );
  }
}

export default CartModal;*/