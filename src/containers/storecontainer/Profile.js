import React, {Component} from "react";
import {Link} from "react-router-dom";
import AppContext from "../../AppContext";
import { ProductCard } from "../../components/Index";
import { getProducts, getProductsByUser, deleteProduct } from "../../services/productWs";
import { denormalizeData, normalizeData } from "../../utils/dataUtils";
import store from "../../images/store.jpg"


class StoreProfile extends Component{
    static contextType = AppContext;

    componentDidMount(){
        const {products,user} = this.context.state;
        const {setProducts} = this.context;
        const {history} = this.props;
        
            if(denormalizeData(products).length < 1){
                getProductsByUser(`${user._id}`).then(res=>{
                    const {result} = res.data  
                    const products = normalizeData(result)
                    console.log(history)
                    setProducts(products)
                })
            }
        }

    onDeleteProduct=(id,index)=>{
    let {products} = this.context.state;
    
    deleteProduct(id).then(
        res=>{
            console.log("done")
            delete products[id]
            this.setState({products})
        }).catch(err=>{console.log("error")})

}

    render(){
        const {products, user} = this.context.state
        return(
            <div className="uk-section">
                <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="uk-card-media-left uk-cover-container">
                <img src={store} alt="" uk-cover/>
                <canvas width="600" height="400"></canvas>
                </div>
                <div>
                <div class="uk-card-body">
                <h3 class="uk-card-title">Mi tienda</h3>
                <p>Crea, edita y sube tus productos con facilidad.</p>
                <Link className="uk-text-primary" to="/product/new" >
                                    Crear producto
                </Link>
                </div>
                </div>
                </div>
                <div className="uk-container">
                <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s">
                    {denormalizeData(products).map((product, index) => (
                    <ProductCard key={index} {...product} index={index} userId={user._id} onDelete={this.onDeleteProduct} />
                    ))}
                </div>
                </div>
         

            </div>
        )
    }
}

export default StoreProfile;