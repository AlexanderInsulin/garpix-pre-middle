import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Galery from './components/Galery';
import AreYouShure from './components/AreYouShure';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="head" />
        <Galery />
        <AreYouShure name="this" />
      </div>
    );
  }
}

export default App;
