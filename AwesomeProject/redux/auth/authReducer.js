import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   userId: null,
//   nickname: null,
// };

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    nickname: null,
  },
  reducers: {
  }
});
