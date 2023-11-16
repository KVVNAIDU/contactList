import React from 'react';
import Contact from './updateContact';
import ContactForm from './addContact';

class ContactList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {contacts: [
				{name: "DUMMY 1", phone: "1111111111"},
				{name: "DUMMY 2", phone: "2222222222"},
			]};
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleAdd(name, phone) {
    const contact=this.state.contacts
    const existingContact=contact.findIndex(contact=>contact.name===name);
    if(existingContact===-1){
      // let contacts = this.state.contacts;
      contact.unshift({name, phone});
      this.setState({contact});
    }else{
      
      contact[existingContact].phone=phone;
      this.setState({contact});
    }
	}

	handleDelete(name) {
		let contacts = this.state.contacts;
		contacts = contacts.filter(contact => contact.name !== name);
		this.setState({contacts});
	}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({ contacts : data }));
}

	render() {
		const contacts = this.state.contacts;

		return (
			<div className="container bg-primary text-white ">
				<div className="container-fluid text-center shadow bg-secondary">
					<h3>
					Welcome to Contact application

					</h3>
				</div>

				<ContactForm
					onAdd={this.handleAdd}
				/>
				<div className="row text-center d-flex justify-content-center" >

				{
					contacts.map((contactItem) => {
						return (
							<Contact
							name={contactItem.name}
							phone={contactItem.phone}
							onDelete={this.handleDelete}
							/>
							);
						}) // ;
					}
					</div>
			</div>
		);
	}
}

export default ContactList;