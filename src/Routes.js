import React from "react";
import {Switch, Route} from "react-router-dom";
<<<<<<< HEAD
import AuthContainer from "./containers/authcontainer/Auth";
import SignupContainer from "./containers/authcontainer/SignUp";
import HomeContainer from "./containers/homecontainer/Home"
=======
import AuthContainer from "./containers/authcontainer/Auth"
import SignupContainer from "./containers/authcontainer/SignUp"
import Home from "./containers/homecontainer/Home";
>>>>>>> bb099e72be8bb0e949dee3236beea6ec73fcce4b



//Mis vistas --> Containers
const Routes = () => (
    <Switch>
        {/* https://www.ironshop.com/  */}
<<<<<<< HEAD
        <Route exact path="/" component ={HomeContainer}/>
=======
        <Route exact path="/" component={Home} />
>>>>>>> bb099e72be8bb0e949dee3236beea6ec73fcce4b
        <Route exact path="/login" component={AuthContainer} />
        <Route exact path="/signup"  component={SignupContainer}/>
    </Switch>
);


export default Routes;