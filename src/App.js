import React, {Component} from 'react';
import './App.css';
import AppContext from './AppContext';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { logout } from './services/userWs';
import { withRouter } from 'react-router-dom';



class App extends Component {

  //state completo
  state ={
    user:JSON.parse(localStorage.getItem("user")) || {},
    products :{},
    userproducts:{},
    usercart:{}
  }
  //Borrado de cookie para iniciar sesión
  logout = () =>{
    const { history } = this.props;
    logout().then(() =>{
      localStorage.removeItem("user"); //Almacenamiento local

      this.setState({ user: {}});
      history.push("/login"); //redirect
    });
  };

  //SETUSER para evitar refresh
  setUser = (user) =>{
    this.setState({user})
  }

  setProducts = (products) =>{
    this.setState ({ products })
  }

  setUserProducts =( userProducts ) =>{
    this.setState ({ userProducts})
  }

  setUserCart = ( userCart) =>{
    this.setState ({ userCart })
  }

  addProduct = ( product ) =>{
    let { products} = this.state;
    products = { [product._id] : product, ...product};
  }
  render(){

    const{
      state,
      logout,
      setUser,
      setProducts,
      setUserProducts,
      setUserCart,
      addProduct
    }= this

    return(
      <AppContext.Provider
      value={{
      state,
      logout,
      setUser,
      setProducts,
      setUserProducts,
      setUserCart,
      addProduct
      }}
      >
      <div className="App">
       <Navbar user ={this.state.user}/>
      <Routes/>
      </div>
      </AppContext.Provider>
    );
  }
}

const AppWithRouter = withRouter (App)

export default AppWithRouter;