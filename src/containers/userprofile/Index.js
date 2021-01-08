import React, { Component } from 'react';
import { deleteProduct, getProductsByUser } from '../../services/productWs';
import { deleteCart, getUserCart } from '../../services/cartWs';
import AppContext from '../../AppContext';
import {normalizeData,denormalizeData,filterItem} from "../../utils/dataUtils";

import { SimpleCard } from '../../components';
import dayjs from 'dayjs';
import UIkit from 'uikit';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(LocalizedFormat);

class UserProfile extends Component {
    static contextType = AppContext;
    componentWillMount() {
      const {
        user: { _id },
        userProducts,
      } = this.context.state;


      const {history} = this.props
        if(_id === null || _id === undefined){
            history.push("/login")
            return false
        }
      if (denormalizeData(userProducts).length < 1) {
        const { setUserProducts, setUserCart } = this.context;
        getProductsByUser(_id).then((res) => {
          const { result } = res.data;
          const products = normalizeData(result);
          setUserProducts(products);
        });
        getUserCart().then((res) => {
            console.log("res",res)
          const { result } = res.data;
          const cart = normalizeData(result);
          setUserCart(cart);
        });
      }
    }
  
    removeProduct = (id) => {
      const { products, userProducts } = this.context.state;
      const { setProducts, setUserProducts } = this.context;
      deleteProduct(id).then((res) => {
        const { result } = res.data;
        const filteredProducts = filterItem(products, result._id);
        const filteredUserProducts = filterItem(userProducts, result._id);
        setProducts(filteredProducts);
        setUserProducts(filteredUserProducts);
        UIkit.modal(`#remove-${result._id}`).hide();
      });
    };
  
    removeCart = (id) => {
      const { userCart } = this.context.state;
      const { setUserCart } = this.context;
      deleteCart(id).then((res) => {
        const { result } = res.data;
        const filteredUserCart = filterItem(userCart, result._id);
        setUserCart(filteredUserCart);
        UIkit.modal(`#remove-${result._id}`).hide();
      });
    };
  
    render() {
      const { user, userProducts, userCart } = this.context.state;

      console.log("user",userCart)
      return (
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid uk-grid-small uk-grid-match">
              <div className="uk-width-1-4">
                <div>
                  <div>
                    <img
                      className="uk-border-circle"
                      src={user.profile_picture}
                    />
                  </div>
                  <p className="uk-text-center uk-text-lead">{user.name}</p>
                  <p className="uk-text-center">
                    Miembro desde el{" "}
                    {dayjs(user.createdAt).locale("es").format("LL")}
                  </p>
                </div>
              </div>
              <div className="uk-width-expand">
                <div className="uk-padding-large uk-padding-remove-top uk-padding-remove-bottom">
                  <ul
                    className="uk-tab uk-child-width-expand"
                    uk-switcher="connect:#menu"
                  >
                    <li>
                      <a href="#">Mis productos</a>
                    </li>
                    <li>
                      <a href="#">Mis compras</a>
                    </li>
                  </ul>
  
                  <ul
                    id="menu"
                    className="uk-switcher uk-margin uk-height-large"
                    uk-overflow-auto="true"
                  >
                    <li className="">
                      {denormalizeData(userProducts).map((product, index) => (
                        <SimpleCard
                          key={index}
                          deleteItem={this.removeProduct}
                          {...product}
                        />
                      ))}
                    </li>
                    <li>
                      {userCart != null ? denormalizeData(userCart).map(
                        (cart, index) => (
                          <SimpleCard
                            key={index}
                            isCart
                            deleteItem={this.removeCart}
                            {...cart}
                          />
                        )
                      ) : null}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default UserProfile;