import React, { FC, ReactNode, useContext } from 'react';
import { Link } from '@reach/router';
import { Container, Navbar, Nav } from 'react-bootstrap';
import AppContext from '../store/AppContext';

type Props = {
  path: string;
  children: ReactNode;
}

const Default: FC<Props> = ({ children }) => {
  const { state } = useContext(AppContext);

  return (
    <>
      <Container>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>Check Favorite Episodes</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Item style={{ marginRight: "1rem" }}><Link to="/">Home</Link></Nav.Item>
            <Nav.Item><Link to="/favorite">favorite{state.favorites.length > 1 ? 's' : null }: {state.favorites.length}</Link></Nav.Item>
          </Nav>
        </Navbar>
        {children}
      </Container>
    </>
  )
};

export default Default;
