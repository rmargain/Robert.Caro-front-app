import React, {Component} from "react";
import { signup } from "../../services/userWs";
import {Link} from "react-router-dom"


export default class SignupContainer extends Component {
    state = {
      data:{}
    }

    // Registro de tecleo y guardado
    handleChange = (event)=>{
        const { value, name} = event.target;
        let { data } = this.state

        data[name] = value

        this.setState({ data })
    }
    //enviar datos y validación de los mismos
    onSubmit = (event) => {
        event.preventDefault()
        console.log("Voy a enviar datos")
        //voy a destructurar los pros
        const { history } = this.props;

        signup(this.state.data).then((response)=>{
            //aqui andetro si todo sale bien 
            //monstramos un mensaje y mandamos a la siguiente seccion
            this.setState({ data:{}})
            console.log("Registro exitoso",response)
            history.push("/login")
        }).catch((error)=>{
            console.log("hay un error",error.response)
        })

        
    }

    render(){
        const {handleChange, onSubmit} = this;
        const {data} = this.state;
        return(
            <section className="uk-section">
                <div className="uk-container uk-flex uk-flex-center">
                    <div className="uk-width-1-4">
                        <h3>Registrate </h3>
                        <form
                        // metodo={(event)=>onSumit(event)}
                            onSubmit={onSubmit}
                        className="uk-card uk-card-default uk-card-body"
                        >
                    
                            <div className="uk-margin"> 
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                                    <input 
                                        className="uk-input"
                                        type="text"
                                        name="name"
                                        placeholder ="Nombre"
                                        onChange={handleChange} 
                                        required
                                        value={data["name"] ? data["name"] : ""}    
                                    />
                                </div>
                            </div>

                            <div className="uk-margin"> 
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                                    <input 
                                        className="uk-input"
                                        type="text"
                                        name="lastname"
                                        placeholder ="Apellido"
                                        onChange={handleChange} 
                                        required
                                        value={data["lastname"] ? data["lastname"] : ""}    
                                    />
                                </div>
                            </div>

                            <div className="uk-margin"> 
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: receiver"></span>
                                    <input 
                                        className="uk-input"
                                        type="number"
                                        name= "phone"
                                        placeholder ="Celular"
                                        onChange={handleChange} 
                                        required
                                        value={data["phone"] ? data["phone"] : ""}    
                                    />
                                </div>
                            </div>

                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: mail"></span>
                                    <input 
                                        className="uk-input"
                                        type="email"
                                        name="email"
                                        placeholder="e-mail"
                                        onChange={handleChange} 
                                        required
                                        value={data["email"] ? data["email"] : ""}    
                                    />
                                </div>
                            </div>

                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: unlock"></span>
                                    <input 
                                        className="uk-input" 
                                        type="password"
                                        required
                                        name="password"
                                        placeholder="Contraseña"
                                        onChange={handleChange}
                                        value={data["password"] ? data["password"] : ""}
                                    />
                                </div>
                            </div>

                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: lock"></span>
                                    <input 
                                        className="uk-input"
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirmar contraseña"
                                        onChange={handleChange} 
                                        required
                                        value={data["confirmPassword"] ? data["confirmPassword"] : ""}    
                                    />
                                </div>
                            </div>

                            <div className="uk-text-meta">
                                ¿Ya tienes cuenta?{" "}
                                <Link className="uk-text-primary" to="/login" >
                                    Ingresa
                                </Link>
                            </div>
                            

                            <button className="uk-button uk-button-primary">
                                Registrate
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}