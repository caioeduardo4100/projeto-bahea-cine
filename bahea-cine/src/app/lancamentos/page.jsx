import './page.style.css';

export default function Lancamentos() {
  return (
    <div className="container">
      <a href={"/"} className="back-link">Voltar para a Página Inicial</a>
      <h1 className="title">Filmes em Estreias</h1>

      <div className="movies">
        <div className="movie-card">
          <img src="img/img-lancamentos/Imagem0.png" alt="Estreia 1" className="poster"/>
          <p className="pre-sale">Estreia</p>
          <div className="movie-info">
            <h2>Filme 1</h2>
            <p>Gênero: Ação</p>
            <p>Classificação: 12 anos</p>
            <p>Diretor: Diretor 1</p>
            <p>Duração: 120 min</p>
          </div>
        </div>
        <div className="movie-card">
          <img src="img/img-lancamentos/Imagem1.png" alt="Estreia 2" className="poster"/>
          <p className="pre-sale">Estreia</p>
          <div className="movie-info">
            <h2>Filme 2</h2>
            <p>Gênero: Comédia</p>
            <p>Classificação: Livre</p>
            <p>Diretor: Diretor 2</p>
            <p>Duração: 90 min</p>
          </div>
        </div>
        <div className="movie-card">
          <img src="img/img-lancamentos/Imagem2.png" alt="Estreia 3" className="poster"/>
          <p className="pre-sale">Estreia</p>
          <div className="movie-info">
            <h2>Filme 3</h2>
            <p>Gênero: Drama</p>
            <p>Classificação: 16 anos</p>
            <p>Diretor: Diretor 3</p>
            <p>Duração: 110 min</p>
          </div>
        </div>
        <div className="movie-card">
          <img src="img/img-lancamentos/Imagem3.png" alt="Estreia 4" className="poster"/>
          <p className="pre-sale">Estreia</p>
          <div className="movie-info">
            <h2>Filme 4</h2>
            <p>Gênero: Aventura</p>
            <p>Classificação: 10 anos</p>
            <p>Diretor: Diretor 4</p>
            <p>Duração: 130 min</p>
          </div>
        </div>
      </div>
    </div>
  );
}
