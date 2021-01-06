import React, { Component } from 'react'
import { Link } from "react-router-dom";



export default class Navbar2 extends Component {
    render() {
        return (
            <div>
                <nav className="navbar-container" uk-navbar="true">
                <div>
                <div className="top-nav-container">top</div>
                    <div className="middle-nav-container">
                        {/* logo container */}
                        <div className="uk-navbar-item uk-logo" >
                            <img className="logo" src="../carobe.png" alt="Carobe logo"/>
                        </div>
                        {/* search container */}
                        <div>
                            <div className="uk-navbar-item">
                                <form >
                                    <div className="uk-inline">
                                        <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: search"></span>
                                        <input className="uk-input uk-form-width-large" type="text" placeholder="Input"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* links and Cart container */}
                        <div>
                            <div className="uk-navbar-item">
                                <div>Something</div>
                            </div>
                            <div className="uk-navbar-item">
                                <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: cart"></span>
                            </div>
                        </div>
                    </div>
                <div>Bottom</div>

                </div>
                
                </nav>
            </div>
        )
    }
}
