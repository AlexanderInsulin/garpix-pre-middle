import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import AreYouShure from './AreYouShure';

class OpenButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      name: props.name
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Открыть модалку</Button>
        <AreYouShure open={this.state.modalOpen} toggle={this.toggle} name={'xyz'}/>
      </div>
    );
  }
}

export default OpenButton;