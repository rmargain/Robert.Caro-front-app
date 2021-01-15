import React, {Component} from "react";
import AppContext from '../../Contexts/AppContext';
import {StoreCard} from "../../components/Index";
import { getStoreById, createStore, updateStore } from "../../services/storeWs";
import { buildNotification } from "../../utils/notification";
import Form from './Form'



export default class StoreContainer extends Component {
    //Iniciar context
    static contextType = AppContext;

    state = {
        store:{},
        user:{}
    }
    //Ciclo de vida
    componentWillMount(){
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
            getStoreById(id).then(res =>{
                const {result} = res.data
                this.setState({store: result})
            })
        }
    }
    //Guadar datos
    handleChange = (e) => {
         let {store} = this.state;
         store = {...store, [e.target.name]:e.target.value};
         this.setState({store})
    }


    handleSubmit = (e)=>{
        e.preventDefault();
        const {store} = this.state;
        const {history} = this.props;
        //const {addStore} = this.context;
        const {id } = this.props.match.params;
        const action = id ? updateStore : createStore //ws
        const params = id ? {store, id} : { store } 

        action(params)
        .then((res)=>{
            const {result} = res.data
            //addStore(result);
            history.push("/")
        })
        .catch(error=>{
            //almacenamiento de errores y mensajes
            console.log(error)
            console.log(params)
            // const errors = Object.values(error.response.data.error)
            // errors.map((error) => buildNotification(error,"danger","close"))
        })
    }
    render(){
        const {store} = this.state
        return(
            <section className="uk-section">
                <div className="uk-container">
                    <h3>Crear Tienda</h3>
                    <div className="uk-grid uk-child-width-1-2">
                        <Form 
                            store = {store}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            handleImagesChange={this.handleImageChange}
                        />
                    <div >
                        <StoreCard {...store} isDemo={true}/>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}