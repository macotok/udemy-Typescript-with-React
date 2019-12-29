import React, { useContext, useEffect } from 'react';
import { Store, FETCH_DATA } from './Store';

interface IEpisode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: {medium: string, original: string}
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  url: string
}

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

  return (
    <>
      <ul className="episodeWrap">
        {
          state.episodes.map((episode: IEpisode) => (
            <li key={episode.id} className="episodeItem">
              <img src={episode.image.medium} alt={episode.name} />
              <p>{episode.name}</p>
              <p>Season: {episode.season} Number: {episode.number}</p>
            </li>
          ))
        }
      </ul>
    </>
  )
};

export default ReducerPractice;
