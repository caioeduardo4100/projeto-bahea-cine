import React from 'react';
import './page.style.css';

const Page = () => {
  return (
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
  );
}

export default Page;
