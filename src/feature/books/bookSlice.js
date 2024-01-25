import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
   books : [
    {   
        id : 1,
        title : 'book1',
        author : "bookman chio"
    },
    {   
        id : 1,
        title : 'book1',
        author : "bookman chio"
    }
   ]
}

const bookSlice = createSlice(
    {
        name : 'books',
        initialState : initialBooks,
        reducers : {
            showBook : state => {
                state;
            }
        }
    }
)

export const {showBook} = bookSlice.actions;
export default bookSlice.reducer;