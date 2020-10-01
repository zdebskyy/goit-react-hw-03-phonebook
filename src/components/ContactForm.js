import React, { Component } from "react";
import InputForm from "./InputForm";
import PropTypes from "prop-types";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  static propTypes = {
    allContacts: PropTypes.array.isRequired,
    onAddContact: PropTypes.func.isRequired,
  };

  handleInput = (value) => {
    this.setState({ name: value });
  };
  handleNumber = (value) => {
    this.setState({ number: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const contactName = this.props.allContacts.map((el) => {
      return el.name;
    });
    const validation = contactName.find((el) => el === this.state.name);

    validation === this.state.name
      ? alert("This contact name already exist")
      : this.props.onAddContact(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <InputForm
          label="Name"
          placeholder="Enter name"
          type="text"
          value={name}
          onInput={this.handleInput}
        />
        <InputForm
          label="Number"
          placeholder="Enter number"
          type="number"
          value={number}
          onInput={this.handleNumber}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
