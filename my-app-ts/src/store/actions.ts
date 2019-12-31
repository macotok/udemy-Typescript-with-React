import { ADD_FAVORITE, FETCH_DATA, REMOVE_FAVORITE } from './index';
import { IAction, IEpisode, IState } from '../interfaces';

export const fetchDataAction = async (dispatch: any) => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(URL);
    const dataJson = await data.json();
    return dispatch({
      type: FETCH_DATA,
      payload: dataJson._embedded.episodes,
    });
  };

  export const toggleFavoriteAction = (state: IState, dispatch: any, episode: IEpisode | any): IAction => {
    const episodeInFavorite = state.favorites.includes(episode);
    let dispatchObj: IAction = {
      type: ADD_FAVORITE,
      payload: episode,
    };
    if (episodeInFavorite) {
      const favoriteWithoutEpisode = state.favorites.find((favorite: IEpisode) => favorite.id === episode.id );
      dispatchObj = {
        type: REMOVE_FAVORITE,
        payload: favoriteWithoutEpisode,
      };
    }

    return dispatch(dispatchObj);
  };
