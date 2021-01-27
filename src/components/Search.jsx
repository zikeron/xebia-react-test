import React, { useCallback, useRef, useState } from 'react';
import { useTopics } from '../Hooks/useTopics';
import { Item } from './Item';
import '../assets/Search.css';

export const Search = () => {
  const [search, setSearch] = useState('');
  const searchInputRef = useRef(null);
  const { topic, loading } = useTopics(search);

  const handleClickSearch = useCallback(() => {
    setSearch(searchInputRef.current.value);
  }, []);

  return (
    <>
      <div className="Search">
        <input
          type="text"
          defaultValue=""
          ref={searchInputRef}
          placeholder={'type a topic'}
        />
        <button onClick={handleClickSearch}>{'Search'}</button>
      </div>
      <div className="results__wrapper">
        {loading === true ? (
          <div>
            <p className="results__label">{'Loading data...'}</p>
          </div>
        ) : (
          <div>
            {search !== '' && topic.length > 0 ? (
              <p className="results__label">
                {`Topics related to `}
                <b>{search}</b>
              </p>
            ) : <p className="results__label">
              <b>{`No results`}</b>
            </p>}
            {topic.map((item) => (
              <Item key={item.id} item={item} setSearch={setSearch} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
