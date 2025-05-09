export default function Product(props) {
  
  const {id, title, url, description, votes, productImageUrl, submitterAvatarUrl} = props;
  
    return (
    <section className="item">

      <article className="image">
        <img src={productImageUrl} alt={title} />
      </article>

      <article className="middle aligned content">
        <div className="header">
            <a><i className="large caret up icon"></i></a>
            {votes}
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

