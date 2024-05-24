import './page.style.css';

export default function Lancamentos() {
  return (
    <main className={"container"}>
      <div className="container">
      <h1>Estreias</h1>
      <h2>Filmes</h2>
      <div className="movies">
        <div className="movie-card">
          <div className="poster"></div>
          <p>Estreia</p>
        </div>
        <div className="movie-card">
          <div className="poster"></div>
          <p>Estreia</p>
        </div>
        <div className="movie-card">
          <div className="poster"></div>
          <p>Estreia</p>
        </div>
        <div className="movie-card">
          <div className="poster"></div>
          <p>Estreia</p>
        </div>
      </div>
    </div>
    </main>
  );
}