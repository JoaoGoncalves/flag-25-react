import { useSelector } from "react-redux";
import Book from "./Book";


export default function BookList() {

  const {books} = useSelector(state => state.library)

  return (
        <section className="grid">
            {
               books.map( b => 
                  <Book 
                    key={b.id} 
                    book={b}
                  />
               )
            }
        </section>
  );
}
