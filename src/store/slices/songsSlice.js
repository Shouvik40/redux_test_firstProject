import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";
const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload); //This state is an array of songs whereas in case
      //   are all other states: they are the the full object containing all this state Arrays.
    },
    removeSong(state, action) {
      let index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
