import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';
import notesReducer from '../redux/notesSlice';
import messagesReducer from '../redux/messagesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notes: notesReducer,
    messages: messagesReducer
  },
});