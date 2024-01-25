import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialBooks = {
  books: [
    {
      id: uuidv4(),
      title: "killer",
      author: "bookman chio",
    },
    {
      id: uuidv4(),
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
    update : (state, actions) => {
      const {id, title, author} = actions.payload;
      const isExist = state.books.filter(book => book.id === id);
      if (isExist) {
        isExist[0].title = title;
        isExist[0].author = author;
      }
    },
    deleteBook: (state, actions) => {
      const bookTitle = actions.payload;
      state.books = state.books.filter((book) => book.title !== bookTitle);
    },
  },
});

export const { showBook, addBook, deleteBook, update } = bookSlice.actions;
export default bookSlice.reducer;
