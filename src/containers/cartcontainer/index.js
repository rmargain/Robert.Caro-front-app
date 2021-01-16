import React, {Component} from "react";
import AppContext from '../../AppContext';
import { ProductCard } from "../../components/Index"
import { createProduct, getProductsDetail, updateProduct } from "../../services/productWs";
import { buildNotification } from "../../utils/notification";
import Form from './Form'



export default class ProductContainer extends Component {
    //Iniciar context
    static contextType = AppContext;

    state = {
        products:{},
        total:{}
    }
    //Ciclo de vidda
    componentDidMount(){
        //validación de usuario 
        const {state} = this.context
        const {history} = this.props
            
    
        if (!Object.keys(state.user).length) {
            history.push("/login")
            return false
        }     
    }
    //Guadar datos
    handleClick = (e) => {
         let {products} = this.state;
         product = {...product, [e.target.name]:e.target.value};
         this.setState({product})
    }
    

    render(){
        const {product} = this.state
        return(
            <section className="uk-section">
                <div className="uk-container">
                    <h3>Crear producto</h3>
                    <div className="uk-grid uk-child-width-1-2">
                        <Form 
                            product = {product}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            handleImagesChange={this.handleImageChange}
                        />
                        <div>
                            <ProductCard {...product} isDemo={true} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}