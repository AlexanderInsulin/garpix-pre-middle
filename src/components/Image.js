import React, { Component } from 'react';
import './Image.css';
import { Col } from 'reactstrap';
import AddImageModal from './AddImageModal';
import { Redirect } from 'react-router';
import CloseButton from './CloseButton';

const createImage = 'https://pp.userapi.com/c834301/v834301478/ae5a9/VrmQSB3NPeU.jpg';
const showStyle = 'imageSizeShow';
const createStyle = 'imageSizeCreate';

const showImage = (name, image, style, toglle) => (
  <div className="imageCard prew-close">
    {style === showStyle ? <CloseButton /> : null}
    <div onClick={toglle}>
      <div className={"imageImage " + style} style={{ backgroundImage: `url(${image})` }}>
        <div className="borderShower" />
      </div>
      <div className="imageText"> {name} </div>
    </div>
  </div>
);

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      image: props.image,
      modalOpen: false,
      photoUuid: props.photoUuid,
      albumUuid: props.albumUuid
    }

    this.toggle = this.toggle.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  toggle() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  handleOnClick() {
    if (this.state.image) {
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={"/photo/" + this.state.photoUuid} />;
    }
    return (
      <Col xs="12" sm="6" lg="4" xl="3">
        {this.state.image ? 
          showImage(this.state.name, this.state.image, showStyle, this.handleOnClick) : 
          showImage('', createImage, createStyle, this.toggle)}
        <AddImageModal open={this.state.modalOpen} toggle={this.toggle} albumUuid={this.state.albumUuid} />
      </Col>
    );
  }
}

export default Image;
