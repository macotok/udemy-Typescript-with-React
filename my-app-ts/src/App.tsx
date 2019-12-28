import React from 'react';
import TodoList from './TodoList';
import { Parent, Child} from './Context';

const App = (): JSX.Element => {
  return (
   <>
     <TodoList />
     <Parent>
       <Child />
      </Parent>
   </>
  );
};

export default App;
