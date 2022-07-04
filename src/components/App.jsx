

import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import Section from "./Section/Section";
import ContactList from "./ContactList/ContactList";
import { nanoid } from 'nanoid'
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
  }

  handleFilterChange = filter => {
    this.setState({ filter });
  }; 
  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  addContactHandler = ({ name, number }) => {
    const existingContact = this.state.contacts.find(contact => contact.name === name);
    if (existingContact) {
      alert('This contact is already in contacts');
      return;
    }
    this.setState(({ contacts }) => {
      return {
        contacts: [
          {
            id: nanoid(),
            name,
            number,
          },
          ...contacts,
        ],
      };
    });
  }

    filteredContacts = () => {
    const { contacts, filter } = this.state;
    const lowFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowFilter)
    );
  };

    onDeleteContact = (contactId) => {
      this.setState(prevState => (
        {
          contacts: prevState.contacts.filter(
            contact => contact.id !== contactId)
        }))
  }

  render() {
    const { contacts } = this.state;
    const { filter } = this.state;
    const filteredContacts = this.filteredContacts();
    return (
      <><Section title='Phonebook'>
        <ContactForm onAddContact={this.addContactHandler} />
      </Section>
        <Section title='Contact List'>
          <Filter filter={filter} onChangeFilter={this.handleFilterChange} />
            <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.onDeleteContact}
          /></Section>
      </>
    )
  }
}

