import React, { Component } from 'react';
import { deleteProduct, getProductsByUser } from '../../services/productWs';
import { deleteCart, getUserCart } from '../../services/cartWs';
import AppContext from '../../AppContext';
import profile from '../../images/login.png';
import {normalizeData,denormalizeData,filterItem} from "../../utils/dataUtils";
import dayjs from 'dayjs';
import UIkit from 'uikit';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import {Link} from "react-router-dom";

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
      /*if (denormalizeData(userProducts).length < 1) {
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
      }*/
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
      const { user, store, userProducts, userCart } = this.context.state;

      console.log("user",userCart)
      return (
                      //
                    //
            <div className="uk-card uk-card-default uk-width-1-4@m uk-align-center">
            <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle" uk-grid>
                <div className="uk-width-auto">
                    <img  
                    src={profile}
                    className="uk-border-circle" 
                    width="40" 
                    height="40" 
                    />
                </div>
                <div className="uk-width-expand">
                    <h3 className="uk-card-title uk-margin-remove-bottom"> Mi perfil </h3>
                    <p className="uk-text-meta uk-margin-remove-top">{user.name} {user.lastname} </p>
                </div>
                </div>
            </div>
            <div className="uk-card-body">
                <p>Miembro desde el{" "}
                  {dayjs(user.createdAt).locale("es").format("LL")}
                <br/>{user.phone}
                <br/>{user.email}
                </p>
            </div>
            <div className="uk-card-footer">
                <Link className="uk-button uk-button-text" to="/store/new" >
                Crear tienda
                </Link>
                { store._id !== undefined ? (
                        <Link className="uk-button uk-button-text" to="/storeprofile">Mi tienda</Link>
                        ) 
                        }
            </div>
            </div>
                
      );
    }
  }
  
  export default UserProfile;