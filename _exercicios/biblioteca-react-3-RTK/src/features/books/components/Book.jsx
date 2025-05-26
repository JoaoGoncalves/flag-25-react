import { useDispatch } from "react-redux";
import { deleteBook } from "../booksSlice";


export default function Book({book}) {

    let {id, title, author, alreadyRead, imageUrl} = book;

    const dispatch = useDispatch();


  return (
    <article>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <img src={`./livros/${imageUrl}`} alt={title} />
        <p>Already Read : {alreadyRead ? '✅' : '❌' }  </p>
        <button className="btn" onClick={ ()=> dispatch(deleteBook(id))}>Delete</button>
    </article>
  );
}
