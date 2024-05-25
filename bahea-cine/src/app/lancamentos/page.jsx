import './page.style.css';

export default function Lancamentos() {
  return (
    <div className="container">
      <h1>Estreias</h1>
      <h2>Filmes</h2>
      <div className="movies">
        <div className="movie-card">
          <img src="img/img-lancamentos/imagem0.png" alt="Estreia 1" className="poster"/>
          <p>Estreia</p>
        </div>
        <div className="movie-card">
          <img src="img/img-lancamentos/imagem1.png" alt="Estreia 2" className="poster"/>
          <p>Estreia</p>
        </div>
        <div className="movie-card">
          <img src="/bahea-cine/src/app/lancamentos/cartazes_lancamento/cartaz3.jpg" alt="Estreia 3" className="poster"/>
          <p>Estreia</p>
        </div>
        <div className="movie-card">
          <img src="/bahea-cine/src/app/lancamentos/cartazes_lancamento/cartaz4.jpg" alt="Estreia 4" className="poster"/>
          <p>Estreia</p>
        </div>
      </div>
    </div>
  );
}
