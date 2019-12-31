import React, {lazy, Suspense, useContext, useEffect} from 'react';
import { Index } from '../store';
import { toggleFavoriteAction } from '../store/actions';
import { IEpisodeProps } from '../interfaces';

const EpisodeList = lazy<any>(() => import('../components/EpisodeList'));

const Favorite = (): JSX.Element => {
  const { state, dispatch } = useContext(Index);
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
