import React, { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";

const ContactForm = ({ contacts, handleNewContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const duplicateName = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicateName) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    handleNewContact(newContact);

    setName("");
    setNumber("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTelChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          className="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="tel">
        Number
        <input
          type="tel"
          id="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleTelChange}
        />
      </label>
      <button type="submit">Add contact</button>
      <ToastContainer autoClose={1000} />

      <h3>Find contacts by name</h3>
    </form>
  );
};

export default ContactForm;
