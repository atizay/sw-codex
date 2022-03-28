import React from 'react';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import App from "../app/app";
import PlanetPage from "../planet-page/planet-page";

const Header = () => {

  return (
    <BrowserRouter>
      <header>
        <div className="container container_header">
          <Link to="/" className="logo">
            <img src="img/logo.png" alt="" className="logo-img" />
          </Link>
          <nav>
            <ul className="menu-list">
              <li className="menu-list__item">
                <Link to="/" className="menu-list__link">
                  Characters
                </Link>
              </li>
              <li className="menu-list__item">
                <Link to="/planets" className="menu-list__link">
                  Planets
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/planets" element={<PlanetPage />} />
        {/*<Route path="*" element={<p>404</p>} />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default Header;