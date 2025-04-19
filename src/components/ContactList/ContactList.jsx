import PropTypes from "prop-types";

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className="item"
        >
          <p>
            {contact.name}: {contact.number}
          </p>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleDelete(contact.id);
            }}
          >
            ❌
          </span>
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