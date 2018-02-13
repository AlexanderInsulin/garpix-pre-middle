import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Galery from './components/Galery';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="head" />
        <Galery />
      </div>
    );
  }
}

export default App;
