// usersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: 'Educational' },
  { id: '1', name: 'Entertainment' },
  { id: '2', name: 'Other' }
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
