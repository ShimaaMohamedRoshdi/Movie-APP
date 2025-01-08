import React, { useState } from 'react';
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';
import './header.css';
import Search from '../components/Search';


const Header = ( ) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <a href="/" className="logo">Cinema</a>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? 'Close' : 'Menu'}
      </button>
      <ul className={`nav ${menuOpen ? 'open' : ''}`}>
        {navListData.map(nav => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>
      <Search />
   
    </header>
  );
};

export default Header;
