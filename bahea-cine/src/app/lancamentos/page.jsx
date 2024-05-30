import './page.style.css';

export default function Lancamentos() {
  return (
    <div className="container">
      <h1 className="title">Estreias</h1>
      <h2>Filmes</h2>

      <div className="movies">
        <div className="movie-card">
          <img src="img/img-lancamentos/Imagem0.png" alt="Estreia 1" className="poster"/>
          <p>Estreia</p>
        </div>
        <div className="movie-card">
          <img src="img/img-lancamentos/Imagem1.png" alt="Estreia 2" className="poster"/>
          <p>Estreia</p>
        </div>
        <div className="movie-card">
          <img src="img/img-lancamentos/Imagem2.png" alt="Estreia 3" className="poster"/>
          <p>Estreia</p>
        </div>
        <div className="movie-card">
          <img src="img/img-lancamentos/Imagem3.png" alt="Estreia 4" className="poster"/>
          <p>Estreia</p>
        </div>
      </div>
    </div>
  );
}
