import { React, useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const LOCAL_KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      if (localStorage.getItem(LOCAL_KEY) !== null) {
        setContacts(JSON.parse(localStorage.getItem(LOCAL_KEY)));
      }
      firstRender.current = false;

      return;
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);


  
  const handleContacts = user => {
    const userContact = contacts.find(contact => contact.name === user.name);
    if (userContact) {
      alert(`${user.name} is already in contacts.`);
      return;
    }

    setContacts(prev => [...prev, { ...user, id: nanoid() }]);
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onContacts={handleContacts} />

      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} />

      <ContactList contacts={filterContact} deleteContact={deleteContact} />
    </div>
  );
}
