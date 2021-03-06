import { Dispatch, IAction, IEpisode, IState } from '../interfaces';

export const FETCH_DATA: string = 'FETCH_DATA';
export const ADD_FAVORITE: string = 'ADD_FAVORITE';
export const REMOVE_FAVORITE: string = 'REMOVE_FAVORITE';

export const fetchDataAction = async (dispatch: Dispatch) => {
  const data: any = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
  const dataJson: any = await data.json();
  return dispatch({
    type: FETCH_DATA,
    payload: dataJson._embedded.episodes,
  });
};

export const toggleFavoriteAction = (state: IState, dispatch: Dispatch, episode: IEpisode | any): IAction => {
  const { favorites }: { favorites: IEpisode[] } = state;

  let dispatchObj: IAction = {
    type: ADD_FAVORITE,
    payload: episode,
  };

  const episodeInFavorite: boolean = favorites.includes(episode);
  if (episodeInFavorite) {
    const favoriteWithoutEpisode: IEpisode | undefined = favorites.find((favorite: IEpisode) => favorite.id === episode.id );
    dispatchObj = {
      type: REMOVE_FAVORITE,
      payload: favoriteWithoutEpisode,
    };
  }

  return dispatch(dispatchObj);
};
