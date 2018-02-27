import React from 'react';
import { Container, Row } from 'reactstrap'
import Album from '../components/Album';
import { connect } from 'react-redux'

import created_album from '../created_album.svg';

const GaleryPage = ({albums, addAlbum}) => (
    <Container>
      <Row>
      {console.log(albums)}
        {albums.map((album, key) =>
          <Album key={key} uuid={album.uuid} name={album.name} image={album.photos.length === 0 ? created_album : album.photos[0].imageURL}/>
        )}
        <Album />
      </Row>
    </Container>
)

const mapStateToProps = (state) => ({
    albums: state.galery
})
export default connect(mapStateToProps)(GaleryPage);
