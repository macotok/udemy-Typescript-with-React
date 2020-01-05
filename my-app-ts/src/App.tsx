import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styled/index.css';
import Default from './layouts/Default';
import { initialState, reducer } from './reducers';
import AppContext from './contexts/AppContext';
import { Router, RouteComponentProps } from '@reach/router';
import Home from './pages/Home';
import Favorite from './pages/Favorite';

const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps ) => props.pageComponent;

const App = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
   <>
     <AppContext.Provider value={{ state, dispatch }}>
       <Router>
        <Default path="/">
          <RouterPage pageComponent={<Home />} path="/" />
          <RouterPage pageComponent={<Favorite />} path="/favorite" />
        </Default>
       </Router>
     </AppContext.Provider>
   </>
  );
};

export default App;
