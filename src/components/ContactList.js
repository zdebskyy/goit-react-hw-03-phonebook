import React from "react";
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

export default ContactList;
