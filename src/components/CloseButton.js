import React, { Component } from 'react';
import './CloseButton.css';
import AreYouShureModal from './AreYouShureModal';

class CloseButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: props.type,
			photoUuid: props.photoUuid,
			albumUuid: props.albumUuid,
			name: props.name,
			modalOpen: false
		}

		this.handleDelete = this.handleDelete.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	componentWillReceiveProps(props) {
    this.setState({
			type: props.type,
			photoUuid: props.photoUuid,
			albumUuid: props.albumUuid,
			name: props.name
    })
  }

	handleDelete() {
		console.log(this.state);
		this.toggle();
	}

	toggle() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

	render() {
		return (
			<div className="close close-visible">
				<div onClick={this.handleDelete}>
					<div className="close_btn">&times;</div>
				</div>
				<AreYouShureModal 
						open={this.state.modalOpen} 
						toggle={this.toggle} 
						name={this.state.name} 
						albumUuid={this.state.albumUuid} 
						photoUuid={this.state.photoUuid} 
						type={this.state.type}
				/>
			</div>
		)
	}
}

export default CloseButton;
