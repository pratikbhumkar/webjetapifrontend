import { SET_MOVIES, GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE } from "../actionTypes";

const initialState = {
  movies: null,
};

export default function movieReducer (state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES: {
      return {
        ...state,
        movies: action.payload
      };
    }
    default:
      return state;
  }
}

export async function fetchMovies(dispatch, getState) {

  var requestOptions = {
    method: 'GET'
  };
  fetch("https://localhost:44367/api/Movies", requestOptions)
    .then(response => response.json())
    .then(result => {
      dispatch({ type: 'SET_MOVIES', payload: result })
    })
    .catch(error => console.log('error', error));
}