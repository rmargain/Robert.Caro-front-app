import React, {Component} from "react";
import store from "../../images/store.jpg"

export default class About extends Component{
    render(){
        return(
            <section>
            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div className="uk-card-media-left uk-cover-container">
                <img src= {store}/>
            </div>
            <div>
                <div className="uk-card-body uk-align-left">
                    <h3 className="uk-card-title ">Media Left</h3>
                    <p>Somos alumnos de Ironhack buscando dar una solución a los pequeños comercios
                    en tiempos difíciles como los que estamos viviendo.</p>
                </div>
            </div>
            </div>

            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
            <img src="images/light.jpg" alt="" uk-cover/>
            <canvas width="600" height="400"></canvas>
            </div>
            <div>
            <div className="uk-card-body">
            <h3 className="uk-card-title">Media Right</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            </div>
            </div>
            </section>
        )
    }
}