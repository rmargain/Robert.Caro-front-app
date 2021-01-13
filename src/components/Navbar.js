import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_principal.png";

const Navbar = ({ user, logout }) => {

        return (
          <header>
        
            <nav className="uk-navbar-container" uk-navbar="true">
                <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                <li className="uk-active">
                  <Link to="/">
                    <img src={logo} width="50" height="50" uk-img/>
                  </Link>
                </li>
                <li className="uk-active">
                  <Link to="/About">
                  SOBRE NOSOTROS
                  </Link>
                </li>
                <li>
                  {user.role === "admin" ? <Link to="/producto/new">Nuevo producto</Link> : ""}
                </li>
                </ul>
              </div>

              <div className="uk-navbar-item" className="uk-navbar-center">
              <form class="uk-search uk-search-default">
              <span uk-search-icon></span>
              <input class="uk-search-input" type="search" placeholder="Buscar producto"/>

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
                  src={user.profile_picture}
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
                      <Link to="/login">Login</Link>
                    </li>
                  )}
                </ul>
              </div>
            </nav>
          </header>
  );
};
export default Navbar;