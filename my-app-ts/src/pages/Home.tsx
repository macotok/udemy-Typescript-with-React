import React, { lazy, Suspense, useContext, useEffect } from 'react';
import AppContext from '../store/AppContext';
import { IEpisodeProps } from '../interfaces';
import { fetchDataAction, toggleFavoriteAction } from '../actions';

const EpisodeList = lazy<any>(() => import('../components/EpisodeList'));

const Home = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);
  const { episodes, favorites } = state;

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  });

  const episodeProps: IEpisodeProps = {
    episodes,
    store: { state, dispatch },
    toggleFavoriteAction,
    favorites,
  };

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <div className="episodeWrap">
          <EpisodeList {...episodeProps} />
        </div>
      </Suspense>
    </>
  )
};

export default Home;
