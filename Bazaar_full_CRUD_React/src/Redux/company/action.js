import axios from "axios";
import {
  GET_STOCK_FAILURE,
  GET_STOCK_REQUEST,
  GET_STOCK_SUCCESS,
  POST_STOCK_FAILURE,
  POST_STOCK_REQUEST,
  POST_STOCK_SUCCESS,
  UPDATE_STOCK_REQUEST,
  UPDATE_STOCK_SUCCESS,
  UPDATE_STOCK_FAILURE,
  DELETE_STOCK_REQUEST,
  DELETE_STOCK_SUCCESS,
  DELETE_STOCK_FAILURE,
} from "./actionType";

const url = "https://mock-server-m6hv.onrender.com/industry";

const postStocks = (payload) => (dispatch) => {
  dispatch({ type: POST_STOCK_REQUEST });
  return axios
    .post(`${url}`, payload)
    .then((res) => dispatch({ type: POST_STOCK_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: POST_STOCK_FAILURE }));
};

const getStocks = (params) => (dispatch) => {
  dispatch({ type: GET_STOCK_REQUEST });
  return axios
    .get(`${url}`, params)
    .then((res) => dispatch({ type: GET_STOCK_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_STOCK_FAILURE }));
};

const updateStocks = (id, payload) => (dispatch) => {
  dispatch({ type: UPDATE_STOCK_REQUEST });
  return axios
    .patch(`${url}/${id}`, payload)
    .then((res) => dispatch({ type: UPDATE_STOCK_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: UPDATE_STOCK_FAILURE }));
};

const deleteStocks = (id) => (dispatch) => {
  dispatch({ type: DELETE_STOCK_REQUEST });
  return axios
    .delete(`${url}/${id}`)
    .then((res) => dispatch({ type: DELETE_STOCK_SUCCESS, payload: id }))
    .catch((err) => dispatch({ type: DELETE_STOCK_FAILURE }));
};

export { postStocks, getStocks, updateStocks, deleteStocks };
