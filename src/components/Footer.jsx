import React from 'react';
import '../assets/Footer.css';

export const Footer = () => {
  const date = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="Footer">
      <p className="Footer__copy">{`Xebia Test All rights reserved © ${date()}`}</p>
    </div>
  );
};
