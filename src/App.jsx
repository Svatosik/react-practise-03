//css
import "./App.css";
import "normalize.css";

//components
import { Component } from "react";

//libraries
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name] : value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, number, contacts } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState({
      contacts: [...contacts, newContact],
      name: "",
      number: "",
    });
  };
  render() {
    const { contacts, name, number } = this.state;

    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="name-input">Name</label>
          <input
            type="text"
            name="name"
            id="name-input"
            value={name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
          />
          <label htmlFor="number-input">Number</label>
          <input
            type="tel"
            name="number"
            id="number-input"
            value={number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>

        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
