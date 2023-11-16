import React from 'react';
// import addContact from './add-contact.svg'
import './ContactForm.css';

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: '', phone: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const name = event.target.name;
		this.setState({[name]: event.target.value});
	}

	handleSubmit(event) {
		const {name, phone} = this.state;
		this.props.onAdd(name, phone);
		this.setState({name: '', phone: ''});
		event.preventDefault();
	}

	render() {
		return (
			<div id="contact-form">
				<form className='text-center' onSubmit={this.handleSubmit}>
					<div className="text-center bg-info text-dark">
						<label htmlFor="name">
							<span> NAME :  </span>
							<input name="name" value={this.state.name} type="text" placeholder='enter the name' required onChange={this.handleChange} />
						</label><br/>
						<label htmlFor="phone">
							<span>PHONE : </span>
							<input name="phone" type='number' placeholder='enter the mobile number' value={this.state.phone} required onChange={this.handleChange} />
						</label>
					</div>

					<button type='sumbit' className="fa fa-plus-square" alt="addContact"  >
						<h4>Add/Update</h4>
						</button>
					
				</form>
			</div>
		);
	}
}

export default ContactForm;