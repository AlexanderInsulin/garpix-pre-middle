import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Galery from './components/Galery';
import OpenButton from './components/OpenButton';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="head" />
        <Galery />
        <OpenButton />
      </div>
    );
  }
}

export default App;
