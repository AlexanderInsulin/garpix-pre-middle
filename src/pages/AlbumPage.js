import React from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Image from '../components/Image';
import Navbar from '../components/Navbar';

export const AlbumPage = ({album, match}) => (
  <div>
    <Navbar title={album.name} />
    <Container>
      <Row>
        {album.photos.map((photo, key) =>
          <Image key={key} name={photo.name} image={photo.imageURL} photoUuid={photo.uuid} albumUuid={album.uuid} />
        )}
        <Image albumUuid={album.uuid} />
      </Row>
    </Container>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  album: state.galery.find(album => album.uuid === ownProps.match.params.id)
})
export default withRouter(connect(mapStateToProps)(AlbumPage));
