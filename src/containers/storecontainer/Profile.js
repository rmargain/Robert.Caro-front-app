import React, {Component} from "react";
import {Link} from "react-router-dom";
import AppContext from "../../AppContext";
import { ProductCard } from "../../components";
import { getProducts, getProductsByUser } from "../../services/productWs";
import { denormalizeData, normalizeData } from "../../utils/dataUtils";


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
                    console.log(user)
                    setProducts(products)
                })
            }
        }

    render(){
        const {products, user} = this.context.state
        return(
            <div className="uk-section">
                <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" 
                style={{
                    backgroundImage:"url('https://www.construyehogar.com/wp-content/uploads/2016/10/Hermosa-casa-de-%C3%A1rbol.jpg')"
                }}
                >
                    <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                        <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">IronrbnB</h1>
                        <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">App demo para frontent modulo 2</p>
                    </div>
                </div>
                <div className="uk-container">
                <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s">
                    {denormalizeData(products).map((product, index) => (
                    <ProductCard key={index} {...product} userId={user._id} />
                    ))}
                </div>
                </div>
         

            </div>
        )
    }
}

export default StoreProfile;