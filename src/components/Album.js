import React, { Component } from 'react';
import './Album.css';
import { Col } from 'reactstrap';
import AddAlbumModal from './AddAlbumModal';

const createImage = 'https://pp.userapi.com/c834301/v834301478/ae5a9/VrmQSB3NPeU.jpg';

const showImage = (name, image, sizeStyle, toglle) => (
  <div className={"card " + sizeStyle} style={{ backgroundImage: `url(${image})` }} onClick={toglle}>
    <div className="filler"> </div>
    <div className="text"> {name} </div>
  </div>
);

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      image: this.props.image,
      modalOpen: false,
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
      <Col xs="12" md="6" xl="4">
        {this.state.image ? showImage(this.state.name, this.state.image, "backSize") : showImage('', createImage, "backSizeCreate", this.toggle)}
        <AddAlbumModal open={this.state.modalOpen} toggle={this.toggle}/>
      </Col>
    );
  }
}

export default Album;
