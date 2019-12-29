import React, { useContext, useEffect } from 'react';
import { Store, FETCH_DATA, ADD_FAVORITE } from './Store';
import { IAction, IEpisode } from './Interfaces';

const ReducerPractice = () => {
  const { state, dispatch } = useContext(Store);

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
    return dispatch({
      type: ADD_FAVORITE,
      payload: episode,
    })
  };

  return (
    <>
      <ul className="episodeWrap">
        {
          state.episodes.map((episode: IEpisode) => (
            <li key={episode.id} className="episodeItem">
              <img src={episode.image.medium} alt={episode.name} />
              <p>{episode.name}</p>
              <div>
                <p>Season: {episode.season} Number: {episode.number}</p>
                <button type="button" onClick={() => toggleFavoriteAction(episode)}>Favorite</button>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
};

export default ReducerPractice;
