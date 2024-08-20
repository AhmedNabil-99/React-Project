import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Nav from "../components/navbar/nav";
import WatchList from "../pages/watch_list";
import { useState } from "react";
import contextFavList from "../context/context";

export default function Router() {
    const [favList, setFavList] = useState([])

    return (
        <contextFavList.Provider value={{favList, setFavList}}>
            <BrowserRouter>
                <Nav />        
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/watchlist" element={<WatchList />}></Route>
                </Routes>
            </ BrowserRouter>
        </contextFavList.Provider>
    )
}