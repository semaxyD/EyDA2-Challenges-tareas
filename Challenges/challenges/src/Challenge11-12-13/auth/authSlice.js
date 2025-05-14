import { createSlice } from '@reduxjs/toolkit';
import { loginWithEmailPassword, loginWithGoogle, logoutFirebase } from './authThunks';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginWithEmailPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginWithEmailPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginWithEmailPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logoutFirebase.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;