import React from 'react';
import { Container, Row } from 'reactstrap'
import Album from './Album';

const Galery = () => (
  <Container>
    <Row>
      <Album />
      <Album name="test" image="https://pp.userapi.com/c841221/v841221891/47c6f/bpfvwbTLh0g.jpg"/>
    </Row>
  </Container>
)

export default Galery;