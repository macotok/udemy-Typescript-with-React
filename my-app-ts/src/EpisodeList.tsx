import React from 'react';
import { IEpisode } from './Interfaces';

const EpisodeList = (props: any) => {
  const { episodes, toggleFavoriteAction, favorites } = props;
  return (
    episodes.map((episode: IEpisode) => (
      <li key={episode.id} className="episodeItem">
        <img src={episode.image.medium} alt={episode.name} />
        <p>{episode.name}</p>
        <div>
          <p>Season: {episode.season} Number: {episode.number}</p>
          <button type="button" onClick={() => toggleFavoriteAction(episode)}>
            {favorites.find((favorite: IEpisode) => favorite.id === episode.id) ? 'UnFavorite' : 'Favorite'}
          </button>
        </div>
      </li>
    ))
  );
};

export default EpisodeList;
