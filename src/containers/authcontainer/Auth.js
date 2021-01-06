import React, {Component} from "react";
import { login } from "../../services/userWs";
import { Link } from 'react-router-dom';
import AppContext from '../../Appcontext';
import Navbar from "../../components/Navbar";

export default class AuthContainer extends Component {
    static contextType = AppContext;
    state = {
      data:{}
    }

    // guardar movimientos
    handleChange = (event)=>{
                // {key:value}
        const { value, name} = event.target;
        let { data } = this.state

        data[name] = value

        this.setState({ data })
    }
    //envio y validación de datos
    onSubmit = (event) => {
        event.preventDefault()
        console.log("Voy a enviar datos")
        login(this.state.data).then((response)=>{
            //alertas y autorización para siguiente sección
            this.setState({ data:{}})
            //guardar datos en local
            localStorage.setItem( "user",JSON.stringify( response.data.user ) )
            //setear usuario a app
            this.context.setUser(response.data.user)
            this.props.history.push("/")
        }).catch((error)=>{
            console.log("hay un error",error)
        })   
    }

    render(){
        const {handleChange, onSubmit} = this;
        const {data} = this.state;

        return(
            <section className="uk-section">
            <Navbar/>
            <div className="uk-container uk-flex uk-flex-center">
                <div className="uk-width-1-4">
                    <h3>Inicia sesión</h3>
                    <form
                    onSubmit={onSubmit}
                    className="uk-width-1-1 uk-form-stacked uk-flex uk-flex-center uk-flex-column"
                    >
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span className="uk-form-icon" uk-icon="icon: user"></span>
                            <input 
                                className="uk-input"
                                type="email"
                                name="email"
                                onChange={handleChange} 
                                required
                                value={data["email"] ? data["email"] : ""}    
                            />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                            <input 
                                className="uk-input" 
                                type="password"
                                required
                                name="password"
                                onChange={handleChange}
                                value={data["password"] ? data["password"] : ""}
                            />
                        </div>
                    </div>
                    <div className="uk-text-meta">
                        ¿Aún no tienes cuenta?{" "}
                        <Link className="uk-text-primary" to="/signup" >
                            Registrate
                        </Link>
                    </div>
                    <div className="uk-margin-small">
                    <button className="uk-button uk-button-danger">
                        Entrar
                    </button>
                    </div>
                    </form>
                </div>
            </div>
            </section>
        );
    }
}