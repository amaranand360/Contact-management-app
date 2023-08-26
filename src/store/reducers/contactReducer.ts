import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Contact {
  id: number;
  name: string;
  email: string;
  mobileNo?: number;
}

export interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [
    { id: 1693057085847, name: "Amar-Kumar", email: "amarkumar@gmail.com", mobileNo: 7544887472 },
    { id: 1693057085848, name: "Amar", email: "amar0030@gmail.com", mobileNo: 8292772484 },
  ],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    updateContact: (
      state,
      action: PayloadAction<{ id: number; updatedContact: Contact }>
    ) => {
      const { id, updatedContact } = action.payload;
      const contactIndex = state.contacts.findIndex(
        (contact) => contact.id === id
      );
      if (contactIndex !== -1) {
        state.contacts[contactIndex] = {
          ...state.contacts[contactIndex],
          ...updatedContact,
        };
      }
    },
    deleteContact: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      state.contacts = state.contacts.filter((contact) => contact.id !== id);
    },
  },
});

export const { addContact, updateContact, deleteContact } =
  contactSlice.actions;

export default contactSlice.reducer;
