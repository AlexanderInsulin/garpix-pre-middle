import React, { Component } from 'react';
import Navbar from './components/Navbar';
import GaleryPage from './pages/GaleryPage';
import PhotoPage from './pages/PhotoPage';
import AlbumPage from './pages/AlbumPage';
import OpenButton from './components/OpenButton';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{height: '100%'}}>
          <Route exact path="/" component={GaleryPage}/>
          <Route path="/album/:id" component={AlbumPage}/>
          <Route path="/photo" component={PhotoPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
