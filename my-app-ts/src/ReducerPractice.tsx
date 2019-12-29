import React, { useContext, useEffect, lazy, Suspense } from 'react';
import { Store, FETCH_DATA, ADD_FAVORITE, REMOVE_FAVORITE } from './Store';
import { IAction, IEpisode } from './Interfaces';

const EpisodeList = lazy<any>(() => import('./EpisodeList'));

const ReducerPractice = () => {
  const { state, dispatch } = useContext(Store);
  const { episodes, favorites } = state;

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  });

  const fetchDataAction = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(URL);
    const dataJson = await data.json();
    return dispatch({
      type: FETCH_DATA,
      payload: dataJson._embedded.episodes,
    });
  };

  const toggleFavoriteAction = (episode: IEpisode): IAction => {
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

  const episodeProps = {
    episodes,
    toggleFavoriteAction,
    favorites,
  };

  return (
    <>
      <header>
        <h1>Episodes and Favorite Episodes</h1>
        <p>Episode{state.favorites.length > 1 ? 's' : null }: {state.favorites.length}</p>
      </header>
      <Suspense fallback={<div>loading...</div>}>
        <ul className="episodeWrap">
          <EpisodeList {...episodeProps} />
        </ul>
      </Suspense>
    </>
  )
};

export default ReducerPractice;
