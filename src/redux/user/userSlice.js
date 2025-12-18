import { createSlice } from '@reduxjs/toolkit';
import { fetchUserInfo, updateUserInfo } from './userThunks';


const userSlice = createSlice({
   name: 'user',
   initialState: {
      info: null,
      error: null
   },
   reducers: {
      clearUser: (state) => {
         state.info = null;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchUserInfo.fulfilled, (state, action) => {
            state.info = action.payload;
         })
         .addCase(fetchUserInfo.rejected, (state, action) => {
            state.error = action.payload;
            state.info = null
         })
         .addCase(updateUserInfo.fulfilled, (state, action) => {
            state.info = action.payload;
            state.error = null
         })
         .addCase(updateUserInfo.rejected, (state, action) => {
            state.error = action.payload;
         });
   }
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;