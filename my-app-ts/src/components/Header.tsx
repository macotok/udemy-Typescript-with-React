import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from '@reach/router';
import AppContext from '../contexts/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { favorites } = state;
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand>Check Favorite Episodes</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Item style={{marginRight: "1rem"}}><Link to="/">Home</Link></Nav.Item>
        <Nav.Item><Link to="/favorite">favorite{favorites.length > 1 ? 's' : null}: {favorites.length}</Link></Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Header;
