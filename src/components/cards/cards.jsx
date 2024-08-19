import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Mcard from '../Mcard/Mcard';
import Pagination from '../pagination/pagination';
// import './cards.css';

export default function Cards({ movies, totalPages, setTotalPages, setCurrentPage, currentPage }) {
  const [originalMovies, setOriginalMovies] = useState([]);

  useEffect(() => {
    if (movies.length === 0) {
      axios
        .get("https://api.themoviedb.org/3/movie/popular", {
          params: {
            api_key: 'd05c4cd1b7f5c2480d55c1a2931702d5',
            language: 'en-US',
            page: currentPage,
          },
        })
        .then((res) => {
          setOriginalMovies(res.data.results);
          setTotalPages(res.data.total_pages); 
        })
        .catch((err) => {
          console.error("Error fetching the movies:", err);
        });
    }
  }, [movies, currentPage, setTotalPages]);

  const displayedMovies = movies.length > 0 ? movies : originalMovies;

  return (
    <>
      <div className="container-fluid ms-0 px-2 me-0 d-flex justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 gy-5 mt-5">
      {displayedMovies.map(movie => (
          <Mcard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
    </>
  );
}
