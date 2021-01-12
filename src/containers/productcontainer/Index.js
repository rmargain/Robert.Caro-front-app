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
        product:{},
        stores:{}
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
        const {id} = this.props.match.params;
        //petición backend
        if(id){
            getProductsDetail(id).then(res =>{
                const {result} = res.data
                this.setState({product: result})
            })
        }     
    }
    //Guadar datos
    handleChange = (e) => {
         let {product} = this.state;
         product = {...product, [e.target.name]:e.target.value};
         this.setState({product})
    }
    handleImageChange=(e)=>{
        let {product} = this.state;
        product = {...product, [e.target.name]:e.target.value.split(",") };
        this.setState({product})
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        const {product} = this.state;
        const {addProduct} = this.context;
        const {history} = this.props
        const {id } = this.props.match.params;
        const action = id ? updateProduct : createProduct //ws
        const params = id ? {product, id} : { product } 

        action(params)
        .then((res)=>{
            const {result} = res.data
            addProduct(result);
            history.push("/")
        })
        .catch(error=>{
            //almacenamiento de errores y mensajes
            //const errors = Object.values(error.response.data.error)
            //errors.map((error) => buildNotification(error,"danger","close"))
            console.log ("error",error.response)
        })
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