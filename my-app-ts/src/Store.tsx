import React, { createContext, useReducer } from 'react';
import { IState, IAction } from './Interfaces';

export const FETCH_DATA = 'FETCH_DATA';
export const ADD_FAVORITE = 'ADD_FAVORITE';

const initialState:IState = {
  episodes: [],
  favorites: []
};

export const Store = createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction) => {
  console.log(action)
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, episodes: action.payload };
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload ]};
    default:
      return state;
  }
};

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
  )
};
