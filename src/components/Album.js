import React, { Component } from 'react';
import './Album.css';
import { Col } from 'reactstrap';
import AddAlbumModal from './AddAlbumModal';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import CloseButton from './CloseButton';
// import actions from '../actions'

const createImage = 'https://pp.userapi.com/c834301/v834301478/ae5a9/VrmQSB3NPeU.jpg';
const show = {
  image: 'backSize',
  spaser: 'spaser',
  text: 'text',
}
const create = {
  image: 'imageSizeCreate',
  spaser: 'spaserCreate',
  text: '',
}

const showImage = (name, image, style, toglle) => (
  <div className={"card prew-close " + style.image} style={{ backgroundImage: `url(${image})` }}>
    {style.image === show.image ? <CloseButton /> : null}
    <div className="bordering" onClick={toglle}>
      <div className={"marginator " + style.spaser}>
      </div>
      <div className={"marginator " + style.text}> <div className="textInner"> {name} </div> </div>
    </div>
  </div>
);

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: props.uuid,
      name: props.name,
      image: props.image,
      modalOpen: false,
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  handleOnClick = () => {
    if (this.state.image) {
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={"/album/" + this.state.uuid} />;
    }
    return (
      <Col xs="12" md="6" xl="4">
        {this.state.image ?
          showImage(this.state.name, this.state.image, show, this.handleOnClick) :
          showImage('', createImage, create, this.toggle)}
        <AddAlbumModal open={this.state.modalOpen} toggle={this.toggle} />
      </Col>
    );
  }
}

export default Album;
