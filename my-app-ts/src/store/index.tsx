import { IState, IAction, IEpisode } from '../interfaces';

export const FETCH_DATA = 'FETCH_DATA';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const initialState:IState = {
  episodes: [],
  favorites: []
};

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, episodes: action.payload };
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload ]};
    case REMOVE_FAVORITE:
      state.favorites.forEach((favorite: IEpisode, index: number): void => {
        if (favorite.id === action.payload.id) {
          state.favorites.splice(index, 1);
        }
      });
      return { ...state };
    default:
      return state;
  }
};
