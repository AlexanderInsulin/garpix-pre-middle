import React from 'react';
import './Album.css';
import { Col } from 'reactstrap';

const createImage = 'https://pp.userapi.com/c834301/v834301478/ae5a9/VrmQSB3NPeU.jpg';


const Album = ({ name, image, callback }) => (
  <Col xs="12" md="6" xl="4">
    {image ? showImage(name, image) : create(callback)}
  </Col>
);

const showImage = (name, image) => (
  <div className="card backSize" style={{ backgroundImage: `url(${image})` }}>
    <div className="filler"> </div>
    <div className="text"> {name} </div>
  </div>
);

const create = (callback) => (
  <div className="card backSizeCreate" style={{ backgroundImage: `url(${createImage})` }}>
    <div className="filler"> </div>
    <div className="text">  </div>
  </div>
);

export default Album;
