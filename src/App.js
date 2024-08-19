import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/navbar/nav';
import Welcom from './components/welcoming/welcom';
import Cards from './components/cards/cards';

function App() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <Nav />
      <Welcom setMovies={setMovies} setTotalPages={setTotalPages} />
      <Cards 
        movies={movies} 
        totalPages={totalPages} 
        setTotalPages={setTotalPages} 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage} 
      />
    </div>
  );
}

export default App;
