import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

// var modal = false;

// var AddImage = () => (
//   <div>
//     <Button color="danger" onClick={toggle}> 0 </Button>
//     <Modal isOpen={modal} toggle={toggle}>
//       <ModalHeader> 1 </ModalHeader>
//       <ModalBody> 2 </ModalBody>
//       <ModalFooter> 3 </ModalFooter>
//     </Modal>
//   </div>
// );

// const toggle = () => {
//   console.log(modal);
//   var b = modal;
//   console.log(b);
//   modal = !modal;
//   console.log(modal);
// };

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