import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import ContactForm from "./ContactForm";
import { fetchContacts, deleteContact, addContact } from "../redux/operations";
import { setContacts, setStatusFilter } from "../redux/contacts-slice";
import { Routes, Route } from "react-router-dom";
import Form from "./Form/Form.jsx";
import Navbar from "../components/Navbar/Navbar";
import { authOperations } from "../redux/auth";
import Home from "./Home";
import Contacts from "./Contacts";

const App = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const { contacts, auth } = useSelector(({ contacts, auth }) => ({
    contacts: contacts.contacts.items,
    isLoggedIn: auth.isLoggedIn,
  }));

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Form type="register" />} />

        <Route path="/login" element={<Form type="login" />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      {/* <h1>Phonebook</h1>
      <ContactForm handleNewContact={handleNewContact} contacts={contacts} />
      <h2>Contacts</h2>

      <Filter onChange={handleFilter} value={filter} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} /> */}
    </div>
  );
};

export default App;
