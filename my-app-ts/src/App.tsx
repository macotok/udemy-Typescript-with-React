import React from 'react';
import TodoList from './TodoList';
import { Parent, Child} from './Context';
import ReducerPractice from './ReducerPractice';
import { StoreProvider } from './Store';
import './index.css';

const App = (): JSX.Element => {
  return (
   <>
     {/*<TodoList />*/}
     {/*<Parent>*/}
     {/*  <Child />*/}
     {/* </Parent>*/}
     <StoreProvider>
        <ReducerPractice />
      </StoreProvider>
   </>
  );
};

export default App;
