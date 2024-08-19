import "./nav.css"
import vector from "../../icons/Vector.png"
import arrow from "../../icons/arrow right.png"
import { Link } from "react-router-dom"
export default function Nav() {
    return (
        <nav className="navbar navbar-expand" style={{ height: "55px"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" style={{ fontSize: "15px", fontWeight: 700 }} to="/">Movie App</Link>
                <div className="navbar-nav align-items-center">
                    <div className="d-flex align-items-center me-4">
                        <a className="nav-link" style={{ fontSize: "15px", fontWeight: 700 }} aria-current="page" href="#">En</a>
                        <img src={arrow} alt="" />
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={vector} alt="" />
                        <a className="nav-link" style={{ fontSize: "15px", fontWeight: 400 }} href="#">watchlist</a>
                    </div>
                </div>
                </div>
        </nav>
    )
}