import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Row } from 'reactstrap'

const PhotoPage = () => (
  <div style={{backgroundColor: '#383838', height: '100%'}}>
    <Navbar title="photo" />
    <Container className="align-middle text-center">
      <img src="https://pp.userapi.com/c841325/v841325703/487c3/cr9aYsQmYQI.jpg" className="img-fluid"
        style={{marginTop: '32px', marginBottom: '32px', maxHeight: '85vh'}}></img>
    </Container>
  </div>
)

export default PhotoPage;
