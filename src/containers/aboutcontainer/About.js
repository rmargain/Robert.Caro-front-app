import React, {Component} from "react";
import roberto from "../../images/robert.jpg";
import caro from "../../images/caro.jpg"
import iron from "../../images/iron.png"
export default class About extends Component{
    render(){
        return(
            <div className="uk-card uk-card-default uk-width-2-3@m uk-align-center">
            <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle" uk-grid>
                <div className="uk-width-auto uk align-left">
                    <img  
                    src={roberto}
                    className="uk-border-circle" 
                    width="200" 
                    height="200" 
                    />
                    <span uk-icon="code"></span>
                    <img  
                    src={caro}
                    className="uk-border-circle" 
                    width="200" 
                    height="200" 
                    />
                </div>
                <div className="uk-width-expand">
                    <h3 className="uk-card-title uk-margin-remove-bottom"> Estudiantes Ironhack </h3>
                    <img 
                    src={iron}
                    width="50" 
                    height="50"
                    />
                </div>
                </div>
            </div>
            <div className="uk-card-body">
                <p>Creamos este proyecto con la finalidad de poder<br/> dar solución a pequeñas empresas
                a vender sus productos durante esta época de pandemia.
                
                </p>
            </div>
            <div className="uk-card-footer">
                
            </div>
            </div>
        )
    }
}