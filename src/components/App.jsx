import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import List from './List/List';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';
import { Wrapper, Title, SubTitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const handleChangeFinder = evt => {
    setFilter(evt.target.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const visibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Contacts onSubmit={handleSubmit} />
      <SubTitle>Contacts</SubTitle>
      <Filter value={filter} onChange={handleChangeFinder} />
      {contacts.length > 0 ? (
        <List contacts={visibleContacts()} onDeleteContact={deleteContact} />
      ) : (
        <Notification message="You have no contacts" />
      )}
    </Wrapper>
  );
};
