import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../feature/books/bookSlice";

const store = configureStore({
    reducer : {booksReducer},
})

export default store;