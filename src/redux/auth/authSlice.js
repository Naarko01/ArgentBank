import { createSlice } from '@reduxjs/toolkit';
import { login } from './authThunks';

const authSlice = createSlice({
   name: 'auth',
   initialState: {
      isAuthenticated: !!sessionStorage.getItem('token'),
      error: null,
   },
   reducers: {
      logout: (state) => {
         sessionStorage.removeItem('token');
         state.isAuthenticated = false;
         state.error = null;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(login.fulfilled, (state) => {
            state.isAuthenticated = true;
         })
         .addCase(login.rejected, (state, action) => {
            state.error = action.payload;
            state.isAuthenticated = false;
         });
   }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;