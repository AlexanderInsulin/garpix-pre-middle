import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'

class AddImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      toggle: props.toggle,
      albumUuid: props.albumUuid,
      text: '',
      url: '',
      callback: props.callback
    };

    console.log(props.albumUuid);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.callback = this.callback.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      open: props.open,
      toggle: props.toggle,
      albumUuid: props.albumUuid,
      callback: props.callback
    })
  }

  handleNameChange(event) {
    this.setState({ text: event.target.value });
  }
  
  handleURLChange(event) {
    this.setState({ url: event.target.value });
  }

  callback() {
    this.state.callback(this.state.albumUuid, this.state.text, this.state.url);
    this.state.toggle();
  }

  render() {
    return (
      <Modal isOpen={this.state.open} toggle={this.state.toggle}>
        <ModalHeader toggle={this.state.toggle}> Загрузка фотографии </ModalHeader>
        <ModalBody>
          <Input type="text" placeholder="Название фотографии" onChange={this.handleNameChange} />
          <Input type="text" placeholder="URL фотографии" onChange={this.handleURLChange} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.state.toggle}>Перевыбрать</Button>
          <Button color="primary" onClick={this.callback}>Сохранить</Button>
          <Button color="secondary" onClick={this.state.toggle}>Отменить</Button>
        </ModalFooter>
      </Modal>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  callback: bindActionCreators(actions.album.addPhotoToAlbum, dispatch),
})

export default connect(null, mapDispatchToProps)(AddImageModal);
