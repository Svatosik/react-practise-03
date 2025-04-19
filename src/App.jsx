//css
import "./App.css";
import "normalize.css";

//components
import { Component } from "react";
import { Section } from "./components/Section/Section";
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
//libraries
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    filteredContacts: null,
  };

  handleFormSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    const isAlreadyExist = contacts.find((el) => el.name === name);
    if (isAlreadyExist) return alert("Already Exists");

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState({
      contacts: [...contacts, newContact],
    });
  };

  filterHandler = (e) => {
    const value = e.target.value;
    this.setState((prev) => ({
      filteredContacts: prev.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      ),
    }));
  };

  handleDelete = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) => el.id !== id),
      filteredContacts: prev.filteredContacts.filter((el) => el.id !== id),
    }));
  };
  render() {
    const { contacts, filteredContacts } = this.state;
    const visibleContacts = filteredContacts ?? contacts;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm handleFormSubmit={this.handleFormSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter filterHandler={this.filterHandler} />
          <ContactList
            contacts={visibleContacts}
            handleDelete={this.handleDelete}
          />
        </Section>
      </>
    );
  }
}

export default App;