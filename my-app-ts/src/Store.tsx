import React, { createContext } from 'react';
export const FETCH_DATA = 'FETCH_DATA';

interface IState {
  episodes: [],
  favorites: []
}

interface IAction {
  type: string,
  payload: any
}

const initialState:IState = {
  episodes: [],
  favorites: []
};

export const Store = createContext<IState>(initialState);

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
};

export const StoreReducer = (props: any): JSX.Element => (
  <Store.Provider value={initialState}>{props.children}</Store.Provider>
)
