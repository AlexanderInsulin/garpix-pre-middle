import React from 'react';
import { Container, Row } from 'reactstrap'
import Album from '../components/Album';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Navbar from '../components/Navbar';
import actions from '../actions';

import created_album from '../created_album.svg';

const GaleryPage = ({albums, addAlbum}) => (
    <Container>
      <Row>
        {albums.map((album, key) =>
          <Album key={key} uuid={album.uuid} name={album.name} image={created_album}/>
        )}
        <Album />
      </Row>
    </Container>
)

const mapStateToProps = (state) => ({
    albums: state.galery
})
export default connect(mapStateToProps)(GaleryPage);
