import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Nav from "../components/navbar/nav";
import WatchList from "../pages/watch_list";
import { useState } from "react";
import contextFavList from "../context/context";
import SingleMovie from "../pages/single";

export default function Router() {

    return (
            <BrowserRouter>
                    <Nav />        
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/watchlist" element={<WatchList />}></Route>
                        <Route path="/movie/:id" element={<SingleMovie />}></Route>
                    </Routes>
            </ BrowserRouter>
    )
}