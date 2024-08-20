import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Nav from "../components/navbar/nav";
import WatchList from "../pages/watch_list";
import { useState } from "react";
import contextFavList from "../context/context";

export default function Router() {
    const [favList, setFavList] = useState([])

    return (
            <BrowserRouter>
                <contextFavList.Provider value={{favList, setFavList}}>
                    <Nav />        
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/watchlist" element={<WatchList />}></Route>
                    </Routes>
                </contextFavList.Provider>
            </ BrowserRouter>
    )
}