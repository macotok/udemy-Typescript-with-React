import React, { lazy, Suspense, useContext, useEffect } from 'react';
import { ADD_FAVORITE, FETCH_DATA, Index, REMOVE_FAVORITE } from '../store';
import { IAction, IEpisode, IEpisodeProps } from '../interfaces';

const EpisodeList = lazy<any>(() => import('../components/EpisodeList'));

const Home = (): JSX.Element => {
  const { state, dispatch } = useContext(Index);
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

  const episodeProps: IEpisodeProps = {
    episodes,
    toggleFavoriteAction,
    favorites,
  };

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <ul className="episodeWrap">
          <EpisodeList {...episodeProps} />
        </ul>
      </Suspense>
    </>
  )
};

export default Home;
