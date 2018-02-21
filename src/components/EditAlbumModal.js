import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

const EditAlbumModal = ({ open, toggle }) => (
  <Modal isOpen={open} toggle={toggle}>
    <ModalHeader toggle={toggle}>Изменение альбома</ModalHeader>
    <ModalBody>
      <Input type="text" placeholder="Название альбома" />
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggle}>Сохранить</Button>
      <Button color="secondary" onClick={toggle}>Отменить</Button>
    </ModalFooter>
  </Modal>
);

export default EditAlbumModal;
