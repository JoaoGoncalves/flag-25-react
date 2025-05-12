export default function Product(props) {
  
  const {
    id,
    title,
    url,
    description,
    votes,
    productImageUrl,
    submitterAvatarUrl,
    changeVote,
  } = props;

  const handleVote = (evt) => {
    //console.log(evt.target.classList.contains('up'));
    let upVote = evt.target.classList.contains('up');
    console.log(upVote);

    upVote ? changeVote(id, 1) : changeVote(id, -1);

   /*  if(upVote){
      changeVote(id, 1)
    } else {
      changeVote(id, -1)
    } */
  }
 
  

  return (
    <section className="item">
      <article className="image">
        <img src={productImageUrl} alt={title} />
      </article>

      <article className="middle aligned content">
        <div className="header">
          <a onClick={handleVote} >
            <i className="large caret up icon"></i>
          </a>
          {votes}
          <a onClick={handleVote} >
            <i className="large caret down icon"></i>
          </a>
        </div>

        <header className="description">
          <a href={url}> {title} </a>
          <p> {description} </p>
        </header>

        <aside className="extra">
          <span>Submitted by: </span>
          <img className="ui avatar image" src={submitterAvatarUrl} />
        </aside>
      </article>
    </section>
  );
}
