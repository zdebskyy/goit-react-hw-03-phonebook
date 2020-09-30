import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import SectionTitle from "./components/SectionTitle";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [],
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
    const { contacts } = this.state;
    return (
      <div>
        <SectionTitle title="PhoneBook">
          <ContactForm onAddContact={this.addContact} />
        </SectionTitle>
        <SectionTitle title="Contacts">
          <ContactList contacts={contacts} onRemome={this.removeContact} />
        </SectionTitle>
      </div>
    );
  }
}
