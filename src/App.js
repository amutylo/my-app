import React, { Component } from 'react';
import CanvasCity from './canvascity';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from './components/Home';
import Product from './components/Product';
import Brands from './component/Brands';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
      {/*<Navbar/>*/}
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/brands" component={Brands}/>
        {/*<Route path="/applications" component={Applications}/>*/}
        <Route path="/product/:id" component={Product}/>
      </Router>
      </div>
          {/*<CanvasCity></CanvasCity>*/}
    );
  }
}

export default App;
