import React from 'react';
import './Header.css';
import SearchBar from './SearchBar';

const Header = () => {
  return(
    <header className="header-container">
      <div className="header">
        <p>Sell App</p>
        <SearchBar/>
        {/* Add location stuff with navigator*/}
        {/* Other pages*/}
        <p>Sell with logo</p>
        <p>ABout down arrow</p>
        <p>LogIN Sign Up</p>
      </div>
    </header>
  );
};

export default Header;
