import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    {
      id: 1,
      title: "killer",
      author: "bookman chio",
    },
    {
      id: 1,
      title: "mester of puppets",
      author: "zioki",
    },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBook: (state) => {
      state;
    },
    addBook: (state, actions) => {
      state.books.push(actions.payload);
    },
  },
});

export const { showBook, addBook } = bookSlice.actions;
export default bookSlice.reducer;
