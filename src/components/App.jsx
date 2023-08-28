import { useState, useEffect } from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from 'components/SearchFilter/SearchFilter';
import {
  Wrapper,
  Heading,
  ContactsTitle,
  FindContactByName,
} from './App.styled';
import { nanoid } from 'nanoid';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitData = data => {
    const currentName = contacts.find(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );
    if (currentName) {
      return alert(currentName.name + 'is already in contacts');
    }
    setContacts(prevState => [...prevState, { ...data, id: nanoid() }]);
  };

  // const handleAddContact = newContact => {
  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // };

  const deleteContacts = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Wrapper>
      <div className="phonebook">
        <Heading>Phonebook</Heading>
        <ContactForm onSubmit={formSubmitData} />
        <ContactsTitle>Contacts</ContactsTitle>
        <FindContactByName>Find contacts by name</FindContactByName>
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length ? (
          <ContactList
            contacts={getFilteredContacts()}
            onDelete={deleteContacts}
          />
        ) : (
          <p>No any contacts</p>
        )}
      </div>
    </Wrapper>
  );
}

export default App;
