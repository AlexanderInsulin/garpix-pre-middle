import React, { Component } from 'react';
import './Image.css';
import { Col } from 'reactstrap';
import AddImage from './AddImage';

const createImage = 'https://pp.userapi.com/c834301/v834301478/ae5a9/VrmQSB3NPeU.jpg';
const showStyle = 'imageSizeShow';
const createStyle = 'imageSizeCreate';

const showImage = (name, image, sizeStyle, toglle) => (
  <div className="imageCard" onClick={toglle}>
    <div className={sizeStyle + " imageImage"} style={{ backgroundImage: `url(${image})` }}> <div className="borderShower" /> </div>
    <div className="imageText"> {name} </div>
  </div>
);

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      image: props.image,
      modalOpen: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    return (
      <Col xs="12" sm="6" lg="4" xl="3">
        {this.state.image ? showImage(this.state.name, this.state.image, showStyle) : showImage('', createImage, createStyle, this.toggle)}
        <AddImage open={this.state.modalOpen} toggle={this.toggle}/>
      </Col>
    );
  }
}

export default Image;