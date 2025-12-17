import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = "http://localhost:3001/api/v1"

export const login = createAsyncThunk(
   'auth/login',
   async ({ email, password }, { rejectWithValue }) => {
      try {
         const res = await fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
         });

         const data = await res.json();

         if (!res.ok) {
            return rejectWithValue({
               status: res.status,
               message: data?.message,
            })
         };

         sessionStorage.setItem('token', data.body.token);

         return true;

      } catch (err) {
         return rejectWithValue({ message: err.message });
      }
   }
);