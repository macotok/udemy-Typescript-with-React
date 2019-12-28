import React, { useState } from 'react';

type formElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string,
  complete: boolean
}

const TodoList = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: formElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const newTodos: ITodo[] = todos;
    newTodos[index].complete = !todos[index].complete;
    setTodos(newTodos);
  }

  return (
   <>
     <h1>ToDo List</h1>
     <form onSubmit={handleSubmit}>
       <input type="text" value={value} onChange={e => setValue(e.target.value)} />
       <button type="submit">Add ToDo</button>
     </form>
     <ul>
       {
         todos.map((todo: ITodo, index: number) => (
           <li key={index}>
             <span>{todo.text}</span>
             <button type="button" onClick={() => completeTodo(index)}>
               {todo.complete ? 'Incomplete' : 'complete'}
             </button>
           </li>
         ))
       }
     </ul>
   </>
  );
};

export default TodoList;
