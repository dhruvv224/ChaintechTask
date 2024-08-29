// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return action.payload; // Set the state to the passed object
    },
    updateUserData: (state, action) => {
      return { ...state, ...action.payload }; // Merge the existing state with new data
    },
    clearUserData: () => {
      return {}; // Reset the state to an empty object
    },
  },
});

export const { setUserData, updateUserData, clearUserData } = UserSlice.actions;
export default UserSlice.reducer;
