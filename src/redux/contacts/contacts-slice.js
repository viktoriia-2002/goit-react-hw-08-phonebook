import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setStatusFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    // fetchContacts
    [contactsOperations.fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [contactsOperations.fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    // addContact
    [contactsOperations.addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [contactsOperations.addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    // deleteContact
    [contactsOperations.deleteContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      console.log(action.payload, 'OLOLO');
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload
      );
    },
    [contactsOperations.deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const { setContacts, setStatusFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
