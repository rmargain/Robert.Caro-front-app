import React from "react";
import Hogar from "../images/hogar.jpg";
import Mascotas from "../images/mascotas.jpg"
import Deporte from "../images/deporte.jpg"
import {Link} from 'react-router-dom'

const HomeSlider = () => (
<div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="center: true">

<ul className="uk-slider-items uk-grid">
    <li className="uk-width-3-4">
        <div className="uk-panel">
            <Link to='/allproducts'>
            <img src={Mascotas} alt=""/>
            <div className="uk-position-center uk-panel"><h1>Mascotas</h1></div>
            </Link>
        </div>
    </li>
    <li className="uk-width-3-4">
        <div className="uk-panel">
            <Link to='/allproducts'>
            <img src={Hogar} alt=""/>
            <div className="uk-position-center uk-panel"><h1>Hogar</h1></div>
            </Link>
        </div>
    </li>
    <li className="uk-width-3-4">
        <div className="uk-panel">
            <Link to='/allproducts'>
            <img src={ Deporte} alt=""/>
            <div className="uk-position-center uk-panel"><h1>Deporte</h1></div>
            </Link>
        </div>
    </li>
</ul>

<a 
className="uk-position-center-left uk-position-small uk-hidden-hover" 
href="#" 
uk-slidenav-previous ="true"
uk-slider-item="previous"
></a>

<a className="uk-position-center-right uk-position-small uk-hidden-hover" 
href="#" 
uk-slidenav-next = "true"
uk-slider-item="next"></a>

</div>

);

export default HomeSlider;