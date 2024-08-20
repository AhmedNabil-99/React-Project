import { useContext, useState } from "react";
import heart from "../../icons/heart.png"
import yellow_heart from "../../icons/yellow_heart.png"
import contextFavList from "../../context/context";
import { useNavigate } from "react-router-dom";
import './Mcard.css'


export default function Mcard({ movie }) {

  const [isAdded, setIsAdded] = useState(false);
  const {favList, setFavList} = useContext(contextFavList)
  const navigate = useNavigate();


  function handelFavList() {
    if (isAdded) {
      setFavList(favList.filter(item => item.id !== movie.id));
      } else { 
        setFavList([...favList, movie]);
        }
        setIsAdded(!isAdded);
  }

  function handleCardClick() {
    navigate(`/movie/${movie.id}`);
  }

  return (
    <div className="col">
    <div className="card mb-3 h-100" style={{boxShadow: "0 2px 8px rgba(0, 0, 0, .1)"}}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="Movie Image"/>
      <div className="card-body">
        <h5 className="card-title btn" onClick={handleCardClick}>{movie.title}</h5>
        <div className="d-flex align-items-center justify-content-between">
          <p className="card-text m-0" style={{color: "rgba(0, 0, 0, .6)"}}>{movie.release_date}</p>
          <img src={isAdded ? yellow_heart : heart} alt="" onClick={handelFavList} />
        </div>
        <div className="d-flex justify-content-center">
        </div>
      </div>
    </div>
  </div>
);
}
