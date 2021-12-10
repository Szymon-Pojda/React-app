const List = () => {
    return (
      <div className="list">
          <header className="header">
              <h2 className="title">Things to do<span>soon!</span></h2>
          </header>
          <p className="description">Interesting things I want to check out</p>
          <section className="columns">
              <article>
                  <h2>Books</h2>
              </article>
              <article>
                  <h2>Movies</h2>
              </article>
              <article>
                  <h2>Games</h2>
              </article>
          </section>
      </div>
    );
  };
  
  export default List;