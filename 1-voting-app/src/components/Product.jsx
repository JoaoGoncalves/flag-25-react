export default function Product(props) {
  
  const {
    id,
    title,
    url,
    description,
    votes,
    productImageUrl,
    submitterAvatarUrl,
    changeUpVote,
    changeDownVote,
  } = props;

  const handleUpVote = () => {
    changeUpVote(id)
  }
  const handleDownVote = () => {
    changeDownVote(id)
  }
  

  return (
    <section className="item">
      <article className="image">
        <img src={productImageUrl} alt={title} />
      </article>

      <article className="middle aligned content">
        <div className="header">
          <a onClick={handleUpVote} >
            <i className="large caret up icon"></i>
          </a>
          {votes}
          <a onClick={handleDownVote} >
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
