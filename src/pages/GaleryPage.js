import React from 'react';
import { Container, Row } from 'reactstrap'
import Album from '../components/Album';
import Navbar from '../components/Navbar';

const GaleryPage = () => (
    <Container>
      <Row>
        <Album name="album 1" image="https://pp.userapi.com/c831209/v831209113/22953/iERgDLPebI0.jpg" />
        <Album name="album 2" image="https://pp.userapi.com/c831209/v831209113/22953/iERgDLPebI0.jpg" />
        <Album />
      </Row>
    </Container>
)

export default GaleryPage;
