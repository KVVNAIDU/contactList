import React from 'react';
import './Contact.css';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(event) {
		// event.target.parentNode.parentNode.remove();
		this.props.onDelete(this.props.name);
	}

	render() {
		return (
			<div className="col-md-5 col-lg-3 col-xl-2 text-center border mx-1 mar">

				<div className="contact-details">
					<div className="contact-name"><i className="fa fa-address-card-o text-left bg-light prof"  alt="profile" />{this.props.name}</div>
					<div className="contact-phone">{this.props.phone}</div>
				</div>

				<i className="fa fa-close colorred"  alt="delete" onClick={this.handleDelete} >delete</i>
			</div>
		);
	}
}

export default Contact;