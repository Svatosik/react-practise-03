import PropTypes from "prop-types";
import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className={css.item}
        >
          <p className={css.text}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.deleteBtn}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleDelete(contact.id);
            }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    ).isRequired,
    handleDelete: PropTypes.func.isRequired,
}