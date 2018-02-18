import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

const AddImage = ({ open, toggle }) => (
  <Modal isOpen={open} toggle={toggle}>
    <ModalHeader toggle={toggle}> Загрузка фотографии </ModalHeader>
    <ModalBody>
      <Input type="text" placeholder="Название фотографии" />
    </ModalBody>
    <ModalFooter>
      <Button color="danger" onClick={toggle}>Перевыбрать</Button>
      <Button color="primary" onClick={toggle}>Сохранить</Button>
      <Button color="secondary" onClick={toggle}>Отменить</Button>
    </ModalFooter>
  </Modal>
);

export default AddImage;
