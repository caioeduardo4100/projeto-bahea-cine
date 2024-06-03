import './page.style.css';

export default function PreVendas() {
  return (
    <div className="container">
      <a href="/" className="back-link">Voltar para a Página Inicial</a>
      <h1 className="title">Filmes em Pré-Venda</h1>
      <div className="movies">
        <div className="movie-row">
          <div className="movie-card">
            <img src="/img/img-cartaz/panda4.png" alt="Kung Fu Panda 4" className="poster" />
            <p className="pre-sale">Pré-Venda</p>
            <div className="movie-info">
              <h2>Kung Fu Panda 4</h2>
              <p>Gênero: Animação, Aventura</p>
              <p>Classificação: Livre</p>
              <p>Diretor: Alessandro Carloni</p>
              <p>Duração: 95 min</p>
            </div>
          </div>
          <div className="movie-card">
            <img src="/img/img-cartaz/007.png" alt="Moscou contra 007 (From Russia with Love)" className="poster" />
            <p className="pre-sale">Pré-Venda</p>
            <div className="movie-info">
              <h2>From Russia with Love</h2>
              <p>Gênero: Ação, Espionagem</p>
              <p>Classificação: 14 anos</p>
              <p>Diretor: Terence Young</p>
              <p>Duração: 115 min</p>
            </div>
          </div>
          <div className="movie-card">
            <img src="/img/img-cartaz/rio2.png" alt="Rio 2" className="poster" />
            <p className="pre-sale">Pré-Venda</p>
            <div className="movie-info">
              <h2>Rio 2</h2>
              <p>Gênero: Animação, Aventura</p>
              <p>Classificação: Livre</p>
              <p>Diretor: Carlos Saldanha</p>
              <p>Duração: 101 min</p>
            </div>
          </div>
          <div className="movie-card">
            <img src="/img/img-cartaz/missao.png" alt="Missão Impossível: Efeito Fallout" className="poster" />
            <p className="pre-sale">Pré-Venda</p>
            <div className="movie-info">
              <h2>Mission: Impossible - Fallout</h2>
              <p>Gênero: Ação, Aventura</p>
              <p>Classificação: 12 anos</p>
              <p>Diretor: Christopher McQuarrie</p>
              <p>Duração: 147 min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
