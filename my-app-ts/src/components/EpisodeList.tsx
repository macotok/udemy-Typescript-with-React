import React, { FC } from 'react';
import { IEpisode, IEpisodeProps } from '../interfaces';

const EpisodeList: FC<IEpisodeProps | any> = ({ episodes, toggleFavoriteAction, store, favorites }) => {
  const { state, dispatch } = store;
  return (
    episodes.map((episode: IEpisode) => (
      <li key={episode.id} className="episodeItem">
        <img src={episode.image.medium} alt={episode.name} />
        <p>{episode.name}</p>
        <div>
          <p>Season: {episode.season} Number: {episode.number}</p>
          <button type="button" onClick={() => toggleFavoriteAction(state, dispatch, episode)}>
            {favorites.find((favorite: IEpisode) => favorite.id === episode.id) ? 'UnFavorite' : 'Favorite'}
          </button>
        </div>
      </li>
    ))
  );
};

export default EpisodeList;
