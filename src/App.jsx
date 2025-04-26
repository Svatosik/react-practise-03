//css
import "./App.css";
import "normalize.css";

//components
import { Component } from "react";
import { Section } from "./components/Section";
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactList";
import { Filter } from "./components/Filter";
//libraries
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
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
    this.setState({ filter: value });
  };

  handleDelete = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) => el.id !== id),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm handleFormSubmit={this.handleFormSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter
            filterHandler={this.filterHandler}
          />
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
