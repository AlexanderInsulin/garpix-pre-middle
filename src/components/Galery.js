import React from 'react';
import { Container, Row } from 'reactstrap'
import Album from './Album';
import Image from './Image';

const Galery = () => (
  <Container>
    <Row>
      <Image name="imge" image="https://pp.userapi.com/c604528/v604528437/3450a/upH0AdIRSGg.jpg" />
      <Image name="img" image="https://pp.userapi.com/c831209/v831209113/22953/iERgDLPebI0.jpg" />
      <Image name="img" image="https://pp.userapi.com/c831209/v831209113/22953/iERgDLPebI0.jpg" />
      <Image name="img" image="https://pp.userapi.com/c840325/v840325244/54531/PHrFdXR8Zlo.jpg" />
      <Image name="img" image="https://pp.userapi.com/c831209/v831209113/22953/iERgDLPebI0.jpg" />
      <Image name="img" image="https://pp.userapi.com/c831209/v831209113/22953/iERgDLPebI0.jpg" />
      <Image  />
      <Album />
      <Album name="imgdcnkendc edjcnekncked delcknjelfncd kcnfldvldv kdvndn" image="https://pp.userapi.com/c831209/v831209113/22953/iERgDLPebI0.jpg" />
      <Album name="img" image="https://pp.userapi.com/c831209/v831209113/22953/iERgDLPebI0.jpg" />
    </Row>
  </Container>
)

export default Galery;
