// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Apidata: {}, // Define Apidata here as an empty object
  userData: {} // Optionally add userData to handle other user information
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload; // Update userData with new information
    },
    updateUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload }; // Merge existing userData with new data
    },
    clearUserData: (state) => {
      state.userData = {}; // Clear userData, leave Apidata untouched
    },
    setApiData: (state, action) => {
      state.Apidata = action.payload; // Update only Apidata field with new data
    },
    clearApiData: (state) => {
      state.Apidata = {}; // Reset Apidata to an empty object
    }
  },
});

// Export the actions
export const { setUserData, updateUserData, clearUserData, setApiData, clearApiData } = UserSlice.actions;

// Export the reducer
export default UserSlice.reducer;
