import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sendMessageIsOpen: false,
  selectMail: null,
  status: 'idle',
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    selectOpenMail: (state, action) => {
      state.selectMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { selectOpenMail, openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectMail = (state) => state.mail.selectMail;

export const sendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
