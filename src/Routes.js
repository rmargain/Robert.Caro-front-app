import React from "react";
import {Switch, Route} from "react-router-dom";
import AuthContainer from "./containers/authcontainer/AuthContainer";



//Mis vistas --> Containers
const Routes = () => (
    <Switch>
        {/* https://www.ironshop.com/  */}
        <Route exact path="/" component={AuthContainer} />
    </Switch>
);


export default Routes;