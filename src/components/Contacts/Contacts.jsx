import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Box, Divider } from '@mui/material';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactForm from '../ContactForm';
import contactsOperations from '../../redux/contacts/contacts-operations';
import {
  setContacts,
  setStatusFilter,
} from '../../redux/contacts/contacts-slice';
import styles from './Contacts.module.css';

const Contacts = () => {
  const { fetchContacts, deleteContact, addContact } = contactsOperations;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, fetchContacts]);

  const { contacts, filter, isLoggedIn } = useSelector(state => ({
    contacts: state.contacts.contacts.items,
    filter: state.contacts.filter,
    isLoggedIn: state.auth.isLoggedIn,
  }));

  const handleNewContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleFilter = event => {
    const filterValue = event.target.value;

    dispatch(setStatusFilter(filterValue));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));

    const updatedContacts = contacts.filter(contact => contact.id !== id);
    dispatch(setContacts(updatedContacts));
  };

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  if (!isLoggedIn) {
    return <Box className={styles.loginMassege}>Please Log In</Box>;
  }

  const isContacts = contacts.length;

  return (
    <Container>
      <Box style={{ maxWidth: 280, margin: 'auto' }}>
        <h1>Phonebook</h1>
        <ContactForm handleNewContact={handleNewContact} contacts={contacts} />
      </Box>
      <Divider variant="middle" />

      <Box
        style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}
      >
        <h3>Find contacts by name</h3>
        <Filter onChange={handleFilter} value={filter} />
      </Box>
      <Box
        style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}
      >
        {isContacts && <h2>Contacts</h2>}
      </Box>

      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </Container>
  );
};

export default Contacts;
