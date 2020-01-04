import React, { useContext } from 'react';
import { Index } from '../store';
import { Link } from '@reach/router';


const Episode = (props: any): JSX.Element => {
  const { state } = useContext(Index);

  return (
    <>
      <header>
        <h1>Episodes and Favorite Episodes</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorite">favorite{state.favorites.length > 1 ? 's' : null }: {state.favorites.length}</Link></li>
        </ul>
      </header>
      {props.children}
    </>
  )
};

export default Episode;
