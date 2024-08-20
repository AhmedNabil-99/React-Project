import Welcom from "../components/welcoming/welcom"
import { useState } from "react";
import Cards from "../components/cards/cards";
import { axiosInstance } from "../netwotking/axiosinstance"
import { useContext } from "react";
import contextFavList from "../context/context";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    
    const {favList, setFavList} = useContext(contextFavList)
    console.log(favList)
    return (
        <div>
            <Welcom setMovies={setMovies} setTotalPages={setTotalPages} />
            <Cards 
                movies={movies} 
                totalPages={totalPages} 
                setTotalPages={setTotalPages} 
                setCurrentPage={setCurrentPage} 
                currentPage={currentPage} 
            />
        </div>
    )
}