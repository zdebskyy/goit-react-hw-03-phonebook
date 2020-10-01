import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import SectionTitle from "./components/SectionTitle";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  changeFilter = (filter) => {
    this.setState({ filter });
  };
  getFiteredContact = () => {
    const { filter, contacts } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };
  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getFiteredContact();
    return (
      <div>
        <SectionTitle title="PhoneBook">
          <ContactForm onAddContact={this.addContact} allContacts={contacts} />
        </SectionTitle>
        <SectionTitle title="Contacts">
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onRemome={this.removeContact}
          />
        </SectionTitle>
      </div>
    );
  }
}
