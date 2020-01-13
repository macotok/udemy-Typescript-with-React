import React, { FC, useContext } from 'react';
import { Alert, Nav, Navbar } from 'react-bootstrap';
import { Link } from '@reach/router';
import AppContext from '../contexts/AppContext';
import { IEpisode, IState } from '../interfaces';

const Header: FC = () => {
  const { state: { favorites } }: { state: IState, favorites: IEpisode[] } = useContext(AppContext);
  return (
    <>
      <Alert variant="secondary">
        このサイトのRepositoryは「
        <a href="https://github.com/macotok/udemy-Typescript-with-React" target="_blank">
          macotok/udemy-Typescript-with-React
        </a>
        」<br />
        ReactにTypeScriptを導入しました。
      </Alert>
      <Navbar bg="light" variant="light">
        <Navbar.Brand>Check Favorite Episodes</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item style={{marginRight: "1rem"}}><Link to="/">Home</Link></Nav.Item>
          <Nav.Item><Link to="/favorite">favorite{favorites.length > 1 ? 's' : null}: {favorites.length}</Link></Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
