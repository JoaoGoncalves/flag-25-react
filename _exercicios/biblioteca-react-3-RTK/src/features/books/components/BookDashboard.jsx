import { useDispatch } from "react-redux";
import BookList from "./BookList";
import { useEffect } from "react";
import { getBooks } from "../booksSlice";
import BookFilters from "./BookFilters";


export default function BookDashboard() {

    const dispatch = useDispatch();

     useEffect(() => {
        //fetch('https://my-json-server.typicode.com/JoaoGoncalves/biblio-api/books')
        fetch('http://localhost:3000/books')
            .then(resp => resp.json())
            .then( data => dispatch(getBooks(data)))
            .catch( ()=> console.log('ocorreu um erro'));
      
    }, [dispatch])
    

  return (
    <section> 
        <h1>Book Dashboard</h1>
        <BookFilters />
        <BookList />
    </section>
  );
}
