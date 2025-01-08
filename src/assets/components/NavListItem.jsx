import React from 'react';
import './NavListItem.css'
const NavListItem = ({ nav }) => {
  return (
    <li>
      <a href={nav.link}>{nav.name}</a>
    </li>
  );
};

export default NavListItem;
