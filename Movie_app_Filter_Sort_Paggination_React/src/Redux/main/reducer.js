import {
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  POST_MOVIE_FAILURE,
  POST_MOVIE_REQUEST,
  POST_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAILURE,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
} from "./actionType";

const initialState = {
  movies: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIE_REQUEST:
      return { ...state, isLoading: true };
    case GET_MOVIE_SUCCESS:
      return { ...state, isLoading: false, movies: payload };
    case GET_MOVIE_FAILURE:
      return { ...state, isLoading: false, isError: true };
    // Post
    case POST_MOVIE_REQUEST:
      return { ...state, isLoading: true };
    case POST_MOVIE_SUCCESS:
      return { ...state, isLoading: false, movies: [...state.movies, payload] };
    case POST_MOVIE_FAILURE:
      return { ...state, isLoading: false, isError: true };
    //Update
    case UPDATE_MOVIE_REQUEST:
      return { ...state, isLoading: true };
    case UPDATE_MOVIE_SUCCESS:
      const updatedMovie = state.movies.map((item) =>
        item.id === payload.id ? payload : item
      );
      return { ...state, isLoading: false, movies: updatedMovie };
    case UPDATE_MOVIE_FAILURE:
      return { ...state, isLoading: false, isError: true };
    // Delete

    case DELETE_MOVIE_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_MOVIE_SUCCESS:
      const filteredMovie = state.movies.filter((item) => item.id !== payload);
      return { ...state, isLoading: false, movies: filteredMovie };
    default:
      return state;
  }
};

export { reducer };
