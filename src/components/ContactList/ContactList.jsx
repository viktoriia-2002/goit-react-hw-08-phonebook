import React from "react";
import PropTypes from "prop-types";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ui>
      {contacts?.map((person) => (
        <ContactListItem
          key={person.id}
          person={person}
          handleDelete={handleDelete}
        />
      ))}
    </ui>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
