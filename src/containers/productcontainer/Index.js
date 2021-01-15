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
                console.log(id)
                const {result} = res.data
                this.setState({product: result})
            })
        }
        console.log(this.state.product)     
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
            buildNotification("No tienes permisos para editar este producto", "error")
            console.log ("error",error.response)
        })
    }

    render(){
        const {product, user} = this.state
        console.log(product)
        return(
            <section className="uk-section">
                <div className="uk-container">
                    
                    { product != undefined ? (
                        <h3>Editar producto</h3>
                        ) : (
                         <h3>Crear producto</h3>   
                        )
                        }
                    <div className="uk-grid uk-child-width-1-2">
                        <Form 
                            product = {product}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            handleImagesChange={this.handleImageChange}
                        />
                        <div>
                            <ProductCard {...product} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}