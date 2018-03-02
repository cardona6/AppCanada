import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Inicio from '../Inicio/Inicio';
import Galeria from '../Galeria/Galeria';
import Blog from '../Blog/Blog';
import Contacto from '../Contacto/Contacto';
import Login from '../Login/Login';
import Routas from '../Routas/Routas';
import './App.css';


class App extends Component {
  render() {
    return (
        <Router>
        <div>
          <Routas />
          <Route exact path="/" component={Inicio} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Galeria" component={Galeria} />
          <Route exact path="/Login" component={Login}/> 
          <Route exact path="/contact/:firstName/:lastName" component={Contacto} />
        </div>
      </Router>
    );
  }
}

export default App;
