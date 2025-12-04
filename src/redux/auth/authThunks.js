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
         if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
         };

         const data = await res.json();
         sessionStorage.setItem('token', data.body.token);

         return true;

      } catch (err) {
         return rejectWithValue(err.message);
      }
   }
);