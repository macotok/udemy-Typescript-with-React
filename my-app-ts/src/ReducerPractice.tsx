import React, { useContext } from 'react';
import { Store } from './Store';

const ReducerPractice = () => {
  const store = useContext(Store);
  console.log(store);
  return (
    <>
      <p>hoge</p>
    </>
  )
};

export default ReducerPractice;
