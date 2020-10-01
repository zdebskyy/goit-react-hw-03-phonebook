import React from "react";
import PropTypes from "prop-types";
function ContactList({ contacts, onRemome }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <span>
            {contact.name} : {contact.number}
            <button type="button" onClick={() => onRemome(contact.id)}>
              Delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func,
};

export default ContactList;
