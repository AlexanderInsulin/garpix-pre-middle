import React, { Component } from 'react';
import GaleryPage from './pages/GaleryPage';
import PhotoPage from './pages/PhotoPage';
import AlbumPage from './pages/AlbumPage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{height: '100%'}}>
          <Route exact path="/" component={GaleryPage}/>
          <Route path="/album/:id" component={AlbumPage}/>
          <Route path="/photo/:albumId/:photoId" component={PhotoPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
