import React from 'react';
import './index.css';
import Episode from './Episode';
import { StoreProvider } from './store';
import { Router, RouteComponentProps } from '@reach/router';
import Home from './pages/Home';
import Favorite from './pages/Favorite';

const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps ) => props.pageComponent;

const App = (): JSX.Element => {
  return (
   <>
     <StoreProvider>
       <Router>
        <Episode path="/">
          <RouterPage pageComponent={<Home />} path="/" />
          <RouterPage pageComponent={<Favorite />} path="/favorite" />
        </Episode>
       </Router>
      </StoreProvider>
   </>
  );
};

export default App;
