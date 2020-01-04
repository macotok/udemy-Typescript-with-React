import React, { FC, lazy, Suspense, useContext } from 'react';
import AppContext from '../store/AppContext';
import { toggleFavoriteAction } from '../actions';
import { IEpisodeProps } from '../interfaces';

const EpisodeList = lazy<any>(() => import('../components/EpisodeList'));

const Favorite: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const { favorites } = state;

  const episodeProps: IEpisodeProps = {
    episodes: favorites,
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
  );
};

export default Favorite;
