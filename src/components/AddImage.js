import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

class AddImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
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
          <ModalHeader toggle={this.toggle}> Загрузка фотографии </ModalHeader>
          <ModalBody>
            <Input type="text" placeholder="Название фотографии" />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Перевыбрать</Button>
            <Button color="primary" onClick={this.toggle}>Сохранить</Button>
            <Button color="secondary" onClick={this.toggle}>Отменить</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddImage;
