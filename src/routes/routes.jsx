import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Nav from "../components/navbar/nav";

export default function Router() {
    return (
        <BrowserRouter>
            <Nav />        
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </ BrowserRouter>
    )
}