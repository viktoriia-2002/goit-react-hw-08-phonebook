import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ person, handleDelete }) => {
  const { id, name, number } = person;

  return (
    <ul>
      <li>{name}:</li>
      <li>{number}</li>
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </ul>
  );
};

ContactListItem.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
