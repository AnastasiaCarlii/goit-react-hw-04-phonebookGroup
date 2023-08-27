import React, { Component } from 'react';
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

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // adding to and downloading from local storage

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const updateContacts = JSON.parse(contacts);

    if (updateContacts) {
      this.setState({ contacts: updateContacts });
    }
    console.log('App componentDidMount');
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    console.log('App componentsDidUpdate');
  }

  //adding to and downloading from local storage

  formSubmitData = data => {
    const currentName = this.state.contacts.find(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );
    if (currentName) {
      return alert(currentName.name + 'is already in contacts');
    }

    const contact = { ...data, id: nanoid() };
    this.setState(prev => ({ contacts: [contact, ...prev.contacts] }));
  };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <Wrapper>
        <div className="phonebook">
          <Heading>Phonebook</Heading>
          <ContactForm onSubmit={this.formSubmitData} />
          <ContactsTitle>Contacts</ContactsTitle>
          <FindContactByName>Find contacts by name</FindContactByName>
          <Filter value={filter} onChange={this.changeFilter} />
          {contacts.length ? (
            <ContactList
              contacts={this.getFilteredContacts()}
              onDelete={this.deleteContacts}
            />
          ) : (
            <p>No any contacts</p>
          )}
        </div>
      </Wrapper>
    );
  }
}

export default App;
