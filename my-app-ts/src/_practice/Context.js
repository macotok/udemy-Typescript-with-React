import React, { createContext, useContext } from 'react';

const Store = createContext();

export const Parent = ({ children }) => {
  const obj = {
    text: 'random text'
  };
  return (
    <Store.Provider value={obj}>{children}</Store.Provider>
  )
};

export const Child = () => {
  const hook = useContext(Store);
  return (
    <p>{hook.text}</p>
  );
};
