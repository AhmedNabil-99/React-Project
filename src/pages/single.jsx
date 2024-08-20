import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movie)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: 'd05c4cd1b7f5c2480d55c1a2931702d5',
        language: 'en-US',
      },
    })
    .then(res => setMovie(res.data))
    .catch(err => console.error('Error fetching movie details:', err));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-12" style={{ backgroundColor: 'white', height: 1339, position: 'relative' }}>
    //       <img
    //         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    //         alt="Poster"
    //         className="img-fluid rounded"
    //         style={{ width: 412, height: 618, position: 'absolute', top: 95, left: 53, borderRadius: 27 }}
    //       />
    //       <div
    //         style={{
    //           position: 'absolute',
    //           left: 497,
    //           top: 308,
    //           fontSize: 24,
    //           fontFamily: 'Inter',
    //           fontWeight: 400,
    //           wordWrap: 'break-word',
    //         }}
    //       >
    //         {movie.overview}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div class="card mb-3 border-0 mt-5 container-fluid">
        <div class="row g-0">
            <div class="col-md-4">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
            <div class="card-body ms-5">
                <h5 class="card-title" style={{fontSize: '48px', fontWeight: 600}}>{movie.title}</h5>
                <p class="card-text"><small className='text-muted' style={{fontSize: '12px', fontWeight: 400}}>{movie.release_date}</small></p>
                <p class="card-text mb-4" >{movie.overview}</p>
                {movie.genres.map(gener => (
                    <button className='btn m-2'  style={{backgroundColor: "#FFE353"}}>{gener.name}</button>
                ))}
                <div className='d-flex mt-4 mb-5'>
                    <p className='me-5'>Duration: {movie.runtime} Min.</p>
                    <p>Languages: {movie.spoken_languages.map(lang => (
                        <span className='m-2'>{lang.name}</span>
                    ))}
                    </p>
                </div>
            <div>
                {movie.production_companies.map(logo => (
                    <img src={`https://image.tmdb.org/t/p/w500${logo.logo_path}`}
                    alt='Logo'
                    className='m-2'
                    style={{width: 80, height: 50}}
                    />
                ))}
            </div>
            </div>
            </div>
        </div>
    </div>
  );
};