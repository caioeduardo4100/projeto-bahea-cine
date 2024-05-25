import React from 'react';
import './page.style.css';

const Page = () => {
  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">Cartaz</h1> 
      </div>

      <div className="movies">
        <div className="movie-row">
          <div className="movie-card">
            <img src="/img/img-cartaz/panda4.png" alt="Kung Fu Panda 4" className="poster"/>
            <p>Em Cartaz</p>
          </div>
        
          <div className="movie-card">
            <img src="/img/img-cartaz/007.png" alt="Moscou contra 007 (From Russia with Love)" className="poster"/>
            <p>Em Cartaz</p>
          </div>
          <div className="movie-row">
          <div className="movie-card">
            <img src="/img/img-cartaz/rio2.png" alt="Rio 2" className="poster"/>
            <p>Em Cartaz</p>
          </div>
        </div>
        
          <div className="movie-card">
            <img src="img/img-cartaz/missao.png" alt="Missão Impossível: Efeito Fallout" className="poster"/>
            <p>Em Cartaz</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
