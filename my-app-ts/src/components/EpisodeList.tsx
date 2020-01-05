import React, { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import { IEpisode, IEpisodeProps } from '../interfaces';

const EpisodeList: FC<IEpisodeProps | any> = ({ episodes, toggleFavoriteAction, store, favorites }) => {
  const { state, dispatch } = store;
  return (
    episodes.map((episode: IEpisode) => {
      const isFavorite: IEpisode = favorites.includes(episode);
      return (
        <Card style={{width: '23%', margin: '2% 1% 0'}} key={episode.id} className="episodeItem">
          <Card.Img variant="top" src={episode.image.medium} alt={episode.name}/>
          <Card.Body>
            <Card.Title>{episode.name}</Card.Title>
            <Card.Text>
              number: {episode.number}
            </Card.Text>
            <Button variant={isFavorite ? "primary" : "secondary"} type="button" onClick={() => toggleFavoriteAction(state, dispatch, episode)}>
              {isFavorite ? "Stock" : "Favorite"}
            </Button>
          </Card.Body>
        </Card>
      )
    })
  );
};

export default EpisodeList;
