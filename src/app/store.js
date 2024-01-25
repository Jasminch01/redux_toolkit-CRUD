import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../feature/books/bookSlice";

const store = configureStore({
    reducer : {bookReducer},
})

export default store;