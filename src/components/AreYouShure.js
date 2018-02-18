import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

const AreYouShure = ({ open, name, toggle }) => (
  <Modal isOpen={open} toggle={toggle}>
    <ModalHeader toggle={toggle}>Вы уверены что хотите удалить {name}</ModalHeader>
    <ModalFooter>
      <Button color="danger" onClick={toggle}>Удалить</Button>
      <Button color="secondary" onClick={toggle}>Отменить</Button>
    </ModalFooter>
  </Modal>
);

export default AreYouShure;
