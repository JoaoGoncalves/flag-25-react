import { createSlice } from "@reduxjs/toolkit";


const booksSlice = createSlice({
    name: '[Library] Books',
    initialState : {
        books: [],
    },
    reducers:{
        getBooks: (state, action) => {
            state.books = action.payload;
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter( b => b.id !== action.payload);
            fetch(`http://localhost:3000/books/${action.payload}`, {
                method: "DELETE"
            });
        }
    }
})

export const {getBooks, deleteBook} = booksSlice.actions;
export default booksSlice.reducer;