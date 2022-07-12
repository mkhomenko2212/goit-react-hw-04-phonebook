

import React, { Component } from "react";
import { nanoid } from 'nanoid'
import Section from "./Section/Section";
import ContactList from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { ContactForm } from "./ContactForm/ContactForm";



export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',

  }

  componentDidMount() { 
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  };

    componentDidUpdate(prevState) {
    const {contacts} = this.state
    const stringifyContacts = JSON.stringify(contacts)
    
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', stringifyContacts)
    }
  }
  

  addContactHandler = ({ name, number }) => {
    const onListName = this.state.contacts.find(contact => contact.name === name);
    if (onListName) {
      alert('This contact is already added');
      return;
    }
    this.setState(({ contacts }) => {
      return {
        contacts: [
          {id: nanoid(),
            name,
            number,
          },
          ...contacts,
        ],
      };
    });
  }


  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
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
    const { filter } = this.state;
    const filteredContacts = this.filteredContacts();

    return (
      <>
        <Section title='Phonebook'>
        <ContactForm onAddContact={this.addContactHandler} />
      </Section>
        <Section title='Contact List'>
          <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.onDeleteContact}
          /></Section>
      </>
    )
  }
}

