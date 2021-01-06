<<<<<<< HEAD
import React from "react";
import Navbar from "../../components/Navbar";
=======
import React, {Component} from "react";
import Navbar2 from "../../components/Navbar2";
>>>>>>> bb099e72be8bb0e949dee3236beea6ec73fcce4b

export default class Home extends Component{
    render(){
        return(
            <section>
            <Navbar/>
                <div>
                    <Navbar2/>
                </div>
            </section>
        )
    }
}