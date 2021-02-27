import { SET_MOVIES } from "../actionTypes";

const initialState = {
  movies: ['movie1', 'movie2'],
};

export default function movieReducer (state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES: {
      const { id, content } = action.payload;
      return {
        ...state,
        movies: content
      };
    }
    default:
      return state;
  }
}
