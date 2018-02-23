import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'

class AddAlbumModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      toggle: props.toggle,
      text: '',
      callback: props.callback
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.callback = this.callback.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      open: props.open,
      toggle: props.toggle,
      callback: props.callback
    })
  }

  handleNameChange(event) {
    this.setState({text: event.target.value});
  }

  callback() {
    this.state.callback(this.state.text);
    this.state.toggle();
  }

  render() {
    return (
      <Modal isOpen={this.state.open} toggle={this.state.toggle}>
        <ModalHeader toggle={this.state.toggle}>Создание альбома</ModalHeader>
        <ModalBody>
          <Input type="text" placeholder="Название альбома" onChange={this.handleNameChange} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.callback}>Создать</Button>
          <Button color="secondary" onClick={this.state.toggle}>Отменить</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    callback: bindActionCreators(actions.album.addAlbum, dispatch),
})

export default connect(null, mapDispatchToProps)(AddAlbumModal);
