import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

class AreYouShure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: props.name
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Открыть модалку</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Вы уверены что хотите удалить {this.state.name}</ModalHeader>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Удалить</Button>
            <Button color="secondary" onClick={this.toggle}>Отменить</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AreYouShure;
