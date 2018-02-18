import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

const AddAlbum = ({ open, toggle }) => (
  <Modal isOpen={open} toggle={toggle}>
    <ModalHeader toggle={toggle}>Создание альбома</ModalHeader>
    <ModalBody>
      <Input type="text" placeholder="Название альбома" />
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggle}>Создать</Button>
      <Button color="secondary" onClick={toggle}>Отменить</Button>
    </ModalFooter>
  </Modal>
);

export default AddAlbum;
