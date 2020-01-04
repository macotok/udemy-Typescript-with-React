import React, { FC, ReactNode, useContext } from 'react';
import { Link } from '@reach/router';
import AppContext from '../store/AppContext';

type Props = {
  path: string;
  children: ReactNode;
}

const Default: FC<Props> = ({ children }) => {
  const { state } = useContext(AppContext);

  return (
    <>
      <header>
        <h1>Episodes and Favorite Episodes</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorite">favorite{state.favorites.length > 1 ? 's' : null }: {state.favorites.length}</Link></li>
        </ul>
      </header>
      {children}
    </>
  )
};

export default Default;
