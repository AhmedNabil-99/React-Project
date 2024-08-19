import { useState } from "react";
import heart from "../../icons/heart.png"
import yellow_heart from "../../icons/yellow_heart.png"

export default function Mcard({ movie }) {

  const [isAdded, setIsAdded] = useState(false);

  function handelFavourit() {
    setIsAdded(!isAdded);
  }

  return (
    <div class="col">
    <div class="card mb-3 h-100" style={{boxShadow: "0 2px 8px rgba(0, 0, 0, .1)"}}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="card-img-top" alt="Movie Image"/>
      <div class="card-body">
        <h5 class="card-title">{movie.title}</h5>
        <div className="d-flex align-items-center justify-content-between">
          <p class="card-text m-0" style={{color: "rgba(0, 0, 0, .6)"}}>{movie.release_date}</p>
          <img src={isAdded ? yellow_heart : heart} alt="" onClick={handelFavourit} />
        </div>
        <div class="d-flex justify-content-center">
        </div>
      </div>
    </div>
  </div>
);
}
