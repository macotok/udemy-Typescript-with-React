import React, { FC, ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';

type Props = {
  path: string;
  children: ReactNode;
}

const Default: FC<Props> = ({ children }) => (
  <>
    <Container>
      <Header />
      {children}
    </Container>
  </>
);

export default Default;
