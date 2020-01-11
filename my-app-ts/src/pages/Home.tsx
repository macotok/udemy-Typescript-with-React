import React, { FC, lazy, Suspense, useContext, useEffect } from 'react';
import AppContext from '../contexts/AppContext';
import { IAction, IEpisode, IEpisodeProps, IState } from '../interfaces';
import { fetchDataAction, toggleFavoriteAction } from '../actions';

const EpisodeList = lazy<any>(() => import('../components/EpisodeList'));

const Home: FC = () => {
  const { state, dispatch }: { state: IState, dispatch: IAction } = useContext(AppContext);
  const { episodes, favorites }: { episodes: IEpisode[], favorites: IEpisode[] } = state;

  useEffect(() => {
    episodes.length === 0 && fetchDataAction(dispatch)
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
