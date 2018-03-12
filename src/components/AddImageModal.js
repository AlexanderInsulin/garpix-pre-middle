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
      callback: props.callback,
      uploadPhoto: props.uploadPhoto,
      preview: props.preview
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      open: props.open,
      toggle: props.toggle,
      albumUuid: props.albumUuid,
      callback: props.callback,
      preview: props.preview
    })
  }

  handleNameChange(event) {
    this.setState({ text: event.target.value });
  }

  handleFileChange(event) {
    this.state.callback(event.target.files[0]);
  }

  render() {
    return (
      <Modal isOpen={this.state.open} toggle={this.state.toggle}>
        <ModalHeader toggle={this.state.toggle}> Загрузка фотографии </ModalHeader>
        <ModalBody>
          <Input type="text" placeholder="Название фотографии" onChange={this.handleNameChange} />
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile" onChange={this.handleFileChange} />
            <label className="custom-file-label" htmlFor="customFile"></label>
          </div>
          <img className="img-fluid" src={this.state.preview} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.state.uploadPhoto(this.state.albumUuid, this.state.text, this.state.preview)}>Загрузить</Button>
          <Button color="secondary" onClick={this.state.toggle}>Отменить</Button>
        </ModalFooter>
      </Modal>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  callback: bindActionCreators(actions.uploadPhoto.previewPhotoRequest, dispatch),
  uploadPhoto: bindActionCreators(actions.uploadPhoto.uploadPhotoRequest, dispatch),
})

const mapStateToProps = (state) => ({
    preview: state.uploadPhoto.imageBase64
})

export default connect(mapStateToProps, mapDispatchToProps)(AddImageModal);
