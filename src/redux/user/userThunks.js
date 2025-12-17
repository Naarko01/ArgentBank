import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = "http://localhost:3001/api/v1"

function getToken() {
   return sessionStorage.getItem('token');
}

export const fetchUserInfo = createAsyncThunk(
   'user/fetch',
   async (_, { rejectWithValue }) => {
      try {
         const token = getToken();
         const res = await fetch(`${BASE_URL}/user/profile`, {
            headers: { 'Authorization': `Bearer ${token}` }
         });

         const data = await res.json()

         if (!res.ok) {
            return rejectWithValue({
               status: res.status,
               message: data?.message
            })
         };

         const usedData = {
            email: data.body.email,
            firstName: data.body.firstName,
            lastName: data.body.lastName,
            userName: data.body.userName,
            id: data.body.id,
         }

         return usedData;

      } catch (err) {
         return rejectWithValue({ message: err.message });
      }
   }
);

export const updateUserInfo = createAsyncThunk(
   'user/update',
   async (updateData, { rejectWithValue }) => {
      try {
         const token = getToken();
         const res = await fetch(`${BASE_URL}/user/profile`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updateData)
         });

         const data = await res.json();

         if (!res.ok) {
            return rejectWithValue({
               status: res.status,
               message: data?.message
            })
         };

         const usedData = {
            email: data.body.email,
            firstName: data.body.firstName,
            lastName: data.body.lastName,
            userName: data.body.userName,
            id: data.body.id,
         }

         return usedData;

      } catch (err) {
         return rejectWithValue({ message: err.message });
      }
   }
);