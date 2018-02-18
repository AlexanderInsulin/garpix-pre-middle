import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

class AddAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
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
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Создание альбома</ModalHeader>
          <ModalBody>
            <Input type="text" placeholder="Название альбома" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Создать</Button>
            <Button color="secondary" onClick={this.toggle}>Отменить</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddAlbum;
