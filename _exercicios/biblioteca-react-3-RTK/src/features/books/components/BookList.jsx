import { useSelector } from "react-redux";
import Book from "./Book";


export default function BookList() {

  const {filteredBooks} = useSelector(state => state.library)

  return (
        <section className="grid">
            {
               filteredBooks.map( b => 
                  <Book 
                    key={b.id} 
                    book={b}
                  />
               )
            }
        </section>
  );
}
