import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Inicio from './components/Inicio/Inicio';
import Galeria from './components/Galeria/Galeria';
import Blog from './components/Blog/Blog';
import Contacto from './components/Contacto/Contacto';
import Ubicacion from './components/Ubicacion/Ubicacion';
import Routas from './Routas';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
        <div>
          <Routas />
          <Route exact path="/" component={Inicio} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Galerias" component={Galeria} />
          <Route path="/Ubicacion" component={Ubicacion}/> 
          <Route path="/contact/:firstName/:lastName" component={Contacto} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
