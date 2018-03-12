import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';


class AreYouShureModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      toggle: props.toggle,
      name: props.name,
      type: props.type,
      callbackPhoto: props.callbackPhoto,
      callbackAlbum: props.callbackAlbum,
			photoUuid: props.photoUuid,
      albumUuid: props.albumUuid,
      uuid: props.albumUuid
    }

    this.callback = this.callback.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      open: props.open,
      toggle: props.toggle,
      name: props.name,
      type: props.type,
      callbackPhoto: props.callbackPhoto,
      callbackAlbum: props.callbackAlbum,
			photoUuid: props.photoUuid,
      albumUuid: props.albumUuid,
      uuid: props.albumUuid
    })
  }

  callback() {
    switch (this.state.type) {
      case actions.types.DELETE_PHOTO:
        this.state.callbackPhoto(this.state.albumUuid, this.state.photoUuid);
        break;
      case actions.types.DELETE_ALBUM:
        this.state.callbackAlbum(this.state.uuid);
        break;
    };
    this.state.toggle();
  }

  render() {
    return (
      <Modal isOpen={this.state.open} toggle={this.state.toggle}>
        <ModalHeader toggle={this.state.toggle}>Вы уверены что хотите удалить {this.state.name}</ModalHeader>
        <ModalFooter>
          <Button color="danger" onClick={this.callback}>Удалить</Button>
          <Button color="secondary" onClick={this.state.toggle}>Отменить</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  callbackPhoto: bindActionCreators(actions.album.deletePhotoFromAlbum, dispatch),
  callbackAlbum: bindActionCreators(actions.album.deleteAlbum, dispatch)
})

export default connect(null, mapDispatchToProps)(AreYouShureModal);
