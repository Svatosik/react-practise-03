import PropTypes from "prop-types";
import { Component } from "react";
import css from "./ContactForm.module.css";

const INITIAL_STATE = {
    name: '',
    number:'',
}
export class ContactForm extends Component {
  state = {
    ...INITIAL_STATE
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({...INITIAL_STATE});
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={css.form}
      >
        <label
          htmlFor="name-input"
          className={css.inputLabel}
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name-input"
          className={css.input}
          value={this.state.name}
          onChange={this.handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
        <label
          htmlFor="number-input"
          className={css.inputLabel}
        >
          Number
        </label>
        <input
          type="tel"
          name="number"
          id="number-input"
          className={css.input}
          value={this.state.number}
          onChange={this.handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={css.submitBtn}>Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

