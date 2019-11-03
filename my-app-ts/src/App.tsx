import React from 'react';

const App = (): JSX.Element => {
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  return (
   <>
    <p>{sum(1, 2)}</p>
   </>
  );
};

export default App;
