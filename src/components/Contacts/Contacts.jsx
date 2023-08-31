import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import ContactForm from "../ContactForm";
import {
  fetchContacts,
  deleteContact,
  addContact,
} from "../../redux/operations";
import { setContacts, setStatusFilter } from "../../redux/contacts-slice";

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { contacts, filter } = useSelector((state) => ({
    contacts: state.contacts.contacts.items,
    filter: state.contacts.filter,
  }));

  const handleNewContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleFilter = (event) => {
    const filterValue = event.target.value;

    dispatch(setStatusFilter(filterValue));
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));

    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    dispatch(setContacts(updatedContacts));
  };

  const filteredContacts = contacts?.filter((contact) =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm handleNewContact={handleNewContact} contacts={contacts} />
      <h2>Contacts</h2>

      <Filter onChange={handleFilter} value={filter} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </Container>
  );
};

export default Contacts;
