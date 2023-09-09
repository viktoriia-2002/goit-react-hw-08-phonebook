import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { ToastContainer } from 'react-toastify';

const ContactForm = ({ contacts, handleNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const duplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicateName) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      name: name,
      number: number,
    };

    handleNewContact(newContact);

    setName('');
    setNumber('');
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleTelChange = event => {
    setNumber(event.target.value);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', marginBottom: 15 }}
    >
      <TextField
        style={{ marginBottom: 15 }}
        id="standard-basic"
        variant="standard"
        label="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
      />

      <TextField
        style={{ marginBottom: 15 }}
        id="standard-basic"
        variant="standard"
        label="Number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={number}
        onChange={handleTelChange}
      />
      <Button type="submit" variant="outlined">
        Add contact
      </Button>

      <ToastContainer autoClose={1000} />
    </form>
  );
};

export default ContactForm;
// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';
// import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
// import { MuiTelInput } from 'mui-tel-input';

// const ContactForm = ({ contacts, handleNewContact }) => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleSubmit = event => {
//     event.preventDefault();

//     const duplicateName = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (duplicateName) {
//       toast.error(`${name} is already in contacts.`);
//       return;
//     }

//     const newContact = {
//       name: name,
//       number: phone,
//     };

//     handleNewContact(newContact);

//     setName('');
//     setPhone('');
//   };

//   const handleNameChange = event => {
//     setName(event.target.value);
//   };

//   return (
//     <form
//       autoComplete="off"
//       onSubmit={handleSubmit}
//       style={{ display: 'flex', flexDirection: 'column', marginBottom: 15 }}
//     >
//       <TextField
//         style={{ marginBottom: 15 }}
//         id="standard-basic"
//         variant="standard"
//         label="Name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         value={name}
//         onChange={handleNameChange}
//       />

//       <MuiTelInput
//         style={{ marginBottom: 15 }}
//         id="standard-basic"
//         variant="standard"
//         label="Number"
//         required
//         value={phone}
//         onChange={setPhone}
//       />

//       <Button type="submit" variant="outlined">
//         Add contact
//       </Button>

//       <ToastContainer autoClose={1000} />
//     </form>
//   );
// };

// export default ContactForm;
