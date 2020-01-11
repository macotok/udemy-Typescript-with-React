import React, { FC, lazy, Suspense, useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { toggleFavoriteAction } from '../actions';
import { IAction, IEpisode, IEpisodeProps, IState } from '../interfaces';

const EpisodeList: any = lazy<any>(() => import('../components/EpisodeList'));

const Favorite: FC = () => {
  const { state, dispatch }: { state: IState, dispatch: IAction } = useContext(AppContext);
  const { favorites }: { favorites: IEpisode[] } = state;

  const episodeProps: IEpisodeProps = {
    episodes: favorites,
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
  );
};

export default Favorite;
