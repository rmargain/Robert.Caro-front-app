import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Routes from './Routes';



class App extends Component {
  state={
    user:JSON.parse(localStorage.getItem("user")) || {},
  }
  
  render(){
    return(
      <div className="App">
       <Navbar user ={this.state.user}/>
      <Routes/>
      </div>
  
    );
  }
}
export default App;