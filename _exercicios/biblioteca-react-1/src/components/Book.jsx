

export default function Book({book, deleteBook}) {

    let {id, title, author, alreadyRead, imageUrl} = book;

    const handleDelete = () => {
        deleteBook(id);
    }

  return (
    <article>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <img src={`./livros/${imageUrl}`} alt={title} />
        <p>Already Read : {alreadyRead ? '✅' : '❌' }  </p>
        <button className="btn" onClick={handleDelete}>Delete</button>
    </article>
  );
}
