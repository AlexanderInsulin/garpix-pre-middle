import React from 'react';
import { Container, Row } from 'reactstrap'
import { connect } from 'react-redux'
import Image from '../components/Image';
import Navbar from '../components/Navbar';

export const AlbumPage = ({albums}) => (
  <div>
    <Navbar title="album" />
    <Container>
      <Row>
        <Image name="img" image="https://pp.userapi.com/c604528/v604528437/3450a/upH0AdIRSGg.jpg" />
        <Image name="img" image="https://pp.userapi.com/c831209/v831209113/22953/iERgDLPebI0.jpg" />
        <Image name="img" image="https://pp.userapi.com/c831209/v831209113/22953/iERgDLPebI0.jpg" />
        <Image name="img" image="https://pp.userapi.com/c840325/v840325244/54531/PHrFdXR8Zlo.jpg" />
        <Image name="img" image="https://pp.userapi.com/c831209/v831209113/22953/iERgDLPebI0.jpg" />
        <Image name="img" image="https://pp.userapi.com/c831209/v831209113/22953/iERgDLPebI0.jpg" />
        <Image  />
      </Row>
    </Container>
  </div>
)

const mapStateToProps = (state) => ({
    albums: state.galery
})
export default connect(mapStateToProps)(AlbumPage);
