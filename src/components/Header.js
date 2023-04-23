import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </li>
          <li>
          <Link to="/add-post">
            <button className="add-post-button">Add Post</button>
          </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
