import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRandomMessage = createAsyncThunk(
  'greetings/getRandomMessages',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/greetings/random/message');
    return response.json()
  },
);

const initialState = {
  message: [],
  status: 'idle',
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRandomMessage.fulfilled, (state, action) => {
      state.message = action.payload.random_message;
      state.status = 'done';
    });
    builder.addCase(getRandomMessage.pending, (state, action) => {
      state.status = 'loading';
    });
  },
});

export const { greetingsReducer } = greetingsSlice.actions;

export default greetingsSlice.reducer;
