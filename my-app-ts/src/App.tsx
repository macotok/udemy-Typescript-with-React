import React from 'react';
import TodoList from './TodoList';
import { Parent, Child} from './Context';
import ReducerPractice from './ReducerPractice';

const App = (): JSX.Element => {
  return (
   <>
     <TodoList />
     <Parent>
       <Child />
      </Parent>
      <ReducerPractice />
   </>
  );
};

export default App;
