import {React, useState} from 'react';
import { nanoid } from 'nanoid';
import { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   handleContacts = user => {
//     const userContact = this.state.contacts.find(
//       contact => contact.name === user.name
//     );
//     if (userContact) {
//       alert(`${user.name} is already in contacts.`);
//       return;
//     }
//     this.setState(prev => ({
//       contacts: [...prev.contacts, { ...user, id: nanoid() }],
//     }));
//   };

//   handleFilter = e => {
//       this.setState({
//       filter: e.target.value,
//     });
//   };

//   deleteContact = id => {
//     this.setState(prev => ({
//       contacts: prev.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     const filterContact = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onContacts={this.handleContacts} />

//         <h2>Contacts</h2>
//         <Filter onFilter={this.handleFilter} />
      
//         <ContactList
//           contacts={filterContact}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }


export function App() {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState("")
  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  handleContacts = user => {
    const userContact = this.state.contacts.find(
      contact => contact.name === user.name
    );
    if (userContact) {
      alert(`${user.name} is already in contacts.`);
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, { ...user, id: nanoid() }],
    }));
  };

  handleFilter = e => {
      this.setState({
      filter: e.target.value,
    });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filterContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onContacts={this.handleContacts} />

        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
      
        <ContactList
          contacts={filterContact}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}