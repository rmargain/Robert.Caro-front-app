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
    cart:[],
    sum: 0, 
    total: 0,
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
    let {products} = this.state;
    products = { [product._id] : product, ...product};
  }

  handlerClearCart() {
    this.setState({
      cart: [],
      sum: 0,
      total: 0
    });
  }

  sumProducts(array) {
    var total = 0
    array.forEach(product => total += product.order)
    this.setState({total: total})
  }

  sumTotal(array) {
    var sum = 0
    array.forEach(product => sum += product.total)
    this.setState({sum: sum})
  }

  handlerAddProduct(indexCart, indexProduct){
    var statusCopy = Object.assign({}, this.state);
    if (statusCopy.products[indexProduct].status !== 0) {
      statusCopy.cart[indexCart].total += statusCopy.cart[indexCart].price
      statusCopy.cart[indexCart].order += 1
      statusCopy.products[indexProduct].status -= 1
      this.setState(statusCopy)
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
    } else {
      alert('Producto inexistente')
    }
  }

  handlerRemoveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)
    let cart = this.state.cart.find(p => p.id === productId)
    let indexCart = this.state.cart.findIndex(x => x.id === cart.id)

    var statusCopy = Object.assign({}, this.state);
    if(statusCopy.cart[indexCart].total === statusCopy.cart[indexCart].price ){
      indexCart !== -1 && statusCopy.cart.splice( indexCart, 1 );
      this.setState(statusCopy)
      alert('El producto fue eliminado del carrito de compras')
    } else {
      statusCopy.cart[indexCart].total -= statusCopy.cart[indexCart].price
      statusCopy.products[indexProduct].status += 1
      statusCopy.cart[indexCart].order -= 1
      statusCopy.total -= 1
      statusCopy.sum -= statusCopy.cart[indexCart].price
      this.setState(statusCopy)
    }
  }

  handleSaveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)

    var productCart = {
      _id: product._id,
      name: product.name,
      img: product.picture,
      price: product.price,
      order: 1,
      total: product.price
    }

    var exist = this.state.cart.find(p => p.id === productId)
    if (undefined !== exist && exist !== null) {
      let indexCart = this.state.cart.findIndex(x => x.id === exist.id)
      this.handlerAddProduct(indexCart, indexProduct)
    }else{
      var statusCopy = Object.assign({}, this.state);
      statusCopy.products[indexProduct].status -= 1
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
      this.setState({
        cart: this.state.cart.concat([productCart]),
        statusCopy
      })
    }
  }

  handlerOpenOrder(event) {
    event.preventDefault()
    this.setState({ openOrder: true })
  }

  // renderOpenOrder() {
  //   if (this.state.openOrder) {
  //     return (
  //       <Order
  //         sum={this.state.sum}
  //         onClearCart={this.handlerClearCart}
  //       />
  //     )
  //   }
  // }

 
  render(){

    const{
      state,
      logout,
      setUser,
      setProducts,
      setUserProducts,
      setUserCart,
      addProduct,
      handlerClearCart,
      sumProducts,
      sumTotal,
      handlerAddProduct,
      handlerRemoveProduct,
      handleSaveProduct
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
      addProduct,
      handlerClearCart,
      sumProducts,
      sumTotal,
      handlerAddProduct,
      handlerRemoveProduct,
      handleSaveProduct
      }}
      >
      <div className="App">
       <Navbar user ={this.state.user} logout={logout}/>
      <Routes/>
      </div>
      </AppContext.Provider>
    );
  }
}

const AppWithRouter = withRouter (App)

export default AppWithRouter;