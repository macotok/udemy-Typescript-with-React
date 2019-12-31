import React, { lazy, Suspense, useContext, useEffect } from 'react';
import { Index } from '../store';
import { IEpisodeProps } from '../interfaces';
import { fetchDataAction, toggleFavoriteAction } from '../store/actions';

const EpisodeList = lazy<any>(() => import('../components/EpisodeList'));

const Home = (): JSX.Element => {
  const { state, dispatch } = useContext(Index);
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
        <ul className="episodeWrap">
          <EpisodeList {...episodeProps} />
        </ul>
      </Suspense>
    </>
  )
};

export default Home;
