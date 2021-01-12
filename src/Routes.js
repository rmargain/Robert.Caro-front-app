import React from "react";
import {Switch, Route} from "react-router-dom";
import AuthContainer from "./containers/authcontainer/Auth";
import SignupContainer from "./containers/authcontainer/SignUp";
import HomeContainer from "./containers/homecontainer/Home";
import ProductContainer from "./containers/productcontainer/Index";
import UserProfile from "./containers/userprofile/Index";
import StoreContainer from "./containers/storecontainer/Index"
import StoreProfile from "./containers/storecontainer/Profile";


//Mis vistas --> Containers
const Routes = () => (
    <Switch>
        {/* https://www.carober.com/  */}
        <Route exact path="/" component ={HomeContainer}/>
        <Route exact path="/login" component={AuthContainer} />
        <Route exact path="/signup"  component={SignupContainer}/>
        <Route exact path="/product/new"  component={ProductContainer}   />
        <Route exact path="/product/:id"  component={ProductContainer}   />
        <Route exact path="/profile"  component={UserProfile}   />
        <Route exact path="/store/new" component={StoreContainer} />
        <Route exact path='/store/profile' component={StoreProfile}/>
    </Switch>
);


export default Routes;