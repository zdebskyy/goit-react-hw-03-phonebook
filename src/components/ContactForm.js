import React, { Component } from "react";
import InputForm from "./InputForm";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleInput = (value) => {
    this.setState({ name: value });
  };
  handleNumber = (value) => {
    this.setState({ number: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state);
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