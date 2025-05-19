import Book from "./Book";


export default function BookList({books}) {


  return (
        <section className="grid">
            {
                books.map( b => <Book key={b.id} book={b} />)
            }
        </section>
  );
}
