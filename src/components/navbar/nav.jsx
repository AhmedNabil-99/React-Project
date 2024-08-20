import "./nav.css";
import vector from "../../icons/Vector.png";
import arrow from "../../icons/arrow right.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LanguageContext from "../../context/languageContext";
export default function Nav() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand" style={{ height: "55px" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" style={{ fontSize: "15px", fontWeight: 700 }} to="/">Movie App</Link>
        <div className="navbar-nav align-items-center">
          <div className="d-flex align-items-center me-4">
            <a className="navbar navbar-expand nav-link" style={{ fontSize: "15px", fontWeight: 700 }} onClick={toggleLanguage}>
              {language === 'en' ? 'En' : 'Ar'}
            </a>
            <img src={arrow} alt="" />
          </div>
          <div className="d-flex align-items-center">
            <img src={vector} alt="" />
            <Link className="nav-link" style={{ fontSize: "15px", fontWeight: 400 }} to="/watchlist">watchlist</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
