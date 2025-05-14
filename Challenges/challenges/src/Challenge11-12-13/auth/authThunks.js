import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, googleProvider } from '../firebase/config';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const loginWithEmailPassword = createAsyncThunk(
  'auth/loginWithEmailPassword',
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (_, thunkAPI) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutFirebase = createAsyncThunk(
  'auth/logout',
  async () => {
    await signOut(auth);
  }
);