import React, { useState } from 'react';

type formElem = React.FormEvent<HTMLFormElement>
const TodoList = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const handleSubmit = (e: formElem): void => {
    e.preventDefault();
    setValue('');
  };

  return (
   <>
     <h1>ToDo List</h1>
     <form onSubmit={handleSubmit}>
       <input type="text" value={value} onChange={e => setValue(e.target.value)} />
       <button type="submit">Add ToDo</button>
     </form>
   </>
  );
};

export default TodoList;
