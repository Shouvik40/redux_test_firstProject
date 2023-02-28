import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload); //This state is an array of songs whereas in case
      //   are all other states: they are the the full object containing all this state Arrays.
    },
    removeMovie(state, action) {
      let index = state.indexOf(action.payload);
      state.splice(index, 1);

      //   state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
