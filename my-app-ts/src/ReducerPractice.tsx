import React, { useContext, useEffect } from 'react';
import { Store, FETCH_DATA, ADD_FAVORITE, REMOVE_FAVORITE } from './Store';
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
    const episodeInFavorite = state.favorites.includes(episode);
    let dispatchObj: IAction = {
      type: ADD_FAVORITE,
      payload: episode,
    };
    if (episodeInFavorite) {
      const favoriteWithoutEpisode = state.favorites.find((favorite: IEpisode) => favorite.id === episode.id );
      dispatchObj = {
        type: REMOVE_FAVORITE,
        payload: favoriteWithoutEpisode,
      };
    }

    return dispatch(dispatchObj);
  };

  return (
    <>
      <header>
        <h1>Episodes and Favorite Episodes</h1>
        <p>Episode{state.favorites.length > 1 ? 's' : null }: {state.favorites.length}</p>
      </header>
      <ul className="episodeWrap">
        {
          state.episodes.map((episode: IEpisode) => (
            <li key={episode.id} className="episodeItem">
              <img src={episode.image.medium} alt={episode.name} />
              <p>{episode.name}</p>
              <div>
                <p>Season: {episode.season} Number: {episode.number}</p>
                <button type="button" onClick={() => toggleFavoriteAction(episode)}>
                  {state.favorites.find((favorite: IEpisode) => favorite.id === episode.id) ? 'UnFavorite' : 'Favorite'}
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
};

export default ReducerPractice;
