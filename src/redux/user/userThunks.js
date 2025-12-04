import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = "http://localhost:3001/api/v1"

export const fetchUserInfo = createAsyncThunk(
   'user/fetch',
   async (_, { rejectWithValue }) => {
      try {
         const token = sessionStorage.getItem('token');

         const res = await fetch(`${BASE_URL}/user/profile`, {
            headers: { 'Authorization': `Bearer ${token}` }
         });

         if (!res.ok) throw new Error('Unable to fetch user info');

         const data = await res.json()
         return data.body;

      } catch (err) {
         return rejectWithValue(err.message);
      }
   }
);

export const updateUserInfo = createAsyncThunk(
   'user/update',
   async (updateData, { rejectWithValue }) => {
      try {
         const token = sessionStorage.getItem('token');

         const res = await fetch(`${BASE_URL}/user/profile`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updateData)
         });

         if (!res.ok) throw new Error('Failed to update user');

         return await res.json();
      } catch (err) {
         return rejectWithValue(err.message);
      }
   }
);