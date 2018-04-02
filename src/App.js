import React, { Component } from 'react';
import CanvasCity from './canvascity';
import './App.css';


class App extends Component {
  render() {
    return (
      <div id="animation_container" >
          <CanvasCity width={1920} height={1080} ></CanvasCity>
          <div id="dom_overlay_container">
          </div>
      </div>
    );
  }
}

export default App;
