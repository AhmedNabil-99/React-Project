import React, { useState, useEffect } from "react";
import axios from "axios";
import "./welcom.css";

export default function Welcom({ setMovies, setTotalPages }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.trim() !== "") {
        axios
          .get("https://api.themoviedb.org/3/search/movie", {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY || "d05c4cd1b7f5c2480d55c1a2931702d5",
              query: searchTerm,
              language: "en-US",
            },
          })
          .then((res) => {
            setMovies(res.data.results);
            setTotalPages(res.data.total_pages); 
          })
          .catch((err) => {
            console.error("Error fetching the movies:", err);
          });
      } else {
        setMovies([]);
        setTotalPages(1); 
      }
    }, 10);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, setMovies, setTotalPages]);

  return (
    <div className="mx-5 px-5 py-5 mt-4" style={{ backgroundColor: "#F3F1F1" }}>
      <p style={{ fontSize: "32px", fontWeight: 600 }}>
        Welcome to our movie app
      </p>
      <p style={{ fontSize: "14px", fontWeight: 400 }}>
        Millions of movies, TV shows and people to discover. Explore now.
      </p>
      <div className="d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search and explore...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
