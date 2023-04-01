import axios from "axios";
import {
  DELETE_MOVIE_FAILURE,
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
const url = "https://mock-server-m6hv.onrender.com/movies";

const getMovies = (params) => (dispatch) => {
  dispatch({ type: GET_MOVIE_REQUEST });
  return axios
    .get(`${url}`, params)
    .then((res) => dispatch({ type: GET_MOVIE_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_MOVIE_FAILURE }));
};

const postMovie = (payload) => (dispatch) => {
  dispatch({ type: POST_MOVIE_REQUEST });
  return axios
    .post(url, payload)
    .then((res) => dispatch({ type: POST_MOVIE_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: POST_MOVIE_FAILURE }));
};

const updateMove = (id, payload) => (dispatch) => {
  dispatch({ type: UPDATE_MOVIE_REQUEST });
  return axios
    .patch(`${url}/${id}`, payload)
    .then((res) => dispatch({ type: UPDATE_MOVIE_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: UPDATE_MOVIE_FAILURE }));
};

const deleteMovie = (id) => (dispatch) => {
  dispatch({ type: DELETE_MOVIE_REQUEST });
  return axios
    .delete(`${url}/${id}`)
    .then((res) => dispatch({ type: DELETE_MOVIE_SUCCESS, payload: id }))
    .catch((er) => dispatch({ type: DELETE_MOVIE_FAILURE }));
};

export { getMovies, postMovie, updateMove, deleteMovie };
