import React, {Component} from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_principal.png";
import profile from "../images/login.png";
import { searchProducts } from "../services/searchWs";


export default class Navbar extends Component {
  state = {
    exp: "",
    prodcuts: {}
  }

  // handleSearch = (e) => {
  //        let exp = {e.target.value};
  //        console.log(e.target.value);
  //        searchProducts
  //        this.setState({exp: exp, products: products})
  //        history.push(`/search?${this.state.exp}`)
  //   }
  
  render() {
    const {user, logout} = this.props

        return (
          <header>
        
            <nav className="uk-navbar-container" uk-navbar="true">
                <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                <li className="uk-active">
                  <Link to="/">
                    <img src={logo} width="50" height="50" className="uk-img"/>
                  </Link>
                </li>
                <li className="uk-active">
                  <Link to="/About">
                  Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/allproducts">Productos</Link> 
                </li>
                <li>
                  <Link to="/allstores">Tiendas</Link> 
                </li>
                </ul>
              </div>

              <div className="uk-navbar-item" className="uk-navbar-center">
              <form className="uk-search uk-search-default">
              <span className="uk-flex" uk-icon="icon: search">
              <input className="uk-search-input" type="search" placeholder="Buscar producto"/>
              </span>
              </form>
              </div>

          
              <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                {user._id ? (
                <li>
                <Link to="/profile">
                <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                <div className="uk-width-auto">
                <img
                  className="uk-border-circle"
                  width="40"
                  height="40"
                  alt={user.name}
                  src={profile}
                  />
                </div>
                <div className="uk-width-expand">
                  <div className="uk-margin-remove-bottom">{user.name}</div>
                </div>
                </div>
                </Link>
                <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                <li onClick={logout}>Logout</li>
                </ul>
                </div>
                  </li>
                  ) : (
                    <li>
                    <Link to="/login">
                    <span uk-icon="icon: sign-in"></span>
                    Login</Link>
                    </li>
                  )}
                </ul>
              </div>
            </nav>
          </header>
  );

  }
}


// const Navbar = ({ user, logout }) => {

//         return (
//           <header>
        
//             <nav className="uk-navbar-container" uk-navbar="true">
//                 <div className="uk-navbar-left">
//                 <ul className="uk-navbar-nav">
//                 <li className="uk-active">
//                   <Link to="/">
//                     <img src={logo} width="50" height="50" uk-img/>
//                   </Link>
//                 </li>
//                 <li className="uk-active">
//                   <Link to="/About">
//                   Sobre nosotros
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/allproducts">Productos</Link> 
//                 </li>
//                 <li>
//                   <Link to="/allstores">Tiendas</Link> 
//                 </li>
//                 </ul>
//               </div>

//               <div className="uk-navbar-item" className="uk-navbar-center">
//               <form class="uk-search uk-search-default">
//               <span uk-search-icon></span>
//               <input class="uk-search-input" type="search" placeholder="Buscar producto"/>

//               </form>
//               </div>

          
//               <div className="uk-navbar-right">
//                 <ul className="uk-navbar-nav">
//                 {user._id ? (
//                 <li>
//                 <Link to="/profile">
//                 <div className="uk-grid-small uk-flex-middle" uk-grid="true">
//                 <div className="uk-width-auto">
//                 <img
//                   className="uk-border-circle"
//                   width="40"
//                   height="40"
//                   alt={user.name}
//                   src={profile}
//                   />
//                 </div>
//                 <div className="uk-width-expand">
//                   <div className="uk-margin-remove-bottom">{user.name}</div>
//                 </div>
//                 </div>
//                 </Link>
//                 <div className="uk-navbar-dropdown">
//                 <ul className="uk-nav uk-navbar-dropdown-nav">
//                 <li onClick={logout}>Logout</li>
//                 </ul>
//                 </div>
//                   </li>
//                   ) : (
//                     <li>
//                     <Link to="/login">
//                     <span uk-icon="icon: sign-in"></span>
//                     Login</Link>
//                     </li>
//                   )}
//                 </ul>
//               </div>
//             </nav>
//           </header>
//   );
// };
// export default Navbar;