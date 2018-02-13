import React from 'react';
import './Image.css';
import { Col } from 'reactstrap';

const createImage = 'https://pp.userapi.com/c834301/v834301478/ae5a9/VrmQSB3NPeU.jpg';


const Image = ({ name, image, callback }) => (
  <Col xs="12" sm="6" lg="4" xl="3">
    {image ? showImage(name, image) : create(callback)}
  </Col>
);

const showImage = (name, image) => (
  <div className="imageCard">
    <div className="imageImage imageSizeShow" style={{ backgroundImage: `url(${image})` }}> <div className="borderShower" /> </div>
    <div className="imageText"> {name} </div>
  </div>
);

const create = (callback) => (
  <div className="imageCard">
    <div className="imageImage imageSizeCreate" style={{ backgroundImage: `url(${createImage})` }}> <div className="borderShower" /> </div>
    <div className="imageText"> </div>
  </div>
);

export default Image;