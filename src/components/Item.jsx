import React, { useCallback, useRef } from 'react';
import '../assets/Item.css';

export const Item = ({ item, setSearch }) => {
  const topicRef = useRef('');

  const handleClickDiv = useCallback(() => {
    setSearch(topicRef.current.innerHTML)
  }, []);

  return (
    <div className="Item">
      <p ref={topicRef} onClick={handleClickDiv} >{item.name}</p>
      <span>{`🌟`} {item.stargazerCount}</span>
    </div>
  );
};
