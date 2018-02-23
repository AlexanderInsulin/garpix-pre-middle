import React from 'react';
import { Container, Row } from 'reactstrap'
import Album from '../components/Album';
import { connect } from 'react-redux'
import Navbar from '../components/Navbar';

const GaleryPage = ({albums}) => (
    <Container>
      <Row>
        {albums.map(album => <Album name={album.name} image="https://pp.userapi.com/c831209/v831209113/22953/iERgDLPebI0.jpg" />)}
        <Album />
      </Row>
    </Container>
)

const mapStateToProps = (state) => ({
    albums: state.galery
})
export default connect(mapStateToProps)(GaleryPage);
