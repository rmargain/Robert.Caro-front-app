import React, {Component} from "react";
import store from "../../images/store.jpg"

export default class About extends Component{
    render(){
        return(
            <section>
            <div class="uk-child-width-1-2@m" uk-grid>
            <div>
            <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="images/light.jpg" alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            </div>
            </div>
            <div>
            <div class="uk-card uk-card-default uk-align-right">
            <div class="uk-card-body">
                <h3 class="uk-card-title">Media Bottom</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div class="uk-card-media-bottom">
                <img src="images/light.jpg" alt=""/>
            </div>
            </div>
            </div>
            </div>
            </section>
        )
    }
}