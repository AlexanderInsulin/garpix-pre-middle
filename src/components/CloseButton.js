import React, { Component } from 'react';
import './CloseButton.css';
import AreYouShureModal from './AreYouShureModal';

class CloseButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: props.type,
			uuid: props.uuid,
			name: props.name,
			modalOpen: false
		}

		this.handleDelete = this.handleDelete.bind(this);
		this.toggle = this.toggle.bind(this);
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
			<div>
				<div className="close close-visible" onClick={this.handleDelete}>
					<div className="close_btn">&times;</div>
				</div>
				<AreYouShureModal open={this.state.modalOpen} toggle={this.toggle} name={this.state.name}/>
			</div>
		)
	}
}

export default CloseButton;
