import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'

class AreYouShureModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      toggle: props.toggle,
      name: props.name,
      callback: props.callback,
			photoUuid: props.photoUuid,
			albumUuid: props.albumUuid
    }

    console.log(this.state);

    this.callback = this.callback.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      open: props.open,
      toggle: props.toggle,
      callback: props.callback,
			photoUuid: props.photoUuid,
			albumUuid: props.albumUuid
    })
  }

  callback() {
    console.log(this.state);
    this.state.callback(this.state.albumUuid, this.state.photoUuid);
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
  callback: bindActionCreators(actions.album.deletePhotoFromAlbum, dispatch),
})

export default connect(null, mapDispatchToProps)(AreYouShureModal);
