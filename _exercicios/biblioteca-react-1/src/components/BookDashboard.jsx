import BookList from "./BookList";
import {books} from '../data.json';
import { useState } from "react";


export default function BookDashboard() {

    const [livros, setLivros] = useState(books);

  return (
    <section> 
        <h1>Book Dashboard</h1>
        <BookList books={livros}/>
    </section>
  );
}
