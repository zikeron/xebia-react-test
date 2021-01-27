import React from 'react';
import '../assets/Header.css'

export const Header = ({title}) => {
  return <header>
    <div className="header__title">
      <p>{title}</p>
    </div>
  </header>
};
