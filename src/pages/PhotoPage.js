import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Row } from 'reactstrap'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const PhotoPage = ({ photo }) => (
  <div style={{ backgroundColor: '#383838', height: '100%' }}>
    <Navbar title={photo.name} />
    <Container className="align-middle text-center">
      <img src={photo.imageURL} className="img-fluid"
        style={{ marginTop: '32px', marginBottom: '32px', maxHeight: '85vh' }}></img>
    </Container>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  let photos = [];
  state.galery.map(album => album.photos).forEach(phts => photos = photos.concat(phts));
  return ({
    photo: photos.find(photo => photo.uuid === ownProps.match.params.id)
  })
}
export default withRouter(connect(mapStateToProps)(PhotoPage));
