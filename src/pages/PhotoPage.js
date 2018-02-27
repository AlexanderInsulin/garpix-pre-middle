import React from 'react';
import Navbar from '../components/Navbar';
import { Container } from 'reactstrap'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const PhotoPage = ({ photo,  backURL }) => (
  <div style={{ backgroundColor: '#383838', height: '100%' }}>
    <Navbar title={photo.name} backURL={backURL} />
    <Container className="align-middle text-center">
      <img src={photo.imageURL} className="img-fluid" alt={photo.name}
        style={{ marginTop: '32px', marginBottom: '32px', maxHeight: '85vh' }}></img>
    </Container>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  photo: state.galery
        .find(album => album.uuid === ownProps.match.params.albumId).photos
        .find(photo => photo.uuid === ownProps.match.params.photoId),
  backURL: '/album/' + ownProps.match.params.albumId
})

export default withRouter(connect(mapStateToProps)(PhotoPage));
